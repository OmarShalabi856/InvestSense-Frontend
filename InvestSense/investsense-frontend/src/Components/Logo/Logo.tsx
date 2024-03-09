import React from 'react';
import MainLogo from '../Images/MainLogo.png';


type Props = {};

const Logo = (props: Props) => {
  return (
    <img src={MainLogo} className="w-full h-full" alt="Logo" />

  );
};

export default Logo;
