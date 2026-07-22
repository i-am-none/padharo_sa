export type MapConfig = {
  embedUrl: string;
  directionsUrl: string;
};

export type MapSectionContentModel = {
  id: string;
  headline: string;
  map: MapConfig;
};
