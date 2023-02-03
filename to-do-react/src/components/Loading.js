import styled from "styled-components";

const LoadBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
`;

export default function Loading() {
  return <LoadBox>loading...</LoadBox>;
}
