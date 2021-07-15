import React from 'react';
import { Form, Formik } from 'formik';
import Wrapper from '../components/Wrapper';
import * as Yup from 'yup';
import FormikField from '../components/FormikField';
import 'react-phone-number-input/style.css';
import 'Yup-phone';
import FormikCheckBoxFiled from '../components/FormikCheckBoxFiled';
// import PhoneInput from 'react-phone-number-input';
// import PhoneInputField from './PhoneNumField';

const register = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const checkBoxContent = {
    policyAgreadment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sapien at velit at pellentesque bibendum neque, suspendisse at.',
    advertismentAgreadment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis morbi adipiscing augue fringilla odio facilisis pharetra, leo. In adipiscing vitae consequat porta nulla.',
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          phone: '',
          policyAgreadment: false,
          advertismentAgreadment: false,
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={Yup.object({
          username: Yup.string()
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
          phone: Yup.string()
            .required('pole wymagane')
            .phone(undefined, undefined, 'niewłaściwy numer telefonu'),
          policyAgreadment: Yup.bool().isTrue('Zgoda jest wymagana'),
        })}
        render={(formProps) => {
          return (
            <Form className=' flex flex-col gap-5 text-xs'>
              <FormikField
                name='username'
                type='text'
                placeholder='imię'
                formProps={formProps}
              />
              <FormikField
                name='email'
                type='email'
                placeholder='email'
                formProps={formProps}
              />
              <FormikField
                name='password'
                type='password'
                placeholder='hasło'
                formProps={formProps}
              />
              <FormikField
                name='phone'
                type='tel'
                placeholder='+48123456789'
                formProps={formProps}
              />
              <FormikCheckBoxFiled
                name='policyAgreadment'
                content={checkBoxContent.policyAgreadment}
                formProps={formProps}
              />
              <FormikCheckBoxFiled
                name='advertismentAgreadment'
                content={checkBoxContent.advertismentAgreadment}
                formProps={formProps}
              />

              <button type='submit' className='submit-btn'>
                Zartejestruj się
              </button>
            </Form>
          );
        }}
      >
        {/* {() => (
          
        )} */}
      </Formik>
    </Wrapper>
  );
};

export default register;
