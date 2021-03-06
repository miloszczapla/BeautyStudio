import { Field, ErrorMessage, getIn } from 'formik';
import React from 'react';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  label?: string;
  formProps: any;
  isEditable?: boolean;
}

const FormikField = ({
  name,
  type = 'text',
  placeholder,
  formProps,
  label,
  isEditable = true,
}: Props) => {
  function getStyles(errors: any, fieldName: any) {
    if (getIn(errors, fieldName)) {
      return 'border-error border';
    }
  }

  return (
    <div className='my-2 flex flex-col gap-1 relative'>
      {label && (
        <label
          htmlFor={name}
          className='text-black first-letter-capitalize dark:text-white text-xl'
        >
          {label}
        </label>
      )}

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`px-2 text-2xl text-primarymain border-b  focus:outline-none  border-primarymain focus:shadow-dark dark:bg-secondarymain-dark  ${getStyles(
          formProps.errors,
          name
        )}`}
      />
      <ErrorMessage
        name={name}
        className='first-letter-capitalize text-error'
        component='div'
      />
      {!isEditable && (
        <div className='absolute z-10 top-0 bottom-0 left-0 right-0'></div>
      )}
    </div>
  );
};

export default FormikField;
