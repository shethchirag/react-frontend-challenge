import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const projects = {
  1: {
    component: lazy(() => import("../components/Counter/Counter")),
    title: "Counter",
  },
  2: {
    component: lazy(() => import("../components/program-multiverse")),
    title: "Counter",
  },
  3: {
    component: lazy(() => import("../components/anagramChecker")),
    title: "Anagram Checker",
  },

  4: {
    component: lazy(() => import("../components/quoteGenerator")),
    title: "QuoteGenerator",
  },
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  const { component: ProjectComponent } = project;

  return (
    <Suspense fallback={<BarLoader color="#36d7b7" width={"100%"} />}>
      <div>
        <ProjectComponent />
      </div>
    </Suspense>
  );
};

export default ProjectPage;
