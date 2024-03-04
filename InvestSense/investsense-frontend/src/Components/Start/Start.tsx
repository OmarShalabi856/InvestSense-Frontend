import React from "react";
import '../../App.css'
type Props = {};

function Start({}: Props) {
  return (
    <>
      <div className="w-1/3 font-bold size-1 text-lg text-blue-custom flex justify-between flex-col h-5/6">
        <div>
          Navigate the Markets with Invest Sense: Your Smart Destination for
          Tracking and Monitoring Stock Prices!
        </div>
        <div className="red-button mt-32">
            Get Started!
        </div>
      </div>
    </>
  );
}

export default Start;
