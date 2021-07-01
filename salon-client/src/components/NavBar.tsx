import getImageByKey from '../helpclasses/getImageByKey';
import useToggleTheme from '../helpclasses/useToggleTheme';
import hairicon from '../assets/hairicon.svg';

const NavBar = () => {
  const toggle = useToggleTheme();
  const handleClick = () => {
    console.log('hamburger clicked');
    toggle();
  };

  return (
    <nav className='flex flex-row justify-between items-center p-2 bg-contrast  dark:bg-contrast-dark'>
      <img src={hairicon} alt='firma' className='pl-4 h-12' />
      <img
        src={getImageByKey('hamburger')}
        alt='menu'
        onClick={handleClick}
        className='dark:text-secondaryvariant-dark fill-current'
      />
    </nav>
  );
};

export default NavBar;
