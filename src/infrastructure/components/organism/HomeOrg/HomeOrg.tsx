import * as S from './HomeOrg.style';
import { TextWriter, AtentionButton, JellowText } from 'infrastructure/components';
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
              <Bounce triggerOnce damping={0.1} delay={300} cascade>
                <JellowText>
                  <S.Letter>M</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>a</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>i</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>n</S.Letter>
                </JellowText>
              </Bounce>
            </S.TitleWord>
            <S.TitleWord>
              <Bounce triggerOnce damping={0.1} delay={1000} cascade>
                <JellowText>
                  <S.Letter>R</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>m</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>e</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>,</S.Letter>
                </JellowText>
              </Bounce>
            </S.TitleWord>
          </S.Title>
          <S.Subtitle>
            <S.SubTitleWord>
              <Bounce triggerOnce damping={0.1} delay={800} cascade>
                <JellowText>
                  <S.Letter>D</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>e</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>s</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>a</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>l</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>l</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>a</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>d</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
              </Bounce>
            </S.SubTitleWord>
            <S.SubTitleWord>
              <Bounce triggerOnce damping={0.1} delay={2000} cascade>
                <JellowText>
                  <S.Letter>F</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>r</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>o</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>n</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>t</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>e</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>n</S.Letter>
                </JellowText>
                <JellowText>
                  <S.Letter>d</S.Letter>
                </JellowText>
              </Bounce>
            </S.SubTitleWord>
          </S.Subtitle>
          <TextWriter
            dinamicText={[
              'Me gusta el desarrollo web.',
              'Actualmente resido en Venezuela.',
              'Me gusta crear y aprender cosas nuevas.',
              'Escucho rock (80s, 90s) cuando programo.',
              'Me gusta ir a la playa.',
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
