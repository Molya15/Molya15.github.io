import React from "react";
import "./list.css";

const List = ({ planets, active, ...props }) => {
   return (
      <div className="list">
         <ul>
            {planets.map((planet) => (
               <li
                  className={planet.id === active ? "active" : ""}
                  key={planet.id}
                  onClick={props.changeActive}
               >
                  <a href="#article">
                     <img src={planet.nav} alt={planet.text} />
                     <p>{planet.text}</p>
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default List;
