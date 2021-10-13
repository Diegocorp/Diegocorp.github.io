import { v4 as uuidv4 } from "uuid";
import CarfenSoftImg from "../images/projects/carfensoft.png";
import MasterNETImg from "../images/projects/masternet.png";
import JoaquinJaureguiImg from "../images/projects/joaquinjauregui.png";
import CharlesGrandedImg from "../images/projects/charlesgranded.png";
import DavidAlenImg from "../images/projects/DavidalenPortfolio.png";

const projects = [
  {
    id: uuidv4(),
    name: "David Alen Portfolio",
    desc: "Personal portfolio developed for David Alen freelance designer of user interfaces for websites and mobile applications. Made with React.js technology.",
    img: DavidAlenImg,
    link: "https://www.davidalen.tk/",
  },
  {
    id: uuidv4(),
    name: "MasterNET Website",
    desc: "Website developed to promote the startup MasterNET in France. Made with React.js technology.",
    img: MasterNETImg,
    link: "https://www.masternet.ga/",
  },
  {
    id: uuidv4(),
    name: "Joaquin Jauregui Portfolio",
    desc: "Personal portfolio developed for the lawyer Joaquin Jauregui market for promotion in the american market. Made with React.js technology.",
    img: JoaquinJaureguiImg,
    link: "https://www.joaquinjauregui.ml/",
  },
  {
    id: uuidv4(),
    name: "CarfenSoft Website",
    desc: "Website developed to promote the software development company CarfenSoft. Made with React.js technology.",
    img: CarfenSoftImg,
    link: "https://www.carfensoft.ga/",
  },

  {
    id: uuidv4(),
    name: "Charles Granded Portfolio",
    desc: "Personal portfolio developed for Charles Granded freelance programmer specialized in Back-End. Made with React.js technology.",
    img: CharlesGrandedImg,
    link: "https://www.charlesgranded.cf/",
  },
];

export default projects;
