import { Link } from 'react-router-dom';
// import icon from '../assets/offer.svg';

interface Props {
  url: string;
  title: string;
  icon: string;
}

const ButtonBlock = ({ url, title, icon }: Props) => {
  return (
    <Link to={url}>
      <div className='block-link '>
        <h3 className='pt-1 text-xl ml-1'>{title}</h3>
        <div className='button-icon'>
          <img
            src={icon}
            alt={`${title} icon`}
            className='w-6 dark:text-secondaryvariant-dark fill-current'
          />
        </div>
      </div>
    </Link>
  );
};

export default ButtonBlock;
