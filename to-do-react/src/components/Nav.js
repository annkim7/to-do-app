import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  border: 1px solid skyblue;
`;

const Logo = styled.h1`
  background: beige;
`;

const NavLi = styled.li`
  background: yellow;
`;

export default function Nav() {
  return (
    <Header>
      <Logo>
        <Link to="/">To Do</Link>
      </Logo>
      <nav>
        <ul className="nav-list">
          <NavLi>
            <Link to="/write">test1</Link>
          </NavLi>
        </ul>
      </nav>
    </Header>
  );
}
