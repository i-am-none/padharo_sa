export type RestaurantInfo = {
  name: string;
  address: string;
  cuisine: string;
  hours: {
    [key: string]: { open: string; close: string };
  };
  dressCode?: string;
  parking: string;
  accessibility: string;
  paymentMethods: string[];
};

export type RestaurantInformationContentModel = {
  id: string;
  headline: string;
  info: RestaurantInfo;
};
