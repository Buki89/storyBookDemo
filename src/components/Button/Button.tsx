import React from "react";
import styled from "styled-components";

export type ButtonType = {
  placeholder: string;
  variant: "primary" | "secondary" | "success" | "danger";
};

const backgroundColor = (variant: string): string => {
  switch (variant) {
    case "primary":
      return "#008CBA";
    case "secondary":
      return "#e7e7e7";
    case "success":
      return "#4CAF50";
    case "danger":
      return "#f44336";
    default:
      return "#000";
  }
};

const StyledButton = styled.button<{ variant: string }>`
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ variant }) => backgroundColor(variant)};
`;

const Button = ({ placeholder, variant }: ButtonType) => {
  return <StyledButton variant={variant}>{placeholder}</StyledButton>;
};

export default Button;
