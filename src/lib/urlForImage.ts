import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "./types";

export const imageBuilder = imageUrlBuilder(sanityClient)

export function urlForImage(source: Image) {
    return imageBuilder.image(source)
}