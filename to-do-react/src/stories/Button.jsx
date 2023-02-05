import styled from "styled-components";

const ButtonBox = styled.div`
  display: grid;
  width: ${(props) => (props.modal ? "15rem" : "20rem")};
  margin-top: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 0.55rem;
`;

const ButtonStyle = styled.button`
  grid-column-end: ${(props) => props.size};
  display: inherit;
  padding: 0.6rem;
  color: #fff;
  text-align: center;
  font-size: ${(props) => (props.modal ? "1rem" : "1.15rem")};
  font-weight: 600;
  letter-spacing: 0.1em;
  border-radius: 1.875rem;
  background: ${(props) =>
    props.color === "red" ? props.theme.mainRed : props.theme.checkGreen};
  grid-template-columns: ${(props) =>
    props.modal ? "repeat(auto-fill, minmax(4rem, 1fr))" : null};
`;

const Button = ({ title, size, color, modal }) => (
  <ButtonBox modal={modal}>
    <ButtonStyle size={size} modal={modal} color={color}>
      {title}
    </ButtonStyle>
  </ButtonBox>
);

export default Button;
