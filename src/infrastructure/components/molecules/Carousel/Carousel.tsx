import * as S from './Carousel.style';
import { useEffect, useState } from 'react';
interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel = ({ images, title }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const last = images.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(last);
    }
    if (activeIndex > last) {
      setActiveIndex(0);
    }
  }, [images, activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <S.Cont>
      <S.LeftArrow onClick={() => setActiveIndex(activeIndex - 1)} />
      {images.map((image, index) => {
        let position =
          index === activeIndex
            ? 'active'
            : index === activeIndex - 1 || (activeIndex === 0 && index === images.length - 1)
            ? 'left'
            : 'right';
        return <S.CarouselImg key={index} src={image} alt={title} position={position} />;
      })}
      <S.RightArrow onClick={() => setActiveIndex(activeIndex + 1)} />
    </S.Cont>
  );
};

export default Carousel;
