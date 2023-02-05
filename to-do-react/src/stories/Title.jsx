import styled from "styled-components";

const Text = styled.h3`
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  letter-spacing: -0.001em;
`;

const Title = ({ title, fontSize }) => <Text fontSize={fontSize}>{title}</Text>;

export default Title;
