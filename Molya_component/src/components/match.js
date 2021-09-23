import React from "react";
import "./match.css";
import Name from "./name.js";

const Match = ({ planets, active, planetsNames, ...props }) => {
   let isSelected = null;
   let elem = null;

   const handleMouseDown = (e) => {
      elem = e.target;
      isSelected = true;
      elem.style.position = "absolute";
      moveAt(e);
   };

   const handleMouseMove = (e) => {
      if (isSelected) {
         moveAt(e);
      }
   };

   const handleMouseUp = () => {
      isSelected = false;
      findPlanet(elem);
   };

   const moveAt = (e) => {
      const parent = elem.parentNode.parentNode.parentNode.getBoundingClientRect();
      elem.style.left =
         e.clientX - elem.getBoundingClientRect().width / 2 - parent.x + "px";
      elem.style.top =
         e.clientY - elem.getBoundingClientRect().height / 2 - parent.y + "px";
   };

   const findPlanet = (elem) => {
      if (elem == null) return;
      const act = {
         elem: elem,
         left: elem.getBoundingClientRect().x,
         top: elem.getBoundingClientRect().y,
         width: elem.getBoundingClientRect().width,
         height: elem.getBoundingClientRect().height,
      };
      const planetsPics = document.getElementsByClassName("planet");
      for (let i = 0; i < planets.length; i++) {
         if (planetsPics[i].childNodes[1].textContent === elem.textContent) {
            const found = {
               elem: planetsPics[i],
               left: planetsPics[i].getBoundingClientRect().x,
               top: planetsPics[i].getBoundingClientRect().y,
               width: planetsPics[i].getBoundingClientRect().width,
               height: planetsPics[i].getBoundingClientRect().height,
            };
            checkPosition(act, found);
            break;
         }
      }
   };

   const checkPosition = (act, found) => {
      if (
         found.left - act.left < act.width / 2 &&
         act.left - found.left < act.width / 2 &&
         found.top - act.top < found.height / 2 &&
         act.top - found.top < found.height / 2
      )
         changeTitle(act, found);
   };

   const changeTitle = (name, planet) => {
      name.elem.className += " hidden";
      planet.elem.childNodes[1].className = "";
      name.elem.style.zIndex = -1;
   };

   if (planetsNames === "")
      planetsNames = planets.slice().sort(() => Math.random() - 0.5);

   return (
      <div
         className="match"
         onLoad={props.createNames}
         onMouseUp={handleMouseUp}
      >
         <div className="space">
            {planets.map((planet) => (
               <div
                  onClick={props.changeActive}
                  className={["planet", planet.name].join(" ")}
                  key={planet.id}
               >
                  <a href="#article">
                     <img src={planet.icon} alt={planet.text} />
                  </a>
                  <p className="hidden">{planet.text}</p>
               </div>
            ))}
         </div>
         <div className="names">
            {planetsNames.map((planet) => (
               <div
                  key={planet.id}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
               >
                  <Name planet={planet}></Name>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Match;
