import { Field, ErrorMessage } from 'formik';
import React from 'react';

interface Props {
  name: string;
  label?: string;
  isEditable: boolean;
}

const SliderField = ({ name, label, isEditable = true }: Props) => {
  return (
    <div className='my-2  flex-col gap-1 '>
      <label
        htmlFor={name}
        className='flex gap-1  cursor-pointer items-center relative'
      >
        <div className='relative'>
          <Field
            id={name}
            name={name}
            type='checkbox'
            className='sr-only inset-0'
          />
          <div className='toggle block border border-primaryvariant bg-white w-14 h-8 rounded-full'></div>
          <div className='dot absolute left-1 top-1 bg-primarymain w-6 h-6 rounded-full transition'></div>
        </div>

        <div className='text-black first-letter-capitalize dark:text-white text-xl'>
          {label}
        </div>
      </label>
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

export default SliderField;
