import { ThreeColumns } from "../styles/Layout";
import Category from "../ButtonComponents/Category";

export default function Choice({ label, values, event }) {
  const array = [
    {
      id: 1,
      category: "water",
    },
    {
      id: 2,
      category: "leaf",
    },
    {
      id: 3,
      category: "pot",
    },
  ];

  return (
    <>
      <h3>{label}</h3>
      <ThreeColumns>
        {array.map((el) => (
          <Category
            key={el.id}
            symbol={el.category}
            active={values === el.category ? true : false}
            onClick={() => event(el.category)}
          />
        ))}
      </ThreeColumns>
    </>
  );
}
