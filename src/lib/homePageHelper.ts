import { sanityClient } from "sanity:client";
import type { SeoFields } from "./types";

// Type for the home page data
export type HomePageData = {
  title: string;
  content: Array<{
    _type: string;
    _key: string;
    [key: string]: any;
  }>;
  seo: SeoFields;
};

/**
 * Fetches the home page data from Sanity
 * @returns A promise that resolves to the home page data
 */
export async function getHomePageData(): Promise<HomePageData> {
  try {
    // Query the home page document
    const query = `*[_type == "home"][0]{
      title,
      content[]{
        _type,
        _key,
        ...
      },
      "seo": {
        metaTitle,
        metaDescription,
        focusKeyword,
        canonicalUrl,
        openGraph{
          title,
          description,
          "image": image.asset->url,
          type
        },
        twitter{
          title,
          description,
          "image": image.asset->url,
          cardType
        },
        robots,
        schemaMarkup,
        seoAnalysis,
        additionalMeta
      }
    }`;

    const homePageData = await sanityClient.fetch<HomePageData>(query);

    if (!homePageData) {
      throw new Error("Home page data not found");
    }

    return homePageData;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
}

/**
 * Gets a specific section from the home page content by type
 * @param content The home page content array
 * @param type The type of section to find (e.g., 'hero', 'aboutSection', 'coachesSection')
 * @returns The section data or undefined if not found
 */
export function getSection<T = any>(
  content: HomePageData["content"],
  type: string
): T | undefined {
  return content.find((item) => item._type === type) as T | undefined;
}
