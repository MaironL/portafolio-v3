import * as S from './TextWriter.style';

interface TextWriterProps {
  staticText?: string;
  dinamicText: string[];
}

const TextWriter = ({ staticText, dinamicText }: TextWriterProps) => {
  return (
    <S.Cont>
      <S.staticText>{staticText}</S.staticText>
      <S.dynamicTextList>
        {dinamicText.map((text, index) => {
          return (
            <S.dynamicTextWord key={index}>
              <S.dynamicText>{text}</S.dynamicText>
            </S.dynamicTextWord>
          );
        })}
      </S.dynamicTextList>
    </S.Cont>
  );
};

export default TextWriter;
