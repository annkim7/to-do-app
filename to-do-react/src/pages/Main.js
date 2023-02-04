import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

import styled from "styled-components";
import { ListRows } from "../styles/Layout";

import Notice from "../components/Notice";
import Item from "../components/Item";
import Loading from "../components/Loading";

const MatinTitle = styled.h3`
  margin-bottom: 1.456rem;
`;

export default function Main() {
  const state = useSelector((state) => state.dailyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(`${process.env.REACT_APP_API_URL}/data`));
  }, [dispatch]);

  const notList = state.data && state.data.filter((el) => !el.done);

  return (
    <>
      {state.loading && <Loading />}
      {state.error && <div>{state.error}</div>}
      {state.data && (
        <article>
          <Notice data={state.data} />
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
