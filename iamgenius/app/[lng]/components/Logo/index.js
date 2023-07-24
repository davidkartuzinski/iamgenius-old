import Image from 'next/image';
import logo from '../Logo/genius-pencil-logo.svg';

const Logo = () => {
  return (
    <Image
      priority
      src={logo}
      width={156.4}
      height={247.5}
      alt='I am Genius logo'
    />
  );
};

export default Logo;
