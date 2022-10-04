import { IoLocation as Icon } from "react-icons/io5";

export default {
  name: "homepage.locationConfiguration",
  title: "[Homepage] Pincode Configuration",
  type: "object",
  icon: Icon,
  initialValue: {
    title: "[Homepage] Pincode Configuration",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
