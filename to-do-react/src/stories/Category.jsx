import { Icon } from "@iconify/react";
import styled, { css } from "styled-components";

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

const CategoryStyle = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  width: 3.625rem;
  height: 3.625rem;
  margin: 0 auto;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? handleColorType(props.symbol) : props.theme.unableGray};
  font-size: 1.85rem;
  color: #fff;
  cursor: pointer;
`;

const iconHandler = (item) => {
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

const Category = ({ symbol, active }) => (
  <CategoryStyle symbol={symbol} active={active}>
    {iconHandler(symbol)}
  </CategoryStyle>
);

export default Category;
