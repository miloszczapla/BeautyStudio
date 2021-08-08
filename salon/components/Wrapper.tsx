import React from 'react';
interface Props {
  children: any;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className='py-5 px-5 shadow-lifghtBlue max-w-md w-11/12 mx-auto my-8 bg-white dark:bg-primarymain-dark dark:shadow-dark '>
      {children}
    </div>
  );
};

export default Wrapper;
