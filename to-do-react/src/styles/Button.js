import styled from "styled-components";

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

export const ButtonBox = styled.div`
  display: grid;
  margin-top: 1.2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 0.55rem;
`;

export const LightBlueButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 0.3rem 1.1rem;
  background: ${({ theme }) => theme.mainSky};
  font-size: 0.65rem;
  border-radius: 1.15rem;
  letter-spacing: -0.025em;
  font-weight: 500;
`;

export const BigGreenButton = styled.button`
  display: inherit;
  grid-column-end: span 2;
  padding: 0.6rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  background: ${(props) => props.colorType};
  border-radius: 1.875rem;
`;

export const SmallButton = styled(BigGreenButton)`
  grid-column-end: span 1;
`;
