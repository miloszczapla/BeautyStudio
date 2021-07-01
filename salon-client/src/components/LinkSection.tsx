import ButtonBlock from './ButtonBlock';
import images from '../helpclasses/getImageByKey';

const LinkSection = () => {
  return (
    <>
      <section className='section-links'>
        <ButtonBlock title='umów się' url='/' icon={images.signup} />
        <ButtonBlock title='oferta' url='/' icon={images.offer} />
      </section>
      <div className='dividing-line'></div>
    </>
  );
};

export default LinkSection;
