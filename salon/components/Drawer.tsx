interface Props {
  isDrawer: boolean;
  children: any;
}

const Drawer = ({ isDrawer, children }: Props) => {
  return (
    <div className='z-50 absolute top-full right-0 overflow-hidden w-3/5 md:hidden'>
      <div
        className={`  transform transition duration-300   bg-black text-lg w-full text-white p-3 bg-opacity-60 md:hidden ${
          isDrawer ? 'translate-x-0' : 'translate-x-full'
        } dark:bg-secondarymain dark:text-secondaryvariant-dark flex flex-col gap-2 dark:bg-opacity-60`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
