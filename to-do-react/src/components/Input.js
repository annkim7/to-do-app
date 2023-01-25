import styled from "styled-components";

const WriteArea = styled.input`
  height: 1.625rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.editGray};
  border-radius: 0.313rem;
  box-shadow: ${({ theme }) => theme.borderShadow};
`;

export default function Input({ label, values }) {
  return (
    <>
      <h3>{label}</h3>
      <WriteArea {...values} type="text" title={`${label} 쓰기`}></WriteArea>
    </>
  );
}
