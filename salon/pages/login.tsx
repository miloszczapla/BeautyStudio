import React from 'react';
import { Form, Formik } from 'formik';
import Wrapper from '../components/Wrapper';
import * as Yup from 'yup';
import FormikField from '../components/FormikField';
import HomeButton from '../components/HomeButton';
import SpiningImg from '../components/SpiningImg';
import LOADING from '../assets/LOADING.png';
import 'react-phone-number-input/style.css';
import { toErrorMap } from '../helpclasses/toErrorMap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLoginMutation } from '../generated/graphql';

const Login = () => {
  const router = useRouter();

  const [login, { data }] = useLoginMutation();

  return (
    <Wrapper>
      <HomeButton />

      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={async (values, { setErrors }) => {
          if (!values.login.includes('@') && !values.login.startsWith('+'))
            values.login = '+48' + values.login;

          const response = await login({ variables: values });

          // error validation on server side
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            //everything is ok
            router.push('/');
          }
        }}
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

              <button
                type='submit'
                className='submit-btn'
                // onClick={() => console.log('wartości pól', formProps.values)}
              >
                {formProps.isSubmitting ? (
                  <SpiningImg LOADING={LOADING} size={14} />
                ) : (
                  'zaloguj się'
                )}
              </button>
            </Form>
          );
        }}
      ></Formik>
      <div className='sentence-with-link'>
        Jeśli jeszcze nie masz konta&nbsp;
        <Link href='/register' passHref>
          <span className='cursor-pointer text-contrast underline'>
            zarejestruj się
          </span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Login;
