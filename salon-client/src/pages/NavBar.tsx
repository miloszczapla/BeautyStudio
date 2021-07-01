import hairicon from '../assets/hairicon.svg';
import hamburger from '../assets/hamburger.svg';
import useToggleTheme from '../helpclasses/useToggleTheme';

const NavBar = () => {
  const toggle = useToggleTheme();
  const handleClick = () => {
    console.log('hamburger clicked');
    toggle();
  };

  return (
    <div className='flex flex-row justify-between items-center p-2 bg-contrast  dark:bg-contrast-dark'>
      <img src={hairicon} alt='firma' className='pl-4 h-12' />
      <img
        src={hamburger}
        alt='menu'
        onClick={handleClick}
        className='dark:text-secondaryvariant-dark'
      />
    </div>
  );
};

export default NavBar;
