import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type CenterType = {
  children: any;
};

const Center = ({ children }: CenterType) => {
  return <Container>{children}</Container>;
};

export default Center;
