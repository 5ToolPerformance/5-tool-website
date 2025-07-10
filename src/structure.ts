import type { StructureResolver } from "sanity/structure";
import {
  HomeIcon,
  InfoOutlineIcon,
  DocumentTextIcon,
  UsersIcon,
  CogIcon,
  UserIcon,
  DocumentIcon,
  InsertAboveIcon,
  InsertBelowIcon,
  BillIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Pages Section
      S.listItem()
        .title("Pages")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType("home")
                    .documentId("088145d1-0958-449c-9e61-b361bcf514fd")
                ),
              S.listItem()
                .title("About")
                .icon(InfoOutlineIcon)
                .child(
                  S.document()
                    .schemaType("aboutPage")
                    .documentId("af087a40-5358-48ef-b018-861658e10ea4")
                ),
              S.listItem()
                .title("Resources")
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType("resources")
                    .documentId("a8d11c53-8d23-4aa3-9f9d-619fc5d5dba3")
                ),
              S.listItem()
                .title("Company Info")
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType("companyInfoPage")
                    .documentId("companyInfoPage")
                ),
            ])
        ),

      // Coaches Section
      S.listItem()
        .title("Coaches")
        .icon(UsersIcon)
        .child(
          S.documentList()
            .title("Coaches")
            .filter('_type == "coach"')
            .child((documentId) =>
              S.document().documentId(documentId).schemaType("coach")
            )
        ),

      // Company Info Section
      S.listItem()
        .title("Company Info")
        .icon(CogIcon)
        .child(
          S.document().schemaType("companyInfo").documentId("companyInfo")
        ),

      // Add a divider
      S.divider(),

      S.listItem()
        .title("Header")
        .icon(InsertBelowIcon)
        .child(
          S.document()
            .schemaType("header")
            .documentId("49b99048-6171-4b9b-b59c-8ea7ebda7b2f")
        ),

      S.listItem()
        .title("Footer")
        .icon(InsertAboveIcon)
        .child(
          S.document()
            .schemaType("footer")
            .documentId("e091d3f3-f20e-4891-aed9-7fe368c00243")
        ),

      S.listItem()
        .title("Ticker Tape")
        .icon(BillIcon)
        .child(S.document().schemaType("tickerTape").documentId("tickerTape")),

      S.divider(),

      // List out all other document types that aren't in the custom structure above
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "home",
            "aboutPage",
            "coach",
            "resources",
            "companyInfo",
            "page",
            "header",
            "footer",
            "tickerTape",
            "companyInfoPage",
          ].includes(listItem.getId() || "")
      ),
    ]);
