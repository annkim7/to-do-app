import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";

import { FormArea } from "../styles/Layout";
import Form from "../components/Form";
import Loading from "../components/Loading";

export default function Edit() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.dailyReducer);

  useEffect(() => {
    dispatch(getData(`${process.env.REACT_APP_API_URL}/data`));
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
