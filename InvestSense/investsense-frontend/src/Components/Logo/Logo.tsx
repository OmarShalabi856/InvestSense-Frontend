import React from 'react';
import MainLogo from '../Images/MainLogo.png';
import './Logo.css'; // Import the CSS file

type Props = {};

const Logo = (props: Props) => {
  return (
    <img src={MainLogo} className="w-full sm:w-1/2 h-full object-cover logo" alt="Logo" />

  );
};

export default Logo;
