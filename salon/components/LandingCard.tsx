import { images } from '../helpclasses/getImageByKey';
import Image from 'next/image';

//Card on landing page that you see '/' path
const LandingCard = () => {
  return (
    <article className='flex flex-col items-center p-6 filter dark:brightness-75 transition duration-300 '>
      <Image src={images.landingImg} alt='landing' />
      {/* <img src={images.landingImg} alt='landing' /> */}
      <p className='bg-secondaryvariant dark:bg-primarymain-dark shadow-main dark:shadow-dark my-3 p-3 rounded-lg max-w-md'>
        Tworzymy zespół doświadczonych trychologów. Specjalizujemy się w
        medycznym rozwiązywaniu problemów i chorób skóry głowy, utraty włosów
        oraz wszelkiego rodzaju łysień. Przy wskazaniach wykonujemy
        specjalistyczne zabiegi trychologiczne oraz kuracje preparatami
        trychologicznymi. Niechirurgiczne metody zagęszczania i przedłużania
        włosów.
      </p>
    </article>
  );
};

export default LandingCard;
