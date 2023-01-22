import styled from "styled-components";

export const ButtonBox = styled.div`
  display: grid;
  width: 100%;
  margin-top: 1.65rem;
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

export const ModalButton = styled(BigGreenButton)`
  grid-column-end: span 1;
  font-size: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
`;
