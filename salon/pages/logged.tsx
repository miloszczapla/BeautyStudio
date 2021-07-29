import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FormikField from '../components/FormikField';
import Wrapper from '../components/Wrapper';
import { useMeQuery } from '../generated/graphql';
import * as Yup from 'yup';

const Logged = () => {
  const [isEditable, setIsEditable] = useState(false);

  const router = useRouter();

  const me = useMeQuery();
  const data = me.data?.me;
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: data?.name,
          surName: data?.surName,
          email: data?.email,
          phone: data?.phone,
          note: data?.note,
          smsNotification: data?.smsNotification,
          emailNotification: data?.emailNotification,
          userImage: data?.userImage,
        }}
        onSubmit={
          () => {}

          //  async (values, { setErrors }) => {
          //   if (!values.login.includes('@') && !values.login.startsWith('+'))
          //     values.login = '+48' + values.login;

          //   const response = await login({ variables: values });

          //   // error validation on server side
          //   if (response.data?.login.errors) {
          //     setErrors(toErrorMap(response.data.login.errors));
          //   } else if (response.data?.login.user) {
          //     //everything is ok
          //     router.push('/');
          //   }
          // }
        }
        //validation on client side
        validationSchema={Yup.object({
          login: Yup.string().required('pole wymagane'),
          password: Yup.string().required('pole wymagane'),
        })}
        render={(formProps) => {
          return (
            <Form className=' flex flex-col gap-5 text-xs'>
              <FormikField
                name='login'
                label='email albo numer telefonu'
                placeholder='login@poczta.com'
                formProps={formProps}
              />
              <FormikField
                name='password'
                label='Hasło'
                type='password'
                placeholder='********'
                formProps={formProps}
              />

              {isEditable ? (
                <button
                  type='submit'
                  className='submit-btn'
                  onClick={() => setIsEditable(true)}
                  // onClick={() => console.log('wartości pól', formProps.values)}
                >
                  edytuj
                </button>
              ) : (
                <button
                  type='submit'
                  className='submit-btn'
                  // onClick={() => console.log('wartości pól', formProps.values)}
                >
                  edytuj
                </button>
              )}
            </Form>
          );
        }}
      ></Formik>
    </Wrapper>
  );
};
export default Logged;
