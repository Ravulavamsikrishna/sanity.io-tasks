import { FeatureSchemaDefinition } from "../types";
import factorAffecting from "./credit-score/factorAffecting";
import impactList from "./credit-score/impactList";
import termsHeader from "./aia-pdp/termsHeader";
import pdpFooter from "./aia-pdp/pdpFooter";

export const finance: FeatureSchemaDefinition = {
  pageItems: [{ type: "creditScore.factorAffecting" }],
  connectedStores: [
    {
      value: "finance.policy.store",
      title: "[Finance] Policy Store",
    },
    {
      value: "finance.policyDetails.store",
      title: "[Finance] Policy Details Store",
    },
    {
      value: "finance.creditReport.store",
      title: "[Finance] Credit Report Store",
    },
  ],
  headers: [{ type: "aiaPdp.tncHeader" }],
  footers: [{ type: "aiaPdp.footer" }],
  schemas: [factorAffecting, impactList, termsHeader, pdpFooter],
  groupItems: [],
  variants: {
    navigation: [],
    card: [
      {
        title: "Credit score scenario-status card",
        value: "credit.score.scenario-status.card",
      },
      {
        title: "Bnpl scenario-status card",
        value: "bnpl.scenario.status.card",
      },
      {
        title: "[Credit Score] Build score card",
        value: "credit.build.score.card",
      },
      {
        title: "[Credit Score] Build score footer",
        value: "credit.build.score.footer.card",
      },
    ],
    placeholder: [
      {
        value: "finance.insuranceList",
        title: "[Finance] Insurance List",
      },
      {
        value: "finance.policyDetails",
        title: "[Finance] PolicyDetails",
      },
      {
        value: "creditScore.inputForm",
        title: "[Credit Score] Input and TNC Form",
      },
    ],
    group: [
      {
        value: "aia.autoCarousel-with-padding",
        title: "[AIA PDP] Auto Carousel With Padding",
      },
      {
        value: "list.vertical.rounded-corner",
        title: "[AIA PDP] Vertical List With Rounded Corners",
      },
      {
        value: "aia.page-wrapper-width464",
        title: "[AIA PDP] Page Wrapper Width 464 ",
      },
      {
        value: "credit.score.tnc",
        title: "[Credit Score] Terms and Conditions",
      },
      {
        value: "credit.score.build.score",
        title: "[Credit Score] Build scores",
      },
    ],
    nudge: [
      {
        value: "aia.pdp-header-action-item",
        title: "[AIA PDP] Header Action Item",
      },
      {
        value: "pdp-items-with-image-title",
        title: "[AIA PDP] Items With Image Title",
      },
      {
        value: "aia.pdp-footer-action-items",
        title: "[AIA PDP] Footer Action Items",
      },
      {
        value: "terms&Conditions",
        title: "T&C with Cross Image Title",
      },
      {
        value: "rounded-corners-with-title",
        title: "[AIA PDP Dialog] Rounded Corners with Title",
      },
    ],
    ifElseBlock: [
      {
        title: "[AIA PDP] Is TATA Employee",
        value: "aia.pdp.tata-employee",
      },
    ],
    switchCaseBlock: [
      {
        title: "Credit score status",
        value: "credit.score.status",
      },
      {
        title: "Credit score scenario status",
        value: "credit.score.scenario-status",
      },
      {
        title: "Bnpl scenario status",
        value: "bnpl.scenario.status",
      },
      {
        title: "[AIA PDP] item dialog",
        value: "aia.item-dialog",
      },
    ],
  },
};
