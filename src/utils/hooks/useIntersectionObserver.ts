import { useEffect, useRef } from 'react';

interface IntersectionObserverArgs {
  callback: (id: string) => void;
  options?: IntersectionObserverInit;
}

export const useIntersectionObserver = ({ callback, options }: IntersectionObserverArgs) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          callback(entry.target.id);
        }
      });
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

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
