import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Counter",
    description: "add number minus number from user value",
  },
  {
    id: 2,
    title: "Programming Multiverse",
    description:
      "web application that displays programming languages' details ",
  },

  {
    id: 3,
    title: "Anagram Checker",
    description:
      "Two words are anagrams of each other if they contain the same number of characters and the same characters",
  },

  {
    id: 4,
    title: "QuoteGenerator",
    description:
      "capable of pulling quotes randomly from an API, a database, or simply from an array.",
  },
  {
    id: 5,
    title: "Image Gallery",
    description: "A Simple Images Gallery Click on images and view Image",
  },
  {
    id: 6,
    title: "Accordion",
    description: "Accordion",
  },
  {
    id: 7,
    title: "Background Changer",
    description: "change a Random Background",
  },
  {
    id: 8,
    title: "Light Dark Mode",
    description: "change theme mode",
  },

  {
    id: 9,
    title: "QrCodeGenerator",
    description: "Generate Qr Code from user input",
  },

  {
    id: 10,
    title: "TableColorizer",
    description: "Table Colorizer input number to add color ",
  },
  {
    id: 11,
    title: "Pagination",
    description: "pagination ",
  },
  {
    id: 12,
    title: "Stack",
    description: "Stack ",
  },
  {
    id: 13,
    title: "StarRating",
    description: "StarRating",
  },
  {
    id: 14,
    title: "Telephone formatter",
    description: "Telephone formatter",
  },
  {
    id: 15,
    title: "Tic Tac Toe",
    description: "TicTacToe",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/project/${project.id}`} state={projects}>
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
