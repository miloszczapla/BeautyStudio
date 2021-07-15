import { Field, ErrorMessage, getIn } from 'formik';
import React from 'react';

interface Props {
  name: string;
  type: string;
  placeholder: string;
  formProps: any;
}

const FormikField = ({ name, type, placeholder, formProps }: Props) => {
  function getStyles(errors: any, fieldName: any) {
    if (getIn(errors, fieldName)) {
      return 'border-error border';
    }
  }
  return (
    <>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`px-2 text-2xl  border-b  focus:outline-none  border-primarymain focus:shadow-dark  ${getStyles(
          formProps.errors,
          name
        )}`}
      />

      <ErrorMessage
        name={name}
        className='first-letter-capitalize text-error'
        component='div'
      />
    </>
  );
};

export default FormikField;
