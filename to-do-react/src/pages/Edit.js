import { useParams } from "react-router-dom";

import { FormArea } from "../styles/Layout";
import Form from "../components/Form";
import Loading from "../components/Loading";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

export default function Edit() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.dailyReducer);

  useEffect(() => {
    dispatch(getData("http://localhost:3001/data"));
  }, [dispatch]);

  const datum = state.data.filter((el) => el.id === Number(id));

  return (
    <FormArea>
      {state.loading && <Loading />}
      {state.error && <div>{state.error}</div>}
      {state.data && <Form datum={datum} />}
    </FormArea>
  );
}
