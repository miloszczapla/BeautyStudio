import { icons } from '../helpclasses/getImageByKey';
import { Payload } from '../helpclasses/interfaces';
// import ButtonBlock from './ButtonBlock';
import ButtonBlocktel from './ButtonBlocktel';
import { Label } from './Label';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  payload: Payload;
}

const Modal = ({ setModal, payload }: Props) => {
  console.log(payload.title, payload.price);

  return (
    <>
      <article
        className='fixed inset-0 bg-modal dark:bg-modal-dark z-50 flex  justify-center items-center '
        onClick={() => setModal(false)}
      ></article>
      <div className=' absolute left-1/2 z-50'>
        <div className=' relative -left-1/2 '>
          <div className='modal-content bg-white dark:bg-primarymain-dark shadow-main max-w-sm p-4 rounded-lg z-50'>
            <Label {...payload} />
            <p className='text-black dark:text-darktext p-2 text-lg'>
              {' '}
              {payload.description}
            </p>
            <div className='flex justify-end p-2'>
              <ButtonBlocktel
                url='tel:+48123456789'
                title='umów się'
                icon={icons.signup}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
