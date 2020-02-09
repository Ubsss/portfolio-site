import algorithm from "./algorithm.jpeg";
import portfolio from "./portfolio.jpg";
import robots from "./robots.jpg";
import cpp from "./cpp.jpeg";

const ProjectList = [
  {
    id: 1,
    icon: portfolio,
    name: "Want to know how I built this site?",
    description: "The code behind this site!",
    link: "https://github.com/Ubsss/portfolio-site"
  },
  {
    id: 2,
    icon: algorithm,
    name: "Data structures and algorithms in python.",
    description: "Some of my practice with DS and algorithms in python.",
    link: "https://github.com/Ubsss/Data-Structures-using-Python"
  },
  {
    id: 3,
    icon: robots,
    name: "I made a swarm robotics simulation.",
    description: "I built a simulation of autonomous robotic behaviors!",
    link: "https://github.com/Ubsss/SwarmRobotics-Simulation"
  },
  {
    id: 4,
    icon: cpp,
    name: "Some of my first C++ algorithms design.",
    description:
      "A few of my fun C++ projects back when I lived hardware dev life.",
    link: "https://github.com/Ubsss/Cpp"
  }
];

export { ProjectList };
