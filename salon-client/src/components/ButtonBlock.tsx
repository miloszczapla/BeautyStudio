import { Link } from 'react-router-dom';

interface Props {
  url: string;
  title: string;
  icon: string;
}

const ButtonBlock = ({ url, title, icon }: Props) => {
  return (
    <Link to={url} className='block-link'>
      <h3 className='pt-1 text-xl ml-1'>{title}</h3>
      <div className='button-icon'>
        <span
          data-inline='false'
          data-icon={icon}
          className='iconify svg-icon text-contrast'
        ></span>
        {/* <img
          src={icon}
          alt={`${title} icon`}
          className='w-6 fill-current dark:text-secondaryvariant-dark '
        /> */}
      </div>
    </Link>
  );
};

export default ButtonBlock;
