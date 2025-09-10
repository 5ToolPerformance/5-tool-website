import { loadQuery } from "./load-query";
import type { CompanyInfo } from "./types";

export async function getCompanyInformation() {
  const companyInformation = await loadQuery<CompanyInfo>({
    query: `*[_type == "companyInfo"][1]{
      ...,
      "general": {
        name,
        description,
        logo,
        address,
        phoneNumber,
        email,
        hours,
      },
      "social": {
        facebook,
        instagram,
        twitterLink,
        youtube,
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
    }`,
  });

  return companyInformation;
}
