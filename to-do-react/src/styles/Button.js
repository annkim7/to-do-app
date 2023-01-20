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

export const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
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
  width: 100%;
  padding: 0.6rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  background: ${(props) => props.colorType};
  border-radius: 1.875rem;
`;

export const SmallButton = styled(BigGreenButton)`
  width: calc(50% - 0.2rem);
`;
