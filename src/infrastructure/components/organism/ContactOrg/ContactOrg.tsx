import * as S from './ContactOrg.style';
import { Fade } from 'react-awesome-reveal';
import { msgSendIlust } from 'infrastructure/assets/images';
import { AtentionButton } from 'infrastructure/components';
import { FormikErrors, FormikTouched } from 'formik/dist/types';

type formDataInterface = {
  name: string;
  subject: string;
  email: string;
  msg: string;
};

interface ContactOrgProps {
  handleSubmit: any /*library dont give type*/;
  state: any /*library dont give type*/;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  values: formDataInterface;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  touched: FormikTouched<formDataInterface>;
  errors: FormikErrors<formDataInterface>;
  isValid: boolean;
  dirty: boolean;
}

const ContactOrg = ({
  handleSubmit,
  state,
  handleChange,
  values,
  handleBlur,
  touched,
  errors,
  isValid,
  dirty,
}: ContactOrgProps) => {
  if (state.succeeded) {
    return (
      <>
        <S.ConfirmCont>
          <S.ConfirmTitle>Gracias por escribir</S.ConfirmTitle>
          <S.ConfirmMsg>estare en contacto contigo pronto</S.ConfirmMsg>
          <S.ConfirmImg src={msgSendIlust} />
        </S.ConfirmCont>
      </>
    );
  }
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>Contacto</h3>
          <hr />
        </S.Header>
      </Fade>
      <S.Form onSubmit={handleSubmit}>
        <Fade cascade damping={0.5} triggerOnce direction='down' style={{ display: 'flex' }}>
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
          <AtentionButton
            size='small'
            text='Enviar'
            type='submit'
            value='Enviado'
            disabled={!(isValid && dirty)}
            center
          />
        </Fade>
      </S.Form>
      <S.ErrorsCont>
        {touched.email && errors.email && (
          <Fade triggerOnce direction='left' style={{ display: 'block' }}>
            <S.ErrorCont>
              <S.Error>{errors.email}</S.Error>
            </S.ErrorCont>
          </Fade>
        )}

        {touched.msg && errors.msg && (
          <Fade triggerOnce direction='left' style={{ display: 'block' }}>
            <S.ErrorCont>
              <S.Error>{errors.msg}</S.Error>
            </S.ErrorCont>
          </Fade>
        )}
      </S.ErrorsCont>
    </>
  );
};

export default ContactOrg;
