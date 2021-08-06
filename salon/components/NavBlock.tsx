import Link from 'next/link';
import React from 'react';

interface Props {
  path: string;
  children: any;
}

const NavBlock = ({ children, path }: Props) => {
  return (
    <Link href={path}>
      <div className='bg-contrast bg-opacity-70 text-left w-full px-6 py-2 rounded-sm dark:bg-lightBulb dark:text-white dark:bg-opacity-70 cursor-pointer md:bg-transparent md:text-center md:flex md:justify-center md:items-center md:focus:bg-secondarymain md:hover:bg-secondarymain md:hover:bg-opacity-25 md:focus:bg-opacity-25 md:text-2xl md:whitespace-nowrap'>
        {children}
      </div>
    </Link>
  );
};

export default NavBlock;
