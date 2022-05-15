import { useState, useEffect, useCallback } from 'react';
import { useSpring } from 'react-spring';

interface JellowTextProps {
  timing?: number;
}

const useJellow = ({ timing = 150 }: JellowTextProps) => {
  const [isJellow, setIsJellow] = useState(false);

  const styles = useSpring({
    to: {
      display: 'inline-block',
      transform: 'scale3d(0.75, 1.25, 1)',
    },
    from: {
      display: 'inline-block',
      transform: 'scale3d(1, 1, 1)',
    },
    reset: true,
    reverse: !isJellow,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const trigger = useCallback(() => {
    setIsJellow(true);
  }, []);

  useEffect(() => {
    if (!isJellow) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsJellow(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isJellow, timing]);

  return { styles, trigger };
};

export default useJellow;
