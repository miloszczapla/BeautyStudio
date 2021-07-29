import { icons } from '../helpclasses/getImageByKey';
import Image from 'next/image';
import Drawer from './Drawer';
import { useState } from 'react';
import { Collapse } from 'react-collapse';

//NavBar that is present on every site
const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <nav className='flex flex-row justify-between items-center p-2 bg-contrast   dark:bg-contrast-dark transition duration-300 relative'>
      {/* logo of the company icon  */}
      <Image src={icons.hairicon} alt='firma' className='pl-4 h-12' />
      {/* iconify icon  */}
      <button
        className='md:hidden'
        type='button'
        onClick={() => setIsDrawer((oldIsDrawer) => !oldIsDrawer)}
      >
        <span
          className='iconify svg-icon text-black text-3xl'
          data-inline='false'
          data-icon={icons.hamburger}
        ></span>
      </button>
      <Drawer isDrawer={isDrawer} />
    </nav>
  );
};

export default NavBar;
