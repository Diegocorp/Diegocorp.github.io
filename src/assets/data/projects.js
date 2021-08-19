import { v4 as uuidv4 } from "uuid";
import CarfenSoftImg from "../images/carfensoft.png";
import MasterNETImg from "../images/masternet.png";
import JoaquinJaureguiImg from "../images/joaquinjauregui.png";

const projects = [
  {
    id: uuidv4(),
    name: "MasterNET Website",
    desc: "Website developed to promote the startup MasterNET in France using React.js technology.",
    img: MasterNETImg,
  },
  {
    id: uuidv4(),
    name: "CarfenSoft Website",
    desc: "Website developed to promote the software development company CarfenSoft using React.js technology.",
    img: CarfenSoftImg,
  },
  {
    id: uuidv4(),
    name: "Joaquin Jauregui Portfolio",
    desc: "Personal portfolio developed for the lawyer Joaquin Jauregui market for promotion in the american market using React.js technology.",
    img: JoaquinJaureguiImg,
  },
];

export default projects;
