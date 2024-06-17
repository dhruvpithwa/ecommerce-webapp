import { useEffect, useRef } from 'react';

interface IntersectionObserverArgs {
  callback: (id: string) => void;
  options?: IntersectionObserverInit;
  delay?: number; // Add a delay option for the timeout
}

export const useIntersectionObserver = ({ callback, options, delay = 3000 }: IntersectionObserverArgs) => {
  const observer = useRef<IntersectionObserver>();
  const timeoutMap = useRef<Map<Element, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
          const timeout = setTimeout(() => {
            if (target instanceof HTMLElement) {
              callback(target.id);
            }
          }, delay);
          timeoutMap.current.set(target, timeout);
        } else {
          const timeout = timeoutMap.current.get(target);
          if (timeout) {
            clearTimeout(timeout);
            timeoutMap.current.delete(target);
          }
        }
      });
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      // Clear all timeouts
      timeoutMap.current.forEach((timeout) => clearTimeout(timeout));
      timeoutMap.current.clear();
    };
  }, [callback, options, delay]);

  const observe = (element: HTMLElement) => {
    if (observer.current && element) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: HTMLElement) => {
    if (observer.current && element) {
      observer.current.unobserve(element);
    }
  };

  return { observe, unobserve };
};
