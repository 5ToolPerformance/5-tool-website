import { sanityClient } from "sanity:client";
import type { ImageType } from "./types";

export interface Coach {
  _id: string;
  _type: "coaches";
  name: string;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  image: ImageType;
  description: string;
}

/**
 * Fetches all coaches from Sanity
 * @returns A promise that resolves to an array of Coach objects
 */
export async function getAllCoaches(): Promise<Coach[]> {
  try {
    const query = `*[_type == "coach"] | order(name asc) {
      _id,
      _type,
      name,
      title,
      slug,
      image,
      description
    }`;

    const coaches = await sanityClient.fetch<Coach[]>(query);
    return coaches;
  } catch (error) {
    console.error("Error fetching coaches:", error);
    throw error;
  }
}
