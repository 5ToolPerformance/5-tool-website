import { loadQuery } from "./load-query";
import type { CompanyInfo } from "./types";

export async function getCompanyInformation() {
  const companyInformation = await loadQuery<CompanyInfo>({
    query: `*[_type == "companyInformation"][0]`,
  });

  return companyInformation;
}
