import React from "react";
import { Icon } from "@iconify/react";
import styled, { css } from "styled-components";
import { ItemLi } from "../styles/Custom";

const handleColorType = (symbol) => {
  switch (symbol) {
    case "water":
      return css`
        ${({ theme }) => theme.cateBlue};
      `;
    case "leaf":
      return css`
        ${({ theme }) => theme.cateGreen};
      `;
    case "pot":
      return css`
        ${({ theme }) => theme.cateOrange};
      `;
    default:
      return css`
        ${({ theme }) => theme.unableGray};
      `;
  }
};

const CateIcon = styled.span`
  ${ItemLi} > a & {
    grid-area: a;
  }
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  width: 3.625rem;
  height: 3.625rem;
  margin: 0 auto;
  border-radius: 50%;
  background: ${({ symbol }) => handleColorType(symbol)};
  font-size: 1.85rem;
  color: #fff;
`;

export default function Category({ symbol }) {
  const symbolHandler = (item) => {
    switch (item) {
      case "water":
        return <Icon icon="material-symbols:water-drop" />;
      case "leaf":
        return <Icon icon="fluent:leaf-two-20-filled" />;
      case "pot":
        return <Icon icon="material-symbols:potted-plant-outline" />;
      default:
        return <Icon icon="material-symbols:water-drop" />;
    }
  };

  return <CateIcon symbol={symbol}>{symbolHandler(symbol)}</CateIcon>;
}
