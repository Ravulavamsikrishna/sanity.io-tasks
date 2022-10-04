import { IoList as Icon } from "react-icons/io5";
import { PageLink } from "../../branding/components/page-link/PageLink";
import { linkTypeField, pathUrlRule } from "../shared-utils";

export default {
  name: "nativeCommerce.productList",
  title: "[Native Commerce] Product List",
  type: "object",
  icon: Icon,
  initialValue: {
    neuPassPriceLabel: "NeuPass Price",
    outOfStockLabel: "Out of Stock",
    title: "[Native Commerce] Product List",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "neuPassPriceLabel",
      title: "Neu Pass Price Label",
      type: "string",
    },
    {
      name: "outOfStockLabel",
      title: "Out Of Stock Label",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: pathUrlRule,
      inputComponent: PageLink("type"),
    },
    linkTypeField({ name: "urlType", title: "Type" }),
  ],
};
