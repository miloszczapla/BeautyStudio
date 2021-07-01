import images from '../helpclasses/getImageByKey';

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between items-center p-2 bg-contrast  dark:bg-contrast-dark transition duration-300'>
      <img src={images.hairicon} alt='firma' className='pl-4 h-12' />

      <span
        className='iconify svg-icon text-black text-3xl'
        data-inline='false'
        data-icon={images.hamburger}
      ></span>
    </nav>
  );
};

export default NavBar;
