import styled from "styled-components";
import { ListRows } from "../styles/Layout";

import Notice from "../components/Notice";
import Item from "../components/Item";

const MatinTitle = styled.h3`
  margin-bottom: 1.456rem;
`;

export default function Main({ data, isPending }) {
  const notList = data && data.filter((el) => !el.done);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <Notice data={data} />
          <MatinTitle>할일 목록</MatinTitle>
          <ListRows>
            {notList.map((item, idx) => (
              <Item key={idx} item={item} />
            ))}
          </ListRows>
        </article>
      )}
    </>
  );
}
