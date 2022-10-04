import creditcardForm from "./form";
import inputObject from "./inputObject";
import mapObject from "./mapObject";
import { FeatureSchemaDefinition } from "../../types";

export const creditcard: FeatureSchemaDefinition = {
  pageItems: [{ type: "creditcard.form" }],
  schemas: [creditcardForm, inputObject, mapObject],
  connectedStores: [],
  headers: [],
  footers: [
    {
      type: "ifElseBlock",
    },
    {
      type: "link",
    },
  ],
  variants: {
    navigation: [
      {
        title: "[CreditCard] Back Navigation",
        value: "creditcard.back.navigation",
      },
    ],
    card: [],
    placeholder: [],
    group: [
      {
        value: "creditcard.tabs.group",
        title: "[Credit Card] Tabs group",
      },
      {
        value: "creditcard.horizontal.center.group",
        title: "[Credit Card] Horizontal Centered group",
      },
    ],
    nudge: [
      {
        title: "[Credit Card] CVP Welcome NueCoins Nudge",
        value: "creditcard.cvp.welcomeNeuCoinsNudge",
      },
      {
        title: "[Credit Card] CVP Lounge Nudge",
        value: "creditcard.cvp.loungeNudge",
      },
      {
        title: "[Credit Card] CVP Joining Fee Nudge",
        value: "creditcard.cvp.joiningFeeNudge",
      },
      {
        title: "[Credit Card] CVP Benefits Nudge",
        value: "creditcard.cvp.benefitsNudge",
      },
      {
        title: "[Credit Card] CVP Discount Nudge",
        value: "creditcard.cvp.discountNudge",
      },
      {
        title: "[Credit Card] Powered By Nudge",
        value: "creditcard.cvp.poweredByNudge",
      },
    ],
    ifElseBlock: [],
    switchCaseBlock: [],
  },
};
