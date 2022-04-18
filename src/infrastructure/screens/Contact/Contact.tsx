import { useEffect } from 'react';
import * as S from './Contact.style';
import useFormHook from './contactHooks/useForm';
import { Fade } from 'react-awesome-reveal';
import { msgSend } from 'infrastructure/assets/images';
import useAnimation from 'infrastructure/hook/useAnimation';

const Contact = (): JSX.Element => {
  const { fromLeft } = useAnimation();
  const {
    handleSubmit,
    state,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
    isValid,
    dirty,
  } = useFormHook();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state.succeeded) {
    return (
      <S.Cont>
        <S.ConfirmCont>
          <S.ConfirmTitle>Gracias por escribir</S.ConfirmTitle>
          <S.ConfirmMsg>estare en contacto contigo pronto</S.ConfirmMsg>
          <S.ConfirmImg src={msgSend} />
        </S.ConfirmCont>
      </S.Cont>
    );
  }
  return (
    <S.Cont className='Contact__Cont'>
      <S.Header className='Contact__Header' style={fromLeft}>
        <h1>Contacto</h1>
        <hr />
      </S.Header>
      <S.Form className='Contact__Form' onSubmit={handleSubmit}>
        <Fade
          cascade
          damping={0.5}
          triggerOnce
          direction='down'
          style={{ display: 'flex' }}
        >
          <S.Field>
            <S.Input
              type='text'
              name='name'
              placeholder='Nombre'
              value={values.name}
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              Error={false}
            />
          </S.Field>
          <S.Field>
            <S.Input
              type='text'
              name='subject'
              placeholder='Asunto'
              value={values.subject}
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              Error={false}
            />
          </S.Field>
          <S.Field>
            <S.Input
              type='email'
              name='email'
              placeholder='Correo'
              value={values.email}
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              Error={touched.email && errors.email ? true : false}
              required
            />
          </S.Field>
          <S.Field>
            <S.TextArea
              name='msg'
              placeholder='Mensaje'
              cols={30}
              rows={10}
              value={values.msg}
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              Error={touched.msg && errors.msg ? true : false}
              required
            ></S.TextArea>
          </S.Field>
          <S.Submit
            type='submit'
            className='form__submit'
            value='Enviado'
            disabled={!(isValid && dirty)}
          >
            Enviar
          </S.Submit>
        </Fade>
      </S.Form>
      <S.ErrorsCont>
        {touched.email && errors.email ? (
          <Fade triggerOnce direction='left' style={{ display: 'block' }}>
            <S.ErrorCont>
              <S.Error>{errors.email}</S.Error>
            </S.ErrorCont>
          </Fade>
        ) : null}

        {touched.msg && errors.msg ? (
          <Fade triggerOnce direction='left' style={{ display: 'block' }}>
            <S.ErrorCont>
              <S.Error>{errors.msg}</S.Error>
            </S.ErrorCont>
          </Fade>
        ) : null}
      </S.ErrorsCont>
    </S.Cont>
  );
};

export default Contact;
