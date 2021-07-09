import { useState } from 'react';
import { icons } from '../helpclasses/getImageByKey';
import { Payload } from '../helpclasses/interfaces';
import Service from './Service';
import { Collapse } from 'react-collapse';

interface Props {
  sectionTitle: string;
  payloadArray: Payload[];
}

//One offer section that describes what is in side and handle clincking and showing awaible servises
const OfferSection = ({ sectionTitle, payloadArray }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className='w-full max-w-sm'>
      <div
        className='bg-secondaryvariant dark:bg-primarymain-dark shadow-main dark:shadow-dark cursor-pointer  rounded-sm text-primaryvariant dark:text-darktext flex justify-between items-center p-1'
        onClick={handleClick}
      >
        <h1 className='capitalize ml-4 mb-1 text-2xl'>{sectionTitle}</h1>
        {/* iconify icon  */}
        <div
          className={`transform ${
            isOpened ? '-rotate-90 ' : ''
          }  transition duration-200`}
        >
          <span
            className='iconify svg-icon text-contrast text-5xl'
            data-inline='false'
            data-icon={icons.arrow}
          ></span>
        </div>
      </div>
      {/* Collapsin services */}
      <article
        className={`  transition-all   ${isOpened ? 'mt-6' : 'delay-390'}`}
      >
        <Collapse isOpened={isOpened}>
          <div className='dark:bg-primarymain-dark bg-white mx-2 px-1  pb-2'>
            {payloadArray.map((payload: Payload) => (
              <Service key={sectionTitle + payload.title} {...payload} />
            ))}
          </div>
        </Collapse>
      </article>
    </div>
  );
};

export default OfferSection;
