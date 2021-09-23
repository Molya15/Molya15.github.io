import React from "react";
import "./name.css";

const Name = ({ planet, ...props }) => {
   return (
      <div
         onMouseDown={props.handleDown}
         onMouseMove={props.moveName}
         className="name"
      >
         {planet.text}
      </div>
   );
};

export default Name;
