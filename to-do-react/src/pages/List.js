import React, { useState, useEffect } from "react";

import Item from "../components/Item";
import { ListRows } from "../styles/Layout";

export default function List({ data }) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const check = data.filter((el) => el.done === true);
    const noCheck = data.filter((el) => el.done === false);
    setOrder([...check, ...noCheck]);
  }, [data]);

  return (
    <article>
      <ListRows>
        {order.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ListRows>
    </article>
  );
}
