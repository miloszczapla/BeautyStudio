import { icons } from '../helpclasses/getImageByKey';
import Image from 'next/image';
import Drawer from './Drawer';
import React, { useContext, useEffect, useRef, useState } from 'react';
import NavBlock from './NavBlock';
import { MeContext } from '../helpclasses/contexts';

//NavBar that is present on every site
const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const navRef = useRef(null);

  const me = useContext(MeContext);

  const name = (
    <div className='mx-3 flex justify-center items-center text-2xl text-white dark:text-secondarymain '>
      {me?.name}
    </div>
  );

  const linksBody = (
    <>
      <NavBlock path={me ? '/logged' : '/login'}>konto</NavBlock>
      <NavBlock path='/offer'>oferta</NavBlock>
      <NavBlock path='tel:+48123456789'>umów się</NavBlock>
      <NavBlock path='/'>Home</NavBlock>
    </>
  );

  const handleClick = (e: any) => {
    //@ts-ignore
    if (navRef.current && !navRef?.current.contains(e.target)) {
      setIsDrawer(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className='flex flex-row justify-between items-center p-2 bg-contrast   dark:bg-contrast-dark transition duration-300 relative'
    >
      {/* logo of the company icon  */}
      <Image
        src={icons.hairicon}
        alt='AM Dermatrychologia'
        className='pl-4 h-12'
      />
      {/* iconify icon  */}
      <div className='md:hidden flex'>
        {name}
        <button
          type='button'
          onClick={() => setIsDrawer((oldIsDrawer) => !oldIsDrawer)}
        >
          <span
            className='iconify svg-icon text-black text-3xl'
            data-inline='false'
            data-icon={icons.hamburger}
          ></span>
        </button>
      </div>
      <Drawer isDrawer={isDrawer}> {linksBody}</Drawer>
      <div className='hidden md:flex gap-3'>
        {linksBody}
        {name}
      </div>
    </nav>
  );
};

export default NavBar;
