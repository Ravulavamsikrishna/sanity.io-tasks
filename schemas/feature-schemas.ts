import { nativeCommerce } from "./native-commerce";
import { neuPass } from "./neupass";
import { auth } from "./auth";
import { iplSlp } from "./ipl-slp";
import { serp } from "./serp";
import { slp } from "./slp";
import { finance } from "./finance";
import { search } from "./search";
import {
  FeatureSchemaDefinition,
  FeatureSchemaProperties,
  VariantSchemaProperties,
} from "./types";
import { chain } from "lodash";
import { core } from "./core";
import { homepage } from "./homepage";
import { superTopupHealth } from "./super-topup-health";
import { financePayLater } from "./finance/pay-later";
import { hstuDefinition } from "./pdf-hstu";
import { creditcard } from "./finance/creditcard";

const features: FeatureSchemaDefinition[] = [
  core,
  nativeCommerce,
  neuPass,
  auth,
  homepage,
  iplSlp,
  slp,
  superTopupHealth,
  serp,
  slp,
  finance,
  financePayLater,
  creditcard,
  search,
  hstuDefinition,
];

export const featureDefinition: FeatureSchemaDefinition =
  extractFeatures(features);

function extractFeatures(features: FeatureSchemaDefinition[]) {
  const featureDefKeys = Object.keys(new FeatureSchemaProperties());

  const combinedDefinition: FeatureSchemaDefinition = featureDefKeys.reduce(
    (allFeatures, property) => {
      switch (property) {
        case "variants":
          allFeatures["variants"] = extractVariants(features);
          break;

        default:
          allFeatures[property] = extractItems(features, (x) => x[property]);
          break;
      }

      return allFeatures;
    },
    <FeatureSchemaProperties>{},
  );

  return combinedDefinition;
}

function extractVariants(features: FeatureSchemaDefinition[]) {
  const variantDefKeys = Object.keys(new VariantSchemaProperties());

  return variantDefKeys.reduce((obj, key) => {
    obj[key] = extractItems(features, (x) => (x.variants ?? {})[key]);
    return obj;
  }, <VariantSchemaProperties>{});
}

function extractItems<T, U>(items: T[], iterator: (T) => U[]) {
  return chain(items)
    .flatMap(iterator)
    .filter((x) => !!x)
    .value();
}
