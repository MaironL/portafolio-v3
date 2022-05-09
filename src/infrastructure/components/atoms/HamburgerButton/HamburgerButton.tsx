import * as S from './HamburgerButton.style';

interface HamburgerButtonProps {
  show: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ show, onClick }: HamburgerButtonProps) => {
  return (
    <S.Hamburger show={show} onClick={onClick}>
      <S.Bar show={show} />
    </S.Hamburger>
  );
};

export default HamburgerButton;
