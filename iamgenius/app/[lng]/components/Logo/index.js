import Image from 'next/image';
import logo from '../Logo/logo.png';

const Logo = () => {
  return (
    <Image
      priority
      src={logo}
      width={63.5}
      height={75}
      alt='I am Genius logo'
    />
  );
};

export default Logo;
