import { useState } from "react";

export default function useModal(initial) {
  const [value, setValue] = useState(initial);

  const onClick = () => {
    setValue(!value);
  };

  return [value, onClick];
}
