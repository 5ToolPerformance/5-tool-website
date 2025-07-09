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

export type HeaderType = {
  name: string;
  logo: {
    image: ImageType;
    url: string;
  };
  navigation: {
    label: string;
    url: string;
    openInNewTab: boolean;
    submenu?: {
      label: string;
      url: string;
    }[];
  }[];
  ctaButton: {
    text: string;
    url: string;
  };
};

export type ServicesType = {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
};

export type FooterType = {
  name: string;
  companyInfo: {
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
  footerLinks: {
    label: string;
    url: string;
  }[];
  servicesColumn: {
    name: string;
    slug: {
      current: string;
      _type: string;
    };
  }[];
  socialMedia: {
    platform: string;
    url: string;
  }[];
  bottomBar: {
    copyrightText: string;
    legalLinks: {
      label: string;
      url: string;
    }[];
  };
};
