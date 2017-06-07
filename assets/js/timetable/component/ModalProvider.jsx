// @flow

/* eslint
react/jsx-no-target-blank: warn,
class-methods-use-this: warn,
*/

import React from 'react';
import $ from 'jquery';
import moment from 'moment-timezone';
import toastr from 'toastr';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-full-width',
  preventDuplicates: false,
  onclick: null,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

/* globals HTMLElement */

type Props = {
  children: React.Component<*>,
  topics: Array<Object>,
  langs: Object,
  timeslots: Object,
  venues: Object,
  speakers: Array<Object>,
  sponsors: Object,
  user: Object | null,
  agenda: {[key: string]: string},
  sessions: Object | null,
  addTopic(topic: string): void,
  removeTopic(topic: string): void,
};

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatTime(timeslots, day, startTime, endTime) {
  const timeFormat = 'hh:mm A';
  const dateFormat = 'Do MMMM';
  const startTimeslot = timeslots[day][startTime];
  const endTimeslot = (endTime && timeslots[day][endTime]) || timeslots[day][startTime];
  const date = moment(startTimeslot.timeStart).tz('Asia/Hong_Kong').format(dateFormat);
  const timeStart = moment(startTimeslot.timeStart).tz('Asia/Hong_Kong').format(timeFormat);
  const timeEnd = moment(endTimeslot.timeEnd).tz('Asia/Hong_Kong').format(timeFormat);
  return `${timeStart} - ${timeEnd} (${date})`;
}

export default class ModalProvider extends React.Component {
  static childContextTypes = {
    openModal: React.PropTypes.func,
    closeModal: React.PropTypes.func,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      topic: null,
      session: null,
      community: null,
      type: 'topic',
    };
    this.saved = props.agenda ? Object.values(props.agenda) : [];
  }

  state: {
    topic: string | null,
    session: string | null,
    community: string | null,
    type: 'topic' | 'session' | 'community',
  };


  getChildContext() {
    return {
      openModal: (type: 'topic' | 'session' | 'community', id: string) => {
        this.setState({ type, [type]: id });
        $(this.modal).modal('open');
      },
      closeModal: () => {
        $(this.modal).modal('close');
      },
    };
  }

  componentDidMount() {
    $(this.modal).modal();
  }

  componentWillReceiveProps(nextProps: Props) {
    this.saved = nextProps.agenda ? Object.values(nextProps.agenda) : [];
  }

  saved: Array<any>;
  props: Props;
  modal: HTMLElement;

  handleClick() {
    if (!this.props.user) {
      toastr.error('', 'You have to sign in before saving your personal schedule');
      $('#signin-modal').modal('open');
      return;
    }
    const topic = this.state.topic;
    if (!topic) return;
    const saved = this.saved.indexOf(topic) !== -1;
    if (saved) {
      this.props.removeTopic(topic);
    } else {
      this.props.addTopic(topic);
    }
  }

  renderSpeakers(topic: Object) {
    const speakers = topic.speaker.map(id => this.props.speakers[id]);
    const title = (speakers.length > 1) ? 'Speakers' : 'Speaker';
    return (
      <div className="speakers">
        <h3>{title}</h3>
        {speakers.map((speaker) => {
          const hasSocial = 'social' in speaker;
          const icon = 'portrait' in speaker && speaker.portrait ? speaker.portrait : 'https://file.hkoscon.org/speakers/2017/unknown.png';
          const nickname = hasSocial && 'nickname' in speaker.social && speaker.social.nickname ? <span className="nickname">{ speaker.social.nickname }</span> : '';
          return (
            <div className="row speaker">
              <div className="col s12 m3 l2">
                <img src={icon} className="responsive-img circle z-depth-2" alt={speaker.name} />
              </div>
              <div className="col s12 m9 l10">
                <div className="speaker-name">
                  <span className="name">{speaker.name}</span>
                  {nickname}
                </div>
                <div className="social">
                  {hasSocial && 'github' in speaker.social && (
                    <a
                      href={`https://github.com/${speaker.social.github}`}
                      title="Github" alt="Github"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <i className="fa fa-github globe" />
                    </a>
                  )}
                  {hasSocial && 'project_github' in speaker.social && (
                    <a
                      href={speaker.social.project_github}
                      title="Github of the Project" alt="Github of the Project"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <i className="fa fa-github globe" />
                    </a>
                  )}
                  {hasSocial && 'twitter' in speaker.social && (
                    <a
                      href={speaker.social.twitter}
                      title="Twitter" alt="Twitter"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  )}
                  {hasSocial && 'blog' in speaker.social && (
                    <a
                      href={speaker.social.blog}
                      title="Blog" alt="Blog"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <i className="fa fa-globe" />
                    </a>
                  )}
                  {hasSocial && 'facebook' in speaker.social && (
                    <a
                      href={speaker.social.facebook}
                      title="Facebook" alt="Facebook"
                      rel="noopener noreferrer" target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  )}
                </div>
                <div className="description">
                  { speaker.description.map(paragraph => (<p dangerouslySetInnerHTML={{ __html: paragraph }} />))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderLang(topic: Object) {
    // language
    const lang = this.props.langs[topic.lang] || { name: '' };
    const langSlide = this.props.langs[topic.lang_slide] || null;
    const langStr = (langSlide !== null && lang.name !== langSlide.name) ?
      `${lang.name} (${langSlide.name} Slides)` : lang.name;
    return (langStr !== '') ? (
      <div className="language">
        <i className="fa fa-commenting-o" aria-hidden="true" />
        {langStr}
      </div>
    ) : null;
  }

  renderLevel(topic: Object) {
    // level
    let level = (<span><i className="fa fa-users" aria-hidden="true" /> For General Public</span>);
    if (topic.level === 'Intermediate') level = (<span><i className="fa fa-graduation-cap" aria-hidden="true" /> For Coders and Tech Audiences with General Knowledge and Skills.</span>);
    if (topic.level === 'Advanced') level = (<span><i className="fa fa-rocket" aria-hidden="true" /> For Advanced Coders &amp; Tech Audiences.</span>);
    return (
      <div className="level">
        {level}
      </div>
    );
  }

  renderTime(topic: Object) {
    const { timeslots } = this.props;
    const topicTime = topic.startTime.split('.');
    const day = topicTime[0];
    const startTime = topicTime[1];
    const endTime = (topic.endTime) ? topic.endTime.split('.')[1] : null;
    const formattedTime = formatTime(timeslots, day, startTime, endTime);
    return (
      <div className="time">
        <i className="fa fa-calendar" aria-hidden="true" />
        {formattedTime}
      </div>
    );
  }

  renderVenue(topic: Object) {
    return (topic.venue) ? (
      <div className="location">
        <i className="fa fa-map-signs" aria-hidden="true" />
        { this.props.venues[topic.venue].name }
      </div>
    ) : null;
  }

  renderReq(topic: Object) {
    return (topic.requirement) ?
      (<div className="requirement"><i className="fa fa-star" aria-hidden="true" /> Required: {topic.requirement}</div>) :
      null;
  }

  renderSponsor(topic: Object) {
    if (!topic.sponsor) return null;
    const { sponsors } = this.props;
    const sponsor = sponsors.sponsor_types.reduce(
      (acc, sponsorType) => {
        const found = sponsorType.sponsors.find(
          sponsorDetails => (sponsorDetails.id === topic.sponsor)
        );
        return (found === undefined) ? acc : found;
      },
      false,
    );
    return (
      <div className="sponsor-wrapper">
        <h3>Sponsored by</h3>
        <div className="sponsor row">
          <div className="col m2 logos">
            <p className="logo">
              <a href={sponsor.logos.url} title={sponsor.logos.title} rel="noopener noreferrer" target="_blank">
                <img className="responsive-img" src={sponsor.logos.img} alt={sponsor.logos.alt} />
              </a>
            </p>
          </div>
          <div className="col m10 description">
            <h4>{sponsor.name}</h4>
            {sponsor.description.map(paragraph => (<p dangerouslySetInnerHTML={{ __html: paragraph }} />))}
            <div>
              <a
                className="waves-effect waves-light btn" rel="noopener noreferrer" target="_blank"
                href={sponsor.links.url} role="button"
              >
                {sponsor.links.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSave() {
    return (
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large" onClick={() => this.handleClick()}>
          <i className="material-icons">
            {this.saved.indexOf(this.state.topic) !== -1 ? 'delete' : 'bookmark' }
          </i>
        </button>
      </div>
    );
  }

  renderTopic() {
    const topic = this.props.topics.find(t => t.id === this.state.topic) || {};
    const containHtmlTag = topic.description && topic.description[0].indexOf('</') !== -1;
    const description = (!containHtmlTag && topic.description && topic.description[0]) || '';
    const topicType = capitalize(topic.type || '');
    return (
      <div>
        <div ref={(modal) => { this.modal = modal; }} className="modal modal-fixed-footer">
          <div className="modal-content topic" key={`topic--${topic.id}`}>
            <span className="topic-type">{topicType}</span>
            <h2 data-role="title">{topic.title}</h2>
            <div>
              { containHtmlTag ?
                <div dangerouslySetInnerHTML={{ __html: topic.description[0] }} />
                :
                description
              }
            </div>
            <div className="quick-info">
              {'startTime' in topic && this.renderTime(topic)}
              {'venue' in topic && this.renderVenue(topic)}
              {this.renderLang(topic)}
              {this.renderLevel(topic)}
              {'requirement' in topic && this.renderReq(topic)}
            </div>
            {'speaker' in topic && this.renderSpeakers(topic)}
            {this.renderSponsor(topic)}
            {this.renderSave()}
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
              Close
            </a>
            <a href={`/2017/topics/${this.state.topic || '#'}`} className="modal-action waves-effect waves-green btn-flat">
              Permlink
            </a>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

  renderCommunity() {
    const days = (this.props.sessions && Object.keys(this.props.sessions)) || {};
    const community = days.reduce((acc, day) => {
      const sessions = (day && this.props.sessions && this.props.sessions[day]) || [];
      const result = sessions.find(s => s.community === this.state.community);
      if (!result) { return acc; }
      return result;
    }, {});

    const href = (community && `${community.path}.html`) || '#';
    const communityKey = (this.state.community && this.state.community) || '';
    return (
      <div>
        <div ref={(modal) => { this.modal = modal; }} className="modal modal-fixed-footer">
          <div className="modal-content topic" key={`community--${communityKey}`}>
            <h2 data-role="title">{community.name}</h2>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
              Close
            </a>
            <a href={`/2017/events/${href}`} className="modal-action waves-effect waves-green btn-flat">
              Permlink
            </a>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

  render() {
    if (this.state.type === 'community') {
      return this.renderCommunity();
    }
    return this.renderTopic();
  }
}
