// import useFetch from "../util/useFetch";
import { useParams } from "react-router-dom";

import { FormArea } from "../styles/Layout";
import Form from "../components/Form";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatum } from "../actions/index";

export default function Edit() {
  const { id } = useParams();
  // const [datum, isPending, error] = useFetch(
  //   `http://localhost:3001/data/${id}`
  // );

  const state = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatum(`http://localhost:3001/data/${id}`));
  }, [dispatch, id]);

  return (
    <FormArea>
      {state.loading && <div>Loading...</div>}
      {state.error && <div>{state.error}</div>}
      {state.data && <Form datum={state.data} />}
    </FormArea>
  );
}
