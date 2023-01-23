import styled, { css } from "styled-components";

export const ItemLi = styled.li`
  > a {
    display: grid;
    grid: "a b d" "a c d";
    grid-template-columns: 3.625rem auto 1rem;
  }
`;

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

export const Category = styled.span`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  width: 3.625rem;
  height: 3.625rem;
  margin: 0 auto;
  border-radius: 50%;
  background: ${({ symbol }) => handleColorType(symbol)};
  font-size: 1.85rem;
  color: #fff;
`;

export const CategoryLi = styled(Category)`
  grid-area: a;
`;

export const Check = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  grid-area: d;
  color: ${({ theme }) => theme.checkGreen};
  input {
    display: none;
  }
  label {
    height: 100%;
    cursor: pointer;
  }
  input + label svg {
    width: 1rem;
    height: 100%;
    opacity: 0;
  }
  input:checked + label svg {
    opacity: 1;
  }
`;

export const FormCheck = styled(Check)`
  grid-area: auto;
  input + label svg {
    width: 2.28rem;
    color: ${({ theme }) => theme.uncheckGray};
    opacity: 1;
  }
  input:checked + label svg {
    color: ${({ theme }) => theme.checkGreen};
  }
`;

export const WriteArea = styled.input`
  height: 1.625rem;
  border-radius: 0.313rem;
  box-shadow: ${({ theme }) => theme.borderShadow};
`;

export const Alarm = styled.section`
  margin-bottom: 1.563rem;
  padding: ${({ theme }) => theme.pd20};
  background: ${({ theme }) => theme.mainGreen};
  border-radius: 1rem;
  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.65rem;
    font-size: 1.68rem;
    letter-spacing: -0.025em;
    font-weight: 400;
    line-height: 1.2;
    color: #fff;
  }
  .date {
    font-size: 0.65rem;
    color: #fff;
    letter-spacing: -0.025em;
    font-weight: 300;
  }
`;
