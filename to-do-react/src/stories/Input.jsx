import styled from "styled-components";

const InputStyle = styled.input`
  height: 1.625rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.editGray};
  border-radius: 0.313rem;
  box-shadow: ${({ theme }) => theme.borderShadow};
`;

const Input = ({ label }) => (
  <InputStyle type="text" title={`${label} 쓰기`}></InputStyle>
);

export default Input;
