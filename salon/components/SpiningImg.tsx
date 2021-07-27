import React from 'react';
import Image from 'next/image';

interface Props {
  LOADING: any;
  size: number | 'full';
}

const SpiningImg = ({ LOADING, size }: Props) => {
  return (
    <div className={`h-${size} w-${size} animate-spin`}>
      <Image src={LOADING} alt='Loading' />
    </div>
  );
};

export default SpiningImg;
