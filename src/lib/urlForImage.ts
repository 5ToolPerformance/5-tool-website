import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageType } from "./types";

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: ImageType) {
  return imageBuilder.image(source);
}
