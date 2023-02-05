import { Icon } from "@iconify/react";
import styled from "styled-components";

const CheckStyle = styled.div`
  input {
    display: none;
  }
  label {
    ${({ theme }) => theme.flexBox("row", "center", "center")}
    height: 100%;
    cursor: pointer;
  }
  input + label svg {
    width: 2.28rem;
    height: 2.28rem;
    color: ${({ theme }) => theme.uncheckGray};
  }

  input:checked + label svg {
    color: ${({ theme }) => theme.checkGreen};
  }
`;

const Check = ({ label }) => (
  <CheckStyle>
    <input type="checkbox" title={`${label} 체크`} id="checkDone" />
    <label htmlFor="checkDone">
      <Icon icon="material-symbols:done"></Icon>
    </label>
  </CheckStyle>
);

export default Check;
