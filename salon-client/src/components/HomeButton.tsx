import { Link } from 'react-router-dom';
import images from '../helpclasses/getImageByKey';

const HomeButton = () => {
  return (
    <Link
      to='/'
      className='fixed bottom-3 right-3 w-14 h-14 flex items-center justify-center rounded-full bg-primarymain dark:bg-primarymain-dark'
    >
      <span
        className='iconify text-secondarymain text-3xl fill-current transition duration-300 '
        data-inline='false'
        data-icon={images.home}
      ></span>
    </Link>
  );
};

export default HomeButton;
