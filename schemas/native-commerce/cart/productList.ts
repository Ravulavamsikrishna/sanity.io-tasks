import { IoList as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.cartProductList",
  title: "[Flash Commerce] Cart Product List",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Flash Commerce] Cart Product List",
    outOfStockLabel: "Out Of Stock",
    outOfStockLabelForPinCode: "Currently out of stock for",
    priceChangeLabel: "The price of this item has",
    limitReachedLabel: "Limit reached",
    onlyFewLeftLabel: "Only few left",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "outOfStockLabel",
      title: "Out Of Stock Label",
      type: "string",
    },
    {
      name: "outOfStockLabelForPinCode",
      title: "Out Of Stock Label for PIN Code",
      type: "string",
    },
    {
      name: "priceChangeLabel",
      title: "Price Changed Label",
      type: "string",
    },
    {
      name: "limitReachedLabel",
      title: "Limit Reached Label",
      type: "string",
    },
    {
      name: "onlyFewLeftLabel",
      title: "Only Few Left Label",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
};
