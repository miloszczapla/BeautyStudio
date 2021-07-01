import images from '../helpclasses/getImageByKey';
import useToggleTheme from '../helpclasses/useToggleTheme';

const NavBar = () => {
  const toggle = useToggleTheme();
  const handleClick = () => {
    console.log('hamburger clicked');
    toggle();
  };

  return (
    <nav className='flex flex-row justify-between items-center p-2 bg-contrast  dark:bg-contrast-dark'>
      <img src={images.hairicon} alt='firma' className='pl-4 h-12' />

      <div className='toggle' onClick={handleClick}>
        <span
          className='iconify svg-icon text-black '
          data-inline='false'
          data-icon={images.hamburger}
        ></span>
      </div>
    </nav>
  );
};

export default NavBar;
