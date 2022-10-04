import {IoApps, IoCard as Icon, IoSettings} from "react-icons/io5";
import {hiddenField, linkType, linkTypeField, pathUrlRule,} from "../../shared-utils";
import {VariantDefinition} from "../../types";
import {PageLink} from "../../../branding/components/page-link/PageLink";

interface Props {
  variants: VariantDefinition[];
}

export default function card(props: Props) {
  return {
    name: "card",
    title: "Card",
    type: "object",
    icon: Icon,
    initialValue: { urlType: linkType.internal },
    groups: [
      { name: "main", title: "Main", icon: IoApps },
      { name: "configuration", title: "Configuration", icon: IoSettings },
    ],
    fields: [
      {
        ...hiddenField,
        group: "configuration",
      },
      {
        name: "title",
        title: "Title",
        type: "string",
        group: "main",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 2,
        group: "main",
      },
      {
        title: "Content",
        name: "content",
        type: "blockContent",
        group: "main",
      },
      {
        name: "variant",
        title: "Variant",
        type: "string",
        options: {
          list: props.variants,
        },
        group: "main",
      },
      {
        name: "largeVariant",
        title: "Large Variant",
        type: "string",
        options: {
          list: props.variants,
        },
        group: "main",
      },
      {
        name: "url",
        title: "Url",
        type: "url",
        inputComponent: PageLink("urlType"),
        validation: pathUrlRule,
        group: "main",
      },
      linkTypeField({ name: "urlType", title: "Url Type", group: "main" }),
      {
        name: "logo",
        title: "Logo",
        type: "image",
        group: "main",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        group: "main",
      },
      {
        name: "largeImage",
        title: "Large Image",
        description: "Image that will be used for larger screens like Desktop",
        type: "image",
        group: "main",
      },
      {
        name: "brand",
        title: "Brand",
        type: "reference",
        to: [{ type: "brand" }],
        group: "main",
      },
      {
        name: "metadata",
        type: "metadata",
        title: "Metadata",
        group: "configuration",
      },
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "description",
        media: "image",
        hidden: "isHidden",
      },
      prepare({ title, subtitle, hidden, media }) {
        const hiddenIndicator = hidden ? "🚫 " : "";

        return {
          title: `${hiddenIndicator}${title ?? "<Card>"}`,
          subtitle,
          media,
        };
      },
    },
  };
}
