import { coaches } from "./objects/coach";
import { customImage } from "./objects/customImage";
import { home } from "./pages/home";
import { address } from "./objects/address";
import { hero } from "./objects/pageSections/hero";
import { callToAction } from "./objects/callToAction";
import { aboutSection } from "./objects/pageSections/aboutSection";
import { coachesSection } from "./objects/pageSections/coachesSection";
import { contactSection } from "./objects/pageSections/contactSection";
import { aboutPage } from "./pages/about";
import { resources } from "./pages/resources";
import { resourceCard } from "./objects/resourceCard";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    customImage,
    coaches,
    home,
    address,
    hero,
    callToAction,
    aboutSection,
    coachesSection,
    contactSection,
    aboutPage,
    resources,
    resourceCard,
  ],
};
