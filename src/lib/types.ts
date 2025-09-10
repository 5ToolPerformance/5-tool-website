import type { PortableTextProps, TypedObject } from "astro-portabletext/types";
import type { PortableTextBlock } from "sanity";

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
  seo: SeoFields;
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
  title: string;
  image: ImageType;
  shortDescription: string;
  description: TypedObject[];
  slug: {
    current: string;
    _type: string;
  };
  pricingInfo: {
    title: string;
    price: string;
    link: string;
  }[];
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

export type CompanyInfoPageType = {
  name: string;
  title: string;
  companyInfo: PortableTextBlock;
  seo: SeoFields;
};

export type ResourcesType = {
  title: string;
  description: string;
  heroImage: ImageType;
  resourceCards: {
    title: string;
    description: string;
    image: ImageType;
    cta: {
      buttonText: string;
      buttonLink: string;
    };
  }[];
  seo: SeoFields;
};

export type PlayerDevelopmentType = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
  heroImage: ImageType;
  ourMission: {
    title: string;
    subtitle: string;
    description: string;
  };
  ourApproach: {
    title: string;
    subtitle: string;
    description: string;
    image: ImageType;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  dataCapture: {
    title: string;
    subtitle: string;
    description: string;
    technologies: {
      technology: string;
      link: string;
      image?: ImageType;
    }[];
  };
  seo: SeoFields;
};

export type BlogPostType = {
  title: string;
  slug: {
    current: string;
    _type?: string;
  };
  image?: ImageType;
  author?: string;
  excerpt?: string;
};

export interface SeoFields {
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  canonicalUrl?: string;

  openGraph?: {
    title?: string;
    description?: string;
    image?: string; // store resolved asset URL from Sanity
    type?: "website" | "article" | "product" | "profile";
  };

  twitter?: {
    title?: string;
    description?: string;
    image?: string; // store resolved asset URL from Sanity
    cardType?: "summary" | "summary_large_image" | "app" | "player";
  };

  robots?: {
    noindex?: boolean;
    nofollow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
  };

  schemaMarkup?: {
    type?:
      | "Article"
      | "Product"
      | "FAQPage"
      | "HowTo"
      | "Organization"
      | "Person"
      | "LocalBusiness"
      | "Event";
  };

  seoAnalysis?: {
    readabilityScore?: number; // 0–100
    seoScore?: number; // 0–100
    keywordDensity?: number; // percentage
  };

  additionalMeta?: {
    keywords?: string[];
    publishedAt?: string; // ISO date string
    lastModified?: string; // ISO date string
  };
}

export type AboutPageType = {
  title: string;
  subtitle: string;
  heroImage: ImageType;
  companyInfo: string;
  companyImage: ImageType;
  facilityInfo: string;
  facilityImage: ImageType;
  seo: SeoFields;
};

export type FullBlogPost = BlogPostType & {
  content?: TypedObject[];
  seo: SeoFields;
};
