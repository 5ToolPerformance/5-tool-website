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
  slug: {
    current: string;
  };
  expertise: string[];
};
