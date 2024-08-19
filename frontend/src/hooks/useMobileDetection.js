import { useState, useEffect } from 'react';
import { isMobileDevice } from '../utils/detectMobile';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return isMobile;
};
