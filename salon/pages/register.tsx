import React from 'react';
import { Form, Formik } from 'formik';
import Wrapper from '../components/Wrapper';
import * as Yup from 'yup';
import FormikField from '../components/FormikField';
import FormikCheckBoxFiled from '../components/FormikCheckBoxFiled';
import HomeButton from '../components/HomeButton';
import SpiningImg from '../components/SpiningImg';
import LOADING from '../assets/LOADING.png';
import 'react-phone-number-input/style.css';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../helpclasses/toErrorMap';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();

  const [register] = useRegisterMutation();
  //placeholder for agreedments
  const checkBoxContent = {
    policyAgreement:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sapien at velit at pellentesque bibendum neque, suspendisse at.',
    advertisingAgreement:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis morbi adipiscing augue fringilla odio facilisis pharetra, leo. In adipiscing vitae consequat porta nulla.',
  };

  return (
    <Wrapper>
      <HomeButton />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          phone: '',
          policyAgreement: false,
          advertisingAgreement: false,
        }}
        onSubmit={async (values, { setErrors }) => {
          if (!values.phone.startsWith('+'))
            values.phone = '+48' + values.phone;

          const response = await register({ variables: values });

          // error validation on server side
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            //everything is ok
            router.push('/');
          }
        }}
        //validation on client side
        validationSchema={Yup.object({
          name: Yup.string()
            .required('pole wymagane')
            .max(254, 'imię nie może być dłuższe niż 254 znaków'),
          password: Yup.string()
            .required('pole wymagane')
            .min(8, 'haslo musi być co najmniej długosci 8 znaków')
            .matches(
              /(?=.*[a-z])(?=.*[0-9])/,
              'hasło powinno zawierać co najmniej 1 małą literę i jedną cyfrę'
            ),
          email: Yup.string()
            .required('pole wymagane')
            .email('email jest nieprawidłowy'),
          phone: Yup.string().required('pole wymagane'),
          policyAgreement: Yup.bool().oneOf([true], 'Zgoda jest wymagana'),
        })}
        render={(formProps) => {
          return (
            <Form className=' flex flex-col gap-5 text-xs'>
              <FormikField
                name='name'
                label='Imię'
                placeholder='Magda'
                formProps={formProps}
              />
              <FormikField
                name='email'
                label='Email'
                type='email'
                placeholder='imię@poczta.com'
                formProps={formProps}
              />
              <FormikField
                name='password'
                label='Hasło'
                type='password'
                placeholder='********'
                formProps={formProps}
              />
              <FormikField
                name='phone'
                label='Numer telefonu'
                type='tel'
                placeholder='+48123456789'
                formProps={formProps}
              />

              <FormikCheckBoxFiled
                name='policyAgreement'
                content={checkBoxContent.policyAgreement}
                formProps={formProps}
              />
              <FormikCheckBoxFiled
                name='advertisingAgreement'
                content={checkBoxContent.advertisingAgreement}
                formProps={formProps}
              />

              <button type='submit' className='submit-btn'>
                {formProps.isSubmitting ? (
                  <SpiningImg LOADING={LOADING} size={14} />
                ) : (
                  'Zarejestruj się'
                )}
              </button>
            </Form>
          );
        }}
      ></Formik>

      <div className='sentence-with-link'>
        Jeśli już posiadasz konto&nbsp;
        <Link href='/login' passHref>
          <span className='cursor-pointer text-contrast underline'>
            zaloguj się
          </span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Register;
