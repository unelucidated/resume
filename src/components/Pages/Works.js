import React from "react";
import Workcard from "./card/Workcard";

const Works = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Workcard />
        </div>
        <div className="column is-3">
          <Workcard />
        </div>
        <div className="column is-3">
          <Workcard />
        </div>
        <div className="column is-3">
          <Workcard />
        </div>
      </div>
    </div>
  );
};

export default Works;
