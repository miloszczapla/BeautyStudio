// import { useEffect } from 'react';
import images from '../helpclasses/getImageByKey';
import useToggleTheme from '../helpclasses/useToggleTheme';

const ThemeToggler = () => {
  const { toggle, theme } = useToggleTheme();
  console.log('theme value', theme);

  // useEffect(() => {
  //   const handleClick = () => {
  //     console.log('toggled theme');
  //     toggle();
  //   };
  // }, []);
  const handleClick = () => {
    console.log('toggled theme');
    toggle();
  };
  return (
    <div
      onClick={handleClick}
      className='bg-contrast-dark fixed left-0 bottom-0 w-10 h-10 rounded-full flex items-center justify-center z-50 dark:bg-secondaryvariant-dark'
    >
      <span
        className='iconify dark:text-secondarymain text-lightBulb text-2xl fill-current transition duration-300 '
        data-inline='false'
        data-icon={theme ? images.sun : images.moon}
      ></span>

      {/* <span
        className='iconify svg-icon text-lightBulb text-2xl '
        data-inline='false'
        data-icon={images.lightBulb}
      ></span> */}
    </div>
  );
};

export default ThemeToggler;
