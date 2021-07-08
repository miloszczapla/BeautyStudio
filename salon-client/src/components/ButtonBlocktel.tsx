interface Props {
  url: string;
  title: string;
  icon: string;
}

//Blockto navigete to name features of the website, displayed on landing page
const ButtonBlocktel = ({ url, title, icon }: Props) => {
  return (
    <a href={url} className='block-link'>
      <h3 className='pt-1 text-xl ml-1'>{title}</h3>
      {/* iconify icon  */}
      <div className='button-icon'>
        <span
          data-inline='false'
          data-icon={icon}
          className='iconify svg-icon text-contrast'
        ></span>
      </div>
    </a>
  );
};

export default ButtonBlocktel;
