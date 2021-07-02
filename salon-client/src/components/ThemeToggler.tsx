import images from '../helpclasses/getImageByKey';
import useToggleTheme from '../helpclasses/useToggleTheme';

const ThemeToggler = () => {
  const toggle = useToggleTheme();

  const handleClick = () => {
    toggle();
  };
  return (
    <div
      onClick={handleClick}
      className='bg-contrast-dark cursor-pointer fixed left-0 bottom-0 w-10 h-10 rounded-full flex items-center justify-center z-50 dark:bg-secondaryvariant-dark'
    >
      {/* which icon is diplayed depend on theme */}
      <span
        className='iconify text-lightBulb dark:hidden text-2xl fill-current transition duration-300 '
        data-inline='false'
        data-icon={images.sun}
      ></span>
      <span
        className='iconify dark:text-secondarymain hidden dark:block text-xl fill-current transition duration-300 '
        data-inline='false'
        data-icon={images.moon}
      ></span>
    </div>
  );
};

export default ThemeToggler;
