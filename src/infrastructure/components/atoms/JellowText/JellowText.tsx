import { animated } from 'react-spring';
import { useJellow } from 'infrastructure/hooks';

interface JellowTextProps {
  timing?: number;
  children?: React.ReactNode;
  color?: string;
}

const JellowText = ({ children, timing, color }: JellowTextProps) => {
  const { styles, trigger } = useJellow({ timing, color });

  return (
    <animated.div onMouseEnter={trigger} style={styles}>
      {children}
    </animated.div>
  );
};

export default JellowText;
