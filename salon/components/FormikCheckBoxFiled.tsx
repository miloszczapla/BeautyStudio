import { Field, ErrorMessage, getIn } from 'formik';
import React from 'react';

interface Props {
  name: string;
  formProps: any;
  content: string;
}

const FormikCheckBoxFiled = ({ name, formProps, content }: Props) => {
  function getStyles(errors: any, fieldName: any) {
    if (getIn(errors, fieldName)) {
      return 'text-error';
    }
  }
  return (
    <>
      <div className='flex flex-row gap-8 mx-4'>
        <Field
          name={name}
          type='checkbox'
          className={`scale-bigger px-2   focus:outline-none  ${getStyles(
            formProps.errors,
            name
          )} `}
        />
        <p className={`${getStyles(formProps.errors, name)} border-0 `}>
          {content}
          <br />
          <br />
          <ErrorMessage
            name={name}
            className='first-letter-capitalize text-error'
          />
        </p>
      </div>
    </>
  );
};

export default FormikCheckBoxFiled;
