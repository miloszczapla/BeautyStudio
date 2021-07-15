import React from 'react';
interface Props {
  children: any;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className='py-8 px-5 shadow-lifghtBlue max-w-md w-11/12 mx-auto my-8 bg-white'>
      {children}
    </div>
  );
};

export default Wrapper;
