import * as S from './Contact.style';
import { useEffect } from 'react';
import { SocialLinks, ContactOrg } from 'infrastructure/components';
import useForm from './contactHooks/useForm';

const Contact = () => {
  const { handleSubmit, state, handleChange, values, handleBlur, touched, errors, isValid, dirty } =
    useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont>
      <ContactOrg
        handleSubmit={handleSubmit}
        state={state}
        handleChange={handleChange}
        values={values}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
        isValid={isValid}
        dirty={dirty}
      />
      <SocialLinks />
    </S.Cont>
  );
};

export default Contact;
