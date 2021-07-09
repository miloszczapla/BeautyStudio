import Link from 'next/link';
import { icons } from '../helpclasses/getImageByKey';

//Button to come back to landing page '/'
const HomeButton = () => {
  return (
    <Link href='/'>
      <div className='fixed bottom-3 right-3 w-14 h-14 flex items-center justify-center rounded-full bg-primarymain dark:bg-primarymain-dark'>
        {/* iconify icon  */}
        <span
          className='iconify text-secondarymain text-3xl fill-current transition duration-300 '
          data-inline='false'
          data-icon={icons.home}
        ></span>
      </div>
    </Link>
  );
};

export default HomeButton;
