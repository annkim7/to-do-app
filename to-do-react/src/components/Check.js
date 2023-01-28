import { ThreeColumns } from "../styles/Layout";
import Done from "../components/Done";

export default function Check({ label, values }) {
  return (
    <>
      <h3>{label}</h3>
      <ThreeColumns>
        <Done label={label} values={values} />
      </ThreeColumns>
    </>
  );
}
