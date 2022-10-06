import defaultResolve, {
  PublishAction,
} from "part:@sanity/base/document-actions";
import { ToggleLiveAction } from "./documentActions/ToggleLiveAction";
import { MigrateAction } from "sanity-plugin-migration";
import { isAdminUser, client } from "../schemas/shared-utils";
import { ScheduleAction } from "@sanity/scheduled-publishing";
import { addMetaDataToDocument } from "./lib/metadata-identifier";

const CustomPublishAction = (props) => {
  const defaultPublishAction = PublishAction(props);
  const onHandle = async () => {
    const finalDocument = addMetaDataToDocument(props.draft);
    await client.createOrReplace(finalDocument);
    defaultPublishAction.onHandle();
  };
  return {
    ...defaultPublishAction,
    onHandle,
  };
};

export default function resolveDocumentActions(props) {
  const currentUser = window["_sanityUser"];
  const canShowMigrateAction =
    process.env["NODE_ENV"] === "development" && isAdminUser(currentUser);

  return [
    ToggleLiveAction,
    CustomPublishAction,
    ...defaultResolve(props).filter(
      (action) => action.name !== "PublishAction",
    ),
    // ...defaultResolve(props),
    ...(canShowMigrateAction ? [MigrateAction] : []),
    ScheduleAction,
  ];
}
