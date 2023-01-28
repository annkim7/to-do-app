import Item from "../components/Item";
import { ListRows } from "../styles/Layout";

export default function List({ data, idHandler }) {
  const check = data && data.filter((el) => el.done);
  const noCheck = data && data.filter((el) => !el.done);
  const order = [...check, ...noCheck];

  return (
    <article>
      <ListRows>
        {order.map((item, idx) => (
          <Item key={idx} item={item} onClick={() => idHandler(item.id)} />
        ))}
      </ListRows>
    </article>
  );
}
