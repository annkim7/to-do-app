import styled from "styled-components";

export const ItemLi = styled.li`
  > a {
    display: grid;
    grid: "a b d" "a c d";
    grid-template-columns: 3.625rem auto 1rem;
    max-height: 3.625rem;
  }
`;

export const Category = styled.span`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
  grid-area: a;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  background: ${(props) => props.symbol};
  font-size: 1.85rem;
  color: #fff;
`;

export const WriteArea = styled.input`
  height: 1.625rem;
  margin-top: 1rem;
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
