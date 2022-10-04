import { IoList as Icon } from "react-icons/io5";
export default {
  name: "nativeCommerce.productContent",
  title: "[Native Commerce] Product Content",
  type: "object",
  icon: Icon,
  initialValue: {
    overviewLabel: "Overview",
    keyFeaturesLabel: "Key Features & Specifications",
    viewDetailsLabel: "See all details",
    title: "[Native Commerce] Product Content",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "overviewLabel",
      title: "Overview Label",
      type: "string",
    },
    {
      name: "keyFeaturesLabel",
      title: "Key Features Label",
      type: "string",
    },
    {
      name: "viewDetailsLabel",
      title: "View Details Label",
      type: "string",
    },
  ],
};
