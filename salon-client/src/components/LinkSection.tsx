import ButtonBlock from './ButtonBlock';
import getImageByKey from '../helpclasses/getImageByKey';

const LinkSection = () => {
  return (
    <section className='grid  grid-cols-2 m-8 '>
      <ButtonBlock title='umów się' url='/' icon={getImageByKey('signup')} />
      <ButtonBlock title='oferta' url='/' icon={getImageByKey('offer')} />
      {/* <ButtonBlock title='' url='' icon='' /> */}
    </section>
  );
};

export default LinkSection;
