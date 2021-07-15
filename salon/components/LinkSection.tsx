import ButtonBlock from './ButtonBlock';
import { icons } from '../helpclasses/getImageByKey';
import ButtonBlocktel from './ButtonBlocktel';

//landing Page section of links
const LinkSection = () => {
  return (
    <>
      <section className='section-links'>
        <ButtonBlocktel
          title='umów się'
          url='
        tel:+48123456789'
          icon={icons.signup}
        />
        <ButtonBlock title='oferta' url='/offer' icon={icons.offer} />
        <ButtonBlock title='konto' url='/register' icon={icons.account} />
      </section>
      <div className='dividing-line'></div>
    </>
  );
};

export default LinkSection;
