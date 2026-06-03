import { useEffect } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]:not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

// Traps keyboard focus inside `ref` while `isActive` is true.
// Tab cycles to first; Shift+Tab cycles to last.
const useFocusTrap = (ref, isActive) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const container = ref.current;

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const focusable = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !container.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [ref, isActive]);
};

export default useFocusTrap;
