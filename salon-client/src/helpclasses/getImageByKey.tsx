import offer from '../assets/offer.svg';
import signup from '../assets/signup.svg';
import hairicon from '../assets/hairicon.svg';
import hamburger from '../assets/hamburger.svg';

const images = {
  offer,
  signup,
  hamburger,
  hairicon,
} as any;
const getImageByKey = (key: string) => {
  return images[key];
};
export default getImageByKey;
