//@flow

type MapOption = {
  zoom: number,
  center: LatLng
}

declare class Map {
  constructor(root: Element, options: MapOption): void;
}

type InfoWindowOption = {
  content: string
}

declare class InfoWindow {
  constructor(option: InfoWindowOption): void;
  open(map: Map, marker: Marker): void;
}

type GoogleMapEvent = {
  addDomListener(target: Element, event: string, listener: Function): void
}

declare class LatLng {
  constructor(lat: number, lng: number): void;
}

type MarkerOption = {
  map: Map,
  visible: boolean,
  place: {
    location: {
      lat: number,
      lng: number
    },
    query: string
  }
}

declare class Marker {
  constructor(options: MarkerOption): void;
  setAnimation(animation: number): void;
  setVisible(visible: boolean): void;
}

type Animation = {
  DROP: number
}

type Google = {
  maps: {
    InfoWindow: typeof InfoWindow,
    Map: typeof Map,
    event: GoogleMapEvent,
    LatLng: typeof LatLng,
    Marker: typeof Marker,
    Animation: Animation
  }
}
declare var google: Google;