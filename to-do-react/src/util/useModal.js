import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useModal(initial) {
  const [value, setValue] = useState(initial);
  const navigate = useNavigate();

  const onClick = () => {
    setValue(!value);
  };

  const timer = (time) => {
    setTimeout(() => {
      navigate(`/`);
    }, time);
  };

  // const reset = () => {
  //   setValue("");
  // };

  return [value, onClick, timer];
}
