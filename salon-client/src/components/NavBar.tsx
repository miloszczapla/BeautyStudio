import { icons } from '../helpclasses/getImageByKey';

//NavBar that is present on every site
const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between items-center p-2 bg-contrast  dark:bg-contrast-dark transition duration-300'>
      {/* logo of the company icon  */}
      <img src={icons.hairicon} alt='firma' className='pl-4 h-12' />
      {/* iconify icon  */}
      <span
        className='iconify svg-icon text-black text-3xl'
        data-inline='false'
        data-icon={icons.hamburger}
      ></span>
    </nav>
  );
};

export default NavBar;
