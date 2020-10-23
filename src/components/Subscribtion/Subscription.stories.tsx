import React from "react";
import { Primary } from "../Button/Button.stories";
import { BigInput } from "../Input/Input.stories";

export default {
  title: "form/subscription",
};

export const PrimarySubcription = () => {
  return (
    <>
      <BigInput />
      <Primary />
    </>
  );
};
