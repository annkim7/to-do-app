import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

import { ListRows, MainTitle } from "../styles/Layout";

import Notice from "../components/Notice";
import Item from "../components/Item";
import Loading from "../components/Loading";

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
          <MainTitle>할일 목록!</MainTitle>
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
