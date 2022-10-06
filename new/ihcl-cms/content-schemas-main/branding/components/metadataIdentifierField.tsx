import { Flex, TextInput } from "@sanity/ui";
import React, { useCallback, useEffect, useState } from "react";
import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import FormField from "part:@sanity/components/formfields/default";
import { useId } from "@reach/auto-id"; // hook to generate unique IDs
import { withDocument } from "part:@sanity/form-builder";

export const MetadataIdentifierField = withDocument(
  React.forwardRef<HTMLInputElement>((props: any, ref) => {
    const {
      type,
      value,
      readOnly,
      placeholder,
      markers,
      presence,
      onChange,
      onFocus,
      onBlur,
    } = props;
    const inputId = useId();

    const setInputValue = useCallback(
      (event) => {
        onChange(PatchEvent.from(set(event.currentTarget.value)));
      },
      [onChange],
    );

    return (
      <FormField
        label={type.title}
        description={type.description}
        presence={presence}
        markers={markers}
        __unstable_markers={markers}
        __unstable_presence={presence}
      >
        <TextInput
          value={value}
          id={inputId}
          readOnly={readOnly}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={setInputValue}
          onBlur={onBlur}
          ref={ref}
        />
      </FormField>
    );
  }),
);
