import { ThreeColumns } from "../styles/Layout";
import Category from "../components/Category";

export default function Choice({ label, cateArr, isActive, cateHandler }) {
  return (
    <>
      <h3>{label}</h3>
      <ThreeColumns>
        {cateArr.map((el) => (
          <Category
            key={el.id}
            symbol={el.category}
            active={isActive === el.id ? true : false}
            onClick={() => cateHandler(el.category, el.id)}
          />
        ))}
      </ThreeColumns>
    </>
  );
}
