import { useEffect, useState } from 'react';

//change html
const useToggleTheme = () => {
  //be sure that you dont toggle dark theme on load
  const [firstToggle, setFirstToggle] = useState(true);

  // FIXME: useState works, maybe there is better solution to get it running
  const [theme, setTheme] = useState(true);
  const toggle = () => {
    setTheme(!theme);
  };
  //useEffect force rerender
  useEffect(() => {
    //grab html element

    const htmlElement = document.documentElement;
    //toggle class of html element, change theme of tailwindcss
    //dose not toggle theme on first page load
    if (!firstToggle) {
      htmlElement.classList.toggle('dark');
    }
    setFirstToggle(false);
  }, [theme]);
  return toggle;
};

export default useToggleTheme;
