import React from "react";
import Button from "./Button";

export default {
  title: "Button",
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
