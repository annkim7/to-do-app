import { useState, useCallback } from "react";

export default function useChoice(initial) {
  const [value, setValue] = useState("");
  const [isActive, setActive] = useState(null);

  const onClick = useCallback((symbol, idx) => {
    setValue(symbol);
    setActive(idx);
  }, []);

  const reset = useCallback(() => {
    setValue(initial);
    setActive(null);
  }, [initial]);

  return [value, onClick, reset];
}
