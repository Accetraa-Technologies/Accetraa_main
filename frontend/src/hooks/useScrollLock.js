import { useEffect } from 'react';

// Locks body scroll while preserving the current scroll position.
// Restores position on unlock to prevent page jump.
const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.overflow  = 'hidden';
    body.style.position  = 'fixed';
    body.style.top       = `-${scrollY}px`;
    body.style.width     = '100%';

    return () => {
      body.style.overflow  = '';
      body.style.position  = '';
      body.style.top       = '';
      body.style.width     = '';
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
};

export default useScrollLock;
