import $ from 'jquery';
/* eslint-disable */
let _stack = 0;
let _lastID = 0;
const _generateID = function() {
  _lastID++;
  return 'materialize-modal-overlay-' + _lastID;
};

const methods = {
  init : function(options) {
    const defaults = {
      opacity: 0.5,
      inDuration: 350,
      outDuration: 250,
      ready: undefined,
      complete: undefined,
      dismissible: true,
      startingTop: '4%',
      endingTop: '10%'
    };

    // Override defaults
    options = $.extend(defaults, options);

    return this.each(function() {
      const $modal = $(this);
      const modal_id = $(this).attr("id") || '#' + $(this).data('target');

      const closeModal = function() {
        const overlayID = $modal.data('overlay-id');
        const $overlay = $('#' + overlayID);
        $modal.removeClass('open');

        // Enable scrolling
        $('body').css({
          overflow: '',
          width: ''
        });

        $modal.find('.modal-close').off('click.close');
        $(document).off('keyup.modal' + overlayID);

        $overlay.velocity( { opacity: 0}, {duration: options.outDuration, queue: false, ease: "easeOutQuart"});


        // Define Bottom Sheet animation
        const exitVelocityOptions = {
          duration: options.outDuration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            $(this).css({display:"none"});

            // Call complete callback
            if (typeof(options.complete) === "function") {
              options.complete.call(this, $modal);
            }
            $overlay.remove();
            _stack--;
          }
        };
        if ($modal.hasClass('bottom-sheet')) {
          $modal.velocity({bottom: "-100%", opacity: 0}, exitVelocityOptions);
        }
        else {
          $modal.velocity(
            { top: options.startingTop, opacity: 0, scaleX: 0.7},
            exitVelocityOptions
          );
        }
      };

      const openModal = function($trigger) {
        const $body = $('body');
        const oldWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.width(oldWidth);

        if ($modal.hasClass('open')) {
          return;
        }

        const overlayID = _generateID();
        const $overlay = $('<div class="modal-overlay"></div>');
        const lStack = (++_stack);

        // Store a reference of the overlay
        $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
        $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
        $modal.addClass('open');

        $body.append($overlay);

        if (options.dismissible) {
          $overlay.click(function() {
            closeModal();
          });
          // Return on ESC
          $(document).on('keyup.modal' + overlayID, function(e) {
            if (e.keyCode === 27) {   // ESC key
              closeModal();
            }
          });
        }

        $modal.find(".modal-close").on('click.close', function(e) {
          closeModal();
        });

        $overlay.css({ display : "block", opacity : 0 });

        $modal.css({
          display : "block",
          opacity: 0
        });

        $overlay.velocity({opacity: options.opacity}, {duration: options.inDuration, queue: false, ease: "easeOutCubic"});
        $modal.data('associated-overlay', $overlay[0]);

        // Define Bottom Sheet animation
        const enterVelocityOptions = {
          duration: options.inDuration,
          queue: false,
          ease: "easeOutCubic",
          // Handle modal ready callback
          complete: function() {
            if (typeof(options.ready) === "function") {
              options.ready.call(this, $modal, $trigger);
            }
          }
        };
        if ($modal.hasClass('bottom-sheet')) {
          $modal.velocity({bottom: "0", opacity: 1}, enterVelocityOptions);
        }
        else {
          $.Velocity.hook($modal, "scaleX", 0.7);
          $modal.css({ top: options.startingTop });
          $modal.velocity({top: options.endingTop, opacity: 1, scaleX: '1'}, enterVelocityOptions);
        }

      };

      // Reset handlers
      $(document).off('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]');
      $(this).off('openModal');
      $(this).off('closeModal');

      // Close Handlers
      $(document).on('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]', function(e) {
        options.startingTop = ($(this).offset().top - $(window).scrollTop()) /1.15;
        openModal($(this));
        e.preventDefault();
      }); // done set on click

      $(this).on('openModal', function() {
        openModal();
      });

      $(this).on('closeModal', function() {
        closeModal();
      });
    }); // done return
  },
  open : function() {
    $(this).trigger('openModal');
  },
  close : function() {
    $(this).trigger('closeModal');
  }
};

$.fn.modal = function(methodOrOptions) {
  if ( methods[methodOrOptions] ) {
    return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
  } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
    // Default to "init"
    return methods.init.apply( this, arguments );
  } else {
    $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.modal' );
  }
};