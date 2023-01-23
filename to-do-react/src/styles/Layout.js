import styled from "styled-components";

export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ItemLi = styled.li`
  > a {
    display: grid;
    grid: "a b d" "a c d";
    grid-template-columns: 3.625rem auto 1rem;
  }
`;

export const ButtonBox = styled.div`
  display: grid;
  width: 100%;
  margin-top: 1.65rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 0.55rem;
`;
