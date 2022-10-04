import { IoCartOutline as Icon } from "react-icons/io5";

export default {
  name: "flashCommerce.cartOrderTotalDetails",
  title: "[Flash Commerce] Cart Order Total Details",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "Order Total",
    priceLabel: "Price",
    priceSubheadingLabel: "Inclusive of taxes",
    discountLabel: "Discount",
    taxesLabel: "Taxes",
    deliveryLabel: "Delivery",
    couponDiscountLabel: "Coupon discount",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "priceLabel",
      title: "Price Label",
      type: "string",
    },
    {
      name: "priceSubheadingLabel",
      title: "Price Subheading Label",
      type: "string",
    },
    {
      name: "discountLabel",
      title: "Discount Label",
      type: "string",
    },
    {
      name: "taxesLabel",
      title: "Taxes Label",
      type: "string",
    },
    {
      name: "deliveryLabel",
      title: "Delivery Label",
      type: "string",
    },
    {
      name: "couponDiscountLabel",
      title: "Coupon Discount Label",
      type: "string",
    },
    {
      name: "metadata",
      type: "metadata",
      title: "Metadata",
    },
  ],
};
