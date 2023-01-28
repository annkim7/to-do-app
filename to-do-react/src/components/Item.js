import { Link } from "react-router-dom";

import styled from "styled-components";
import { ItemLi } from "../styles/Layout";
import Category from "../ButtonComponents/Category";
import Done from "../ButtonComponents/Done.js";
import useCheck from "../util/useCheck";

const ListTitle = styled.h4`
  padding: 0.8rem 0.6rem 0 0.6rem;
`;

const Time = styled.span`
  padding: 0 0.6rem 0.5rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.timeGray};
`;

export default function Item({ item, ...rest }) {
  const checkBind = useCheck(item.done)[1];

  return (
    <ItemLi key={item.id} {...rest}>
      <Link to="/edit">
        <Category symbol={item.category} active />
        <ListTitle>{item.title}</ListTitle>
        <Time>{item.time}</Time>
        <Done label={"완료"} values={checkBind} />
      </Link>
    </ItemLi>
  );
}
