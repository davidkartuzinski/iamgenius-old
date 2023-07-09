import Image from 'next/image';
import logo from '../Logo/I-am-genius-logo.svg';

const Logo = () => {
  return (
    <Image
      priority
      src={logo}
      width={211.3}
      height={110.5}
      alt='I am Genius logo'
    />
  );
};

export default Logo;
