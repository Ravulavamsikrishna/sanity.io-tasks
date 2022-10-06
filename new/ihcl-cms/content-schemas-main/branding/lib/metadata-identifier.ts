import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("0123456789abcdef", 7);

const existingIds = new Set();

function isValidIdentifier(identifier: string): boolean {
  const ids = identifier.split(".");
  const isExisting =
    !!ids.find((item) => !/^[a-f0-9]{7}$/.test(item)) ||
    existingIds.has(identifier);
  return !isExisting;
}

function shouldGenerateId(identifier?: string): boolean {
  if (!identifier) {
    return true;
  }
  return !isValidIdentifier(identifier);
}

const getMetaData = (metadata, parent = undefined) => {
  if (shouldGenerateId(metadata?.identifier)) {
    const identifierArray = [];
    if (parent) {
      identifierArray.push(parent?.metadata?.identifier);
    }
    identifierArray.push(nanoid());
    const identifier = identifierArray.join(".");
    existingIds.add(identifier);
    return {
      ...metadata,
      identifier,
    };
  }
  return metadata;
};
const addMetaDataToNestedObject = (schemaObject, parent = undefined) => {
  schemaObject.metadata = getMetaData(schemaObject.metadata, parent);
  for (const key in schemaObject) {
    if (Array.isArray(schemaObject[key])) {
      schemaObject[key] = schemaObject[key].map((item) =>
        item._type === "block"
          ? item
          : addMetaDataToNestedObject(item, schemaObject),
      );
    }
  }
  return schemaObject;
};
export const addMetaDataToDocument = (document) => {
  document.metadata = getMetaData(document.metadata);
  return {
    ...document,
    items: document.items?.map((item) =>
      addMetaDataToNestedObject(item, document),
    ),
  };
};
