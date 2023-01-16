import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = styled.header`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")}
  padding: ${({ theme }) => theme.pd25};
`;

const Logo = styled.h1`
  a {
    ${({ theme }) => theme.flexBox()}
  }
  svg {
    width: 1.348rem;
    height: 1.563rem;
    color: ${({ theme }) => theme.mainGreen};
  }
  strong {
    margin-left: 0.778rem;
    font-size: 1.313rem;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #121212;
  }
`;

const NavLi = styled.li`
  svg {
    width: 1.313rem;
    height: 1.313rem;
    color: #121212;
  }
`;

export default function Nav() {
  return (
    <Header>
      <Logo>
        <Link to="/">
          <Icon icon="material-symbols:home" />
          <strong>To Do</strong>
        </Link>
      </Logo>
      <nav>
        <ul className="nav-list">
          <NavLi>
            <Link to="/add">
              <Icon icon="jam:write" />
            </Link>
          </NavLi>
        </ul>
      </nav>
    </Header>
  );
}
