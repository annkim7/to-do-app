import { useState, useCallback } from "react";

export default function useChoice(initial) {
  const [value, setValue] = useState(initial);

  const onClick = useCallback((symbol) => {
    setValue(symbol);
  }, []);

  // const reset = useCallback(() => {
  //   setValue(initial);
  //   setActive(null);
  // }, [initial]);

  return [value, onClick];
}
