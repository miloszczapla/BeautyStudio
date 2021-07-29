import Link from 'next/link';

interface Props {
  isDrawer: boolean;
}

const Drawer = ({ isDrawer }: Props) => {
  return (
    <div className='z-50 absolute top-full right-0 overflow-hidden w-3/5 '>
      <div
        className={`  transform transition duration-300   bg-primaryvariant text-lg w-full text-white p-3 bg-opacity-40 md:hidden ${
          isDrawer ? 'translate-x-0' : 'translate-x-full'
        } dark:bg-secondarymain dark:text-secondaryvariant-dark flex flex-col gap-2 dark:bg-opacity-40`}
      >
        <NavBlock path='/login'>umów się</NavBlock>
        <NavBlock path='/'>umów się</NavBlock>
        <NavBlock path='/'>umów się</NavBlock>
        <NavBlock path='/'>umów się</NavBlock>
        <NavBlock path='/'>umów się</NavBlock>
      </div>
    </div>
  );
};

export default Drawer;

interface NavBlockProps {
  path: string;
  children: any;
}

const NavBlock = ({ children, path }: NavBlockProps) => {
  return (
    <Link href={path}>
      <div className='bg-secondarymain-dark bg-opacity-70 text-left w-full px-4 py-2 rounded-sm dark:bg-lightBulb dark:text-white dark:bg-opacity-70 cursor-pointer'>
        {children}
      </div>
    </Link>
  );
};
