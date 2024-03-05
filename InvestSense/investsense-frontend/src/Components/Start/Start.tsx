import React from "react";
import '../../App.css'
type Props = {};

function Start({}: Props) {
  return (
    <>
      <div className="w-full font-bold size-1 text-lg text-blue-custom flex justify-evenly flex-col h-full p-2">
        <div>
          Navigate the Markets with Invest Sense: Your Smart Destination for
          Tracking and Monitoring Stock Prices!
        </div>
        <div className="red-button mt-16">
            Get Started!
        </div>
      </div>
    </>
  );
}

export default Start;
