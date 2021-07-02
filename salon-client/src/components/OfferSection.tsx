import { useState } from 'react';
import images from '../helpclasses/getImageByKey';
import { Payload } from '../helpclasses/interfaces';

interface Props {
  title: string;
  payloadArray: Payload[];
}

const OfferSection = ({ title, payloadArray }: Props) => {
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    console.log(payloadArray);
    setRotate(!rotate);
    console.log(rotate);
  };

  return (
    <article
      className='bg-secondaryvariant dark:bg-primarymain-dark shadow-main dark:shadow-dark cursor-pointer  rounded-sm text-primaryvariant dark:text-darktext flex justify-between items-center p-1 mx-1  w-full'
      onClick={handleClick}
    >
      <h1 className='capitalize ml-4 mb-1 text-xl'>{title}</h1>
      <div
        className={`transform ${
          rotate ? '-rotate-90 ' : ''
        }  transition duration-200`}
      >
        <span
          className='iconify svg-icon text-contrast text-5xl'
          data-inline='false'
          data-icon={images.arrow}
        ></span>
      </div>
    </article>
  );
};

export default OfferSection;
