import React from "react";
import Button from "./Button";
import { ButtonType } from "./Button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Form/Button",
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" placeholder="Primary"></Button>
);
export const Secondary = () => (
  <Button variant="secondary" placeholder="Secondary"></Button>
);
export const Success = () => (
  <Button variant="success" placeholder="Success"></Button>
);
export const Danger = () => (
  <Button variant="danger" placeholder="Danger"></Button>
);

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  placeholder: "Primary",
};
