import { coach } from "./objects/coach";
import { customImage } from "./objects/customImage";
import { home } from "./pages/home";
import { hero } from "./objects/pageSections/hero";
import { callToAction } from "./objects/callToAction";
import { aboutSection } from "./objects/pageSections/aboutSection";
import { coachesSection } from "./objects/pageSections/coachesSection";
import { contactSection } from "./objects/pageSections/contactSection";
import { aboutPage } from "./pages/about";
import { resources } from "./pages/resources";
import { resourceCard } from "./objects/resourceCard";
import { companyInfo } from "./companyInfo";
import { page } from "./page";
import type { SchemaTypeDefinition } from "sanity";
import { footer } from "./objects/footer";
import { header } from "./objects/header";
import { services } from "./objects/services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Base types
    page,
    customImage,

    // Page types
    home,
    aboutPage,
    resources,

    // Object types
    hero,
    callToAction,
    aboutSection,
    coachesSection,
    contactSection,
    resourceCard,
    footer,
    header,
    services,

    // Document types
    coach,
    companyInfo,
  ],
};
