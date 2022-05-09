import * as S from './HomeOrg.style';
import { TextWriter, AtentionButton } from 'infrastructure/components';
import { Bounce, Fade } from 'react-awesome-reveal';

const HomeOrg = () => {
  return (
    <>
      <S.Heading>
        <Fade triggerOnce cascade>
          <S.Presentation>
            Hola <span>&#128075;</span>, mi nombre es
          </S.Presentation>
          <S.Title>
            <S.TitleWord>
              <Bounce triggerOnce damping={0.1} delay={500} cascade>
                <S.Letter>M</S.Letter>
                <S.Letter>a</S.Letter>
                <S.Letter>i</S.Letter>
                <S.Letter>r</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>n</S.Letter>
              </Bounce>
            </S.TitleWord>
            <S.TitleWord>
              <Bounce triggerOnce damping={0.1} delay={1000} cascade>
                <S.Letter>R</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>m</S.Letter>
                <S.Letter>e</S.Letter>
                <S.Letter>r</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>,</S.Letter>
              </Bounce>
            </S.TitleWord>
          </S.Title>
          <S.Subtitle>
            <S.SubTitleWord>
              <Bounce triggerOnce damping={0.1} delay={800} cascade>
                <S.Letter>D</S.Letter>
                <S.Letter>e</S.Letter>
                <S.Letter>s</S.Letter>
                <S.Letter>a</S.Letter>
                <S.Letter>r</S.Letter>
                <S.Letter>r</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>l</S.Letter>
                <S.Letter>l</S.Letter>
                <S.Letter>a</S.Letter>
                <S.Letter>d</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>r</S.Letter>
              </Bounce>
            </S.SubTitleWord>
            <S.SubTitleWord>
              <Bounce triggerOnce damping={0.1} delay={2000} cascade>
                <S.Letter>F</S.Letter>
                <S.Letter>r</S.Letter>
                <S.Letter>o</S.Letter>
                <S.Letter>n</S.Letter>
                <S.Letter>t</S.Letter>
                <S.Letter>e</S.Letter>
                <S.Letter>n</S.Letter>
                <S.Letter>d</S.Letter>
              </Bounce>
            </S.SubTitleWord>
          </S.Subtitle>
          <TextWriter
            staticText='Y'
            dinamicText={[
              'me gusta el desarrollo web.',
              'actualmente resido en Venezuela.',
              'me gusta crear y aprender cosas nuevas.',
              'escucho rock (80s, 90s) cuando programo.',
              'me gusta ir a la playa.',
            ]}
          />
          <S.LinkTo to='/Projects'>
            <AtentionButton size='large' text='Proyectos' />
          </S.LinkTo>
        </Fade>
      </S.Heading>
    </>
  );
};

export default HomeOrg;
