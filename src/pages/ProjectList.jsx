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
