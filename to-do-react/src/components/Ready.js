import styled from "styled-components";

const ReadyBox = styled.div`
  ${({ theme }) => theme.flexBox("column", "center", "center")}
  overflow:hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: black;
  background: #fff;
  h3 {
    color: ${({ theme }) => theme.mainGreen};
    margin-bottom: 0.75rem;
  }
  p {
    color: ${({ theme }) => theme.editGray};
    font-size: 0.88rem;
    letter-spacing: -0.02em;
  }
`;

export default function Ready() {
  return (
    <ReadyBox>
      <h3>The page is being prepared</h3>
      <p>더 나은 서비스로 찾아뵙겠습니다</p>
    </ReadyBox>
  );
}
