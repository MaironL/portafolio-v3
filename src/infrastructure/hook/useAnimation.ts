import { useSpring, config } from 'react-spring';

const useAnimation = () => {
  const fromLeft = useSpring({
    from: { opacity: 0, x: -500 },
    opacity: 1,
    x: 0,
    config: config.wobbly,
  });

  const fromBottom = useSpring({
    from: { opacity: 0, y: 200 },
    opacity: 1,
    y: 0,
  });
  return { fromLeft, fromBottom };
};

export default useAnimation;
