import useFetch from "../util/useFetch";

import Item from "../components/Item";
import { ListRows } from "../styles/Layout";

export default function List() {
  const [data, isPending, error] = useFetch("http://localhost:3001/data");

  const array =
    data &&
    data.sort((a, b) => {
      if (a.done > b.done) return -1;
      else return 1;
    });

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
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
