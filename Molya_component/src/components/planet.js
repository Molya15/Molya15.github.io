import React from "react";
import "./planet.css";

const Planet = ({ planets, active }) => {
   const planet = planets[active].json;
   const keys = Object.keys(planet);

   return (
      <div
         className="planetArticle"
         style={{
            backgroundImage: `url(${planets[active].back})`,
            backgroundPosition: "top right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
         }}
      >
         <a name="article">
            <h1 className="planetName">{planets[active].text}</h1>
         </a>

         <article>
            {keys.map((key) => (
               <div key={key}>
                  <h2>{key}</h2>
                  <p>{planet[key]}</p>
               </div>
            ))}
            <img
               src={planets[active].img}
               alt="planets[active].text"
               className="planet-view"
            />
         </article>
      </div>
   );
};

export default Planet;
