import { icons } from '../helpclasses/getImageByKey';
import Image from 'next/image';
import Drawer from './Drawer';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

//NavBar that is present on every site
const NavBar = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const navRef = useRef(null);

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
      <Drawer isDrawer={isDrawer}>
        <NavBlock path='/login'>konto</NavBlock>
        <NavBlock path='/offer'>oferta</NavBlock>
        <NavBlock path='tel:+48123456789'>umów się</NavBlock>
        <NavBlock path='/'>Home</NavBlock>
      </Drawer>

      <div className='hidden md:flex gap-3'>
        <NavBlock path='/login'>konto</NavBlock>
        <NavBlock path='/offer'>oferta</NavBlock>
        <NavBlock path='tel:+48123456789'>umów się</NavBlock>
        <NavBlock path='/'>Home</NavBlock>
      </div>
    </nav>
  );
};

export default NavBar;

interface NavBlockProps {
  path: string;
  children: any;
}

const NavBlock = ({ children, path }: NavBlockProps) => {
  return (
    <Link href={path}>
      <div className='bg-secondarymain-dark bg-opacity-70 text-left w-full px-4 py-2 rounded-sm dark:bg-lightBulb dark:text-white dark:bg-opacity-70 cursor-pointer md:bg-transparent md:text-center md:flex md:justify-center md:items-center md:focus:bg-secondarymain md:hover:bg-secondarymain md:hover:bg-opacity-10 md:focus:bg-opacity-10 md:text-2xl md:whitespace-nowrap'>
        {children}
      </div>
    </Link>
  );
};
