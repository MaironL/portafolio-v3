import * as S from './AtentionButton.style';

interface AtentionButtonProps {
  to?: string;
  text: string;
  center?: boolean;
  size: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  disabled?: boolean;
}
const AtentionButton = ({ text, center, size, type, value, disabled }: AtentionButtonProps) => {
  return (
    <S.BtnLink center={center ? 'true' : 'false'} type={type} value={value} disabled={disabled}>
      <S.Text size={size} disabled={disabled}>
        {text}
      </S.Text>
      <S.Wave size={size} disabled={disabled}></S.Wave>
    </S.BtnLink>
  );
};

export default AtentionButton;
