import useFetch from "../util/useFetch";
import { useParams } from "react-router-dom";

import { FormArea } from "../styles/Layout";
import Form from "../components/Form";

export default function Edit() {
  const { id } = useParams();
  const [datum, isPending, error] = useFetch(
    `http://localhost:3001/data/${id}`
  );

  return (
    <FormArea>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {datum && <Form datum={datum} />}
    </FormArea>
  );
}
