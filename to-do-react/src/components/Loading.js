import styled from "styled-components";

const LoadBox = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "center")}
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

  .loader {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
  }

  .loader-3 .dot {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.mainGreen};
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 5px);
  }

  .loader-3 .dot1 {
    left: 0px;
    -webkit-animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28)
      alternate infinite;
    animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
      infinite;
  }

  .loader-3 .dot2 {
    left: 20px;
    -webkit-animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28)
      alternate infinite;
    animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
      infinite;
  }

  .loader-3 .dot3 {
    left: 40px;
    -webkit-animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28)
      alternate infinite;
    animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate
      infinite;
  }

  @-webkit-keyframes dot-jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @keyframes dot-jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
`;

export default function Loading() {
  return (
    <LoadBox>
      <div class="loader loader-3">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
      </div>
    </LoadBox>
  );
}
