import { useEffect, useState } from 'react';

//change html
const useToggleTheme = () => {
  // FIXME: useState works, maybe there is better solution to get it running
  const [theme, setTheme] = useState('light');
  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  //useEffect force rerender
  useEffect(() => {
    //grab html element

    const htmlElement = document.documentElement;
    //toggle class of html element, change theme of tailwindcss
    htmlElement.classList.toggle('dark');
  }, [theme]);
  return toggle;
};

export default useToggleTheme;
