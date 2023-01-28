import { useState } from "react";

export default function useCheck(initial) {
  const [checked, setCheck] = useState(initial);

  const bind = {
    checked,
    onChange: (e) => setCheck(e.target.checked),
  };

  return [checked, bind];
}
