import { useEffect, useRef, useState } from "react";

const useDebounce = (value: any, delay: number = 500): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
    timerRef.current = window.setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
