import { useEffect, useRef } from "react";

const useDebounce2 = (callback, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        console.log("Timer cleared on mounting");
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      console.log("Timer cleared in function");
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("Timer reached......");
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce2;

// Reference : https://designtechworld.medium.com/create-a-custom-debounce-hook-in-react-114f3f245260
// Best debounce custom hook
