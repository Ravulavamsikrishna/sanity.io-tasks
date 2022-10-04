import { IoList as Icon } from "react-icons/io5";

export default {
  name: "nativeCommerce.productLabels",
  title: "[Native Commerce] Product Labels",
  type: "object",
  icon: Icon,
  initialValue: {
    colorLabel: "Colour",
    sizeLabel: "Size",
    buyNowLabel: "Buy now",
    addToCartLabel: "Add to cart",
    title: "[Native Commerce] Product Labels",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "colorLabel",
      title: "Color Label",
      type: "string",
    },
    {
      name: "sizeLabel",
      title: "Size Label",
      type: "string",
    },
    {
      name: "buyNowLabel",
      title: "Buy Now Label",
      type: "string",
    },
    {
      name: "addToCartLabel",
      title: "Add to cart Label",
      type: "string",
    },
  ],
};
