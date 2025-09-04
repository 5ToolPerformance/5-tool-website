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
import { tickerTape } from "./objects/tickerTape";
import { companyInfoPage } from "./pages/companyInfoPage";
import { playerDevelopment } from "./pages/playerDevelopment";
import { pillar } from "./objects/pillar";
import { technology } from "./objects/technologies";
import { pricingInfo } from "./objects/pricingInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Base types
    page,
    customImage,

    // Page types
    home,
    aboutPage,
    resources,
    companyInfoPage,
    playerDevelopment,

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
    tickerTape,
    pillar,
    technology,
    pricingInfo,

    // Document types
    coach,
    companyInfo,
  ],
};
