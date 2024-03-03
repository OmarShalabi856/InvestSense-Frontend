import React from 'react';
import MainLogo from '../Images/MainLogo.png';
import './Logo.css'; // Import the CSS file

type Props = {};

const Logo = (props: Props) => {
  return (
    <img  src={MainLogo} className="logo" alt="Logo" />
  );
};

export default Logo;
