import { useEffect, useRef, useState } from "react";

function useDebounce1(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);

    console.log(`🚀 ~ timer ~ timer:`, timer.current);
    return () => {
      clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce1;

// DESC : useRef in debounce
