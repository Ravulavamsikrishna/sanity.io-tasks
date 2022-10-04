import { FeatureSchemaDefinition } from "../../types";

export const financePayLater: FeatureSchemaDefinition = {
  pageItems: [],
  connectedStores: [
    {
      value: "finance.payLater.schemeSummary.store",
      title: "[Finance Pay Later] Scheme Summary Store",
    },
    {
      value: "finance.payLater.emiScheme.store",
      title: "[Finance Pay Later] EMI Scheme Store",
    },
  ],
  headers: [],
  footers: [],
  schemas: [],
  groupItems: [],
  variants: {
    navigation: [],
    card: [],
    placeholder: [
      {
        value: "finance.payLater.schemeSummary",
        title: "[Finance Pay Later] Scheme Summary",
      },
      {
        value: "finance.payLater.emiScheme",
        title: "[Finance Pay Later] EMI Scheme",
      },
    ],
    group: [],
    ifElseBlock: [],
    switchCaseBlock: [{ title: "[Finance] Bnpl", value: "finance.bnpl.tandc" }],
  },
};
