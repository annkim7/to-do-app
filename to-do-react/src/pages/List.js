import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

import Item from "../components/Item";
import { ListRows } from "../styles/Layout";

import Loading from "../components/Loading";

export default function List() {
  const state = useSelector((state) => state.dailyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("http://localhost:3001/data"));
  }, [dispatch]);

  const array =
    state.data &&
    state.data.sort((a, b) => {
      if (a.done > b.done) return -1;
      else return 1;
    });

  return (
    <>
      {state.loading && <Loading />}
      {state.error && <div>{state.error}</div>}
      {state.data && (
        <article>
          <ListRows>
            {array.map((item, idx) => (
              <Item key={idx} item={item} />
            ))}
          </ListRows>
        </article>
      )}
    </>
  );
}
