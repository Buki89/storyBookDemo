import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const SmallInput = () => (
  <Input placeholder="put some text here" variant="small" />
);
export const MediumInput = () => (
  <Input placeholder="put some text here" variant="medium" />
);
export const BigInput = () => (
  <Input placeholder="put some text here" variant="big" />
);
export const InValid = () => (
  <Input isValid={false} placeholder="put some text here" variant="small" />
);
export const Valid = () => (
  <Input isValid={true} placeholder="put some text here" variant="small" />
);
