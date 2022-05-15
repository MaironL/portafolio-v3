import { animated } from 'react-spring';
import { useJellow } from 'infrastructure/hooks';

interface JellowTextProps {
  jellowTiming?: number;
  children?: React.ReactNode;
}

const JellowText = ({ children, jellowTiming }: JellowTextProps) => {
  const { styles, trigger } = useJellow({ timing: jellowTiming });

  return (
    <animated.div onMouseEnter={trigger} style={styles}>
      {children}
    </animated.div>
  );
};

export default JellowText;
