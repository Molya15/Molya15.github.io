import React from "react";
import "./App.css";
import Match from "./components/match";
import List from "./components/list.js";
import Planet from "./components/planet";
import mertxt from "./json/mer.json";
import ventxt from "./json/ven.json";
import eartxt from "./json/ear.json";
import martxt from "./json/mar.json";
import juptxt from "./json/jup.json";
import sattxt from "./json/sat.json";
import uratxt from "./json/ura.json";
import neptxt from "./json/nep.json";
import plutxt from "./json/plu.json";
import mericon from "./images/solar-mer.png";
import venicon from "./images/solar-ven.png";
import earicon from "./images/solar-ear.png";
import maricon from "./images/solar-mar.png";
import jupicon from "./images/solar-jup.png";
import saticon from "./images/solar-sat.png";
import uraicon from "./images/solar-ura.png";
import nepicon from "./images/solar-nep.png";
import pluicon from "./images/solar-plu.png";
import merback from "./images/mer-back.png";
import venback from "./images/ven-back.png";
import earback from "./images/ear-back.png";
import marback from "./images/mar-back.png";
import jupback from "./images/jup-back.png";
import satback from "./images/sat-back.png";
import uraback from "./images/ura-back.png";
import nepback from "./images/nep-back.png";
import pluback from "./images/plu-back.png";
import navmer from "./images/nav-mer.png";
import navven from "./images/nav-ven.png";
import navear from "./images/nav-ear.png";
import navmar from "./images/nav-mar.png";
import navjup from "./images/nav-jup.png";
import navsat from "./images/nav-sat.png";
import navura from "./images/nav-ura.png";
import navnep from "./images/nav-nep.png";
import navplu from "./images/nav-plu.png";
import mer from "./images/mer.png";
import ven from "./images/ven.png";
import ear from "./images/ear.png";
import mar from "./images/mar.png";
import jup from "./images/jup.png";
import sat from "./images/sat.png";
import ura from "./images/ura.png";
import nep from "./images/nep.png";
import plu from "./images/plu.png";

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         planets: [
            {
               id: 0,
               name: "mer",
               text: "Меркурий",
               icon: mericon,
               json: mertxt,
               back: merback,
               nav: navmer,
               img: mer,
            },
            {
               id: 1,
               name: "ven",
               text: "Венера",
               icon: venicon,
               json: ventxt,
               back: venback,
               nav: navven,
               img: ven,
            },
            {
               id: 2,
               name: "ear",
               text: "Земля",
               icon: earicon,
               json: eartxt,
               back: earback,
               nav: navear,
               img: ear,
            },
            {
               id: 3,
               name: "mar",
               text: "Марс",
               icon: maricon,
               json: martxt,
               back: marback,
               nav: navmar,
               img: mar,
            },
            {
               id: 4,
               name: "jup",
               text: "Юпитер",
               icon: jupicon,
               json: juptxt,
               back: jupback,
               nav: navjup,
               img: jup,
            },
            {
               id: 5,
               name: "sat",
               text: "Сатурн",
               icon: saticon,
               json: sattxt,
               back: satback,
               nav: navsat,
               img: sat,
            },
            {
               id: 6,
               name: "ura",
               text: "Уран",
               icon: uraicon,
               json: uratxt,
               back: uraback,
               nav: navura,
               img: ura,
            },
            {
               id: 7,
               name: "nep",
               text: "Нептун",
               icon: nepicon,
               json: neptxt,
               back: nepback,
               nav: navnep,
               img: nep,
            },
            {
               id: 8,
               name: "plu",
               text: "Плутон",
               icon: pluicon,
               json: plutxt,
               back: pluback,
               nav: navplu,
               img: plu,
            },
         ],
         active: 0,
         planetsNames: "",
      };
   }

   changeActive = (event) => {
      let name = event.target.parentNode.parentNode.className;
      name = name.slice(7);
      const index = this.state.planets
         .map((planet) => planet.name)
         .indexOf(name);
      if (index >= 0) this.setState({ active: index });
   };

   changeActiveFromList = (event) => {
      let name =
         event.target.parentNode.childNodes[1] === undefined
            ? event.target.parentNode.parentNode.childNodes[0].childNodes[1]
                 .textContent
            : event.target.parentNode.childNodes[1].textContent;
      const index = this.state.planets
         .map((planet) => planet.text)
         .indexOf(name);
      if (index >= 0) this.setState({ active: index });
   };

   showList = () => {
      if (
         window.pageYOffset >
         document.getElementsByClassName("match")[0].clientHeight
      )
         document.getElementsByClassName("list")[0].style.opacity = 1;
      else document.getElementsByClassName("list")[0].style.opacity = 0;
   };

   createNames = () => {
      this.setState({
         planetsNames: this.state.planets
            .slice()
            .sort(() => Math.random() - 0.5),
      });
   };

   render() {
      return (
         <div className="app" onWheel={this.showList}>
            <h1>Планеты Солнечной системы</h1>
            <List
               planets={this.state.planets}
               active={this.state.active}
               changeActive={this.changeActiveFromList}
            />
            <Match
               planets={this.state.planets}
               active={this.state.active}
               planetsNames={this.state.planetsNames}
               changeActive={this.changeActive}
               createNames={this.createNames}
            />
            <Planet planets={this.state.planets} active={this.state.active} />
         </div>
      );
   }
}

export default App;
