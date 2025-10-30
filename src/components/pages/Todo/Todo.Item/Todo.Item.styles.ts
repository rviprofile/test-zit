import styled from "@emotion/styled";
import React from "react";

export const Container = styled.div`
  grid-template-columns: 0.3fr 0.3fr 2fr 1fr 1fr;
  justify-items: start;
  align-items: center;
  min-height: 40px;
  width: 100%;
  display: grid;
  cursor: pointer;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Number = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  grid-column: 3;
  display: flex;
  align-items: center;
  text-wrap: wrap;
`;

export const Status = styled.div`
  grid-column: 4;
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  grid-column: 5;
  display: flex;
  align-items: center;
`;
