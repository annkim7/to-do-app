import React from "react";
import styled, { css } from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "red":
      return css`
        ${({ theme }) => theme.mainRed};
      `;
    default:
      return css`
        ${({ theme }) => theme.checkGreen};
      `;
  }
};

const handleSizeType = (size) => {
  switch (size) {
    case "sm":
      return css`
        grid-column-end: span 1;
      `;
    default:
      return css`
        grid-column-end: span 2;
      `;
  }
};

const handleModalType = (modal) => {
  switch (modal) {
    case "true":
      return css`
        grid-column-end: span 1;
        font-size: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
      `;
    default:
      return null;
  }
};

const ButtonItem = styled.button`
  ${({ size }) => handleSizeType(size)};
  display: inherit;
  padding: 0.6rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  border-radius: 1.875rem;
  background: ${({ color }) => handleColorType(color)};
  ${({ modal }) => handleModalType(modal)};
`;

export default function Button({ color, size, modal, text, modalHandler }) {
  return (
    <ButtonItem color={color} size={size} modal={modal} onClick={modalHandler}>
      {text}
    </ButtonItem>
  );
}
