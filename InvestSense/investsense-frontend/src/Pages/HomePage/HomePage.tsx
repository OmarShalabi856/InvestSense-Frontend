import React from "react";
import Hero from "../../Components/Hero";
import Start from "../../Components/Start/Start";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="container mt-20">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Hero />
        </div>
        <div className="col-lg-6">
          <Start />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
