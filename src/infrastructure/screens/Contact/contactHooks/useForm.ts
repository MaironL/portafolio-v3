import { useForm /*ValidationError*/ } from '@formspree/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useFormHook = () => {
  //*formpree handleSubmit
  const [state, handleSubmit] = useForm('xknyonyq');

  //*useFormik validation
  interface formDataInterface {
    name: string;
    subject: string;
    email: string;
    msg: string;
  }
  const { handleChange, values, handleBlur, touched, errors, isValid, dirty } =
    useFormik<formDataInterface>({
      initialValues: {
        name: '',
        subject: '',
        email: '',
        msg: '',
      },
      onSubmit: ({ name, subject, email, msg }: formDataInterface) => {
        //to use this submit i need to use the handleSubmit of formik, now i am using the handleSubmit from Formspree
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('El correo introducido es incorrecto')
          .required('El campo correo es requerido'),
        msg: Yup.string()
          .min(3, 'El mensaje debe ser de minimo 3 letras')
          .required('El campo mensaje es requerido'),
      }),
    });

  return {
    handleSubmit,
    state,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
    isValid,
    dirty,
  };
};

export default useFormHook;
