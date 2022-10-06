import { Badge, Flex } from "@sanity/ui";
import React from "react";


const dataset = "develop";

const toneMap = {
  develop: "positive",
  staging: "caution",
  production: "critical",
};

export default function Logo() {
  const imageUrl = "/static/logo.png";

  return (
    <Flex direction={"row"} align={"center"}>
      <img src={imageUrl} alt="Ihcl image" height={15} />
      <Badge
        tone={toneMap[dataset]}
        paddingX={2}
        style={{
          marginLeft: 10,
        }}
      >
        {dataset}
      </Badge>
    </Flex>
  );
}
