import React from "react";
import styled from "styled-components";

const inputHeight = (variant: string) => {
  switch (variant) {
    case "medium":
      return { height: "2.5rem", font: "1rem" };
    case "big":
      return { height: "3rem", font: "1.25rem" };
    default:
      return { height: "2rem", font: "0.75rem" };
  }
};

const StyledInput = styled.input<{
  variant: "small" | "medium" | "big";
  isValid?: boolean;
}>`
  border: ${({ isValid }) =>
    isValid === undefined
      ? "1px solid #000"
      : isValid
      ? "1px solid #0F0"
      : "1px solid #F00"};
  border-radius: 10px;
  height: ${({ variant }) => inputHeight(variant).height};
  padding: 5px;
  text-align: center;
  font-size: ${({ variant }) => inputHeight(variant).font};
  background-color: ${({ isValid }) =>
    isValid === undefined ? "#FFF" : isValid ? "#ccffcc" : "#ffebe6"};
`;

type InputType = {
  variant: "small" | "medium" | "big";
  placeholder: string;
  isValid?: boolean;
};

const Input = ({ variant, placeholder, isValid }: InputType) => {
  return (
    <StyledInput
      isValid={isValid}
      variant={variant}
      placeholder={placeholder}
    />
  );
};

export default Input;
