export type ImageType = {
  _type: string;
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Coach = {
  name: string;
  title: string;
  image: ImageType;
  description: string;
  philosophy: string;
  slug: {
    current: string;
  };
  expertise: string[];
};

export type Service = {
  name: string;
  title: string;
  image: ImageType;
  shortDescription: string;
  description: string;
  slug: {
    current: string;
    _type: string;
  };
  price: string;
};

export type CompanyInfo = {
  name: string;
  logo: ImageType;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    day: string;
    hours: string;
  }[];
};

export type TickerTapeType = {
  active: boolean;
  name: string;
  title: string;
  tickerTapeItems: string[];
};
