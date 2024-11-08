import { useEffect, RefObject } from "react";

const useOnClickOutside = (
  isOpen: boolean | number | null,
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
) => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
        handler(event); // Call the handler with the event
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [ref, handler, isOpen]);
};

export default useOnClickOutside;
