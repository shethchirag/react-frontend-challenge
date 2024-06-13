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
  5: {
    component: lazy(() => import("../components/ImageGallery")),
    title: "ImageGallery",
  },
  6: {
    component: lazy(() => import("../components/Accordion")),
    title: "Accordion",
  },
  7: {
    component: lazy(() => import("../components/BackgroundChanger")),
    title: "Background Changer",
  },
  8: {
    component: lazy(() => import("../components/LightDarkMode")),
    title: "Light Dark Mode",
  },
  9: {
    component: lazy(() => import("../components/QrCodeGenerator")),
    title: "QR generator",
  },
  10: {
    component: lazy(() => import("../components/TableColorizer")),
    title: "Table Colorizer",
  },
  11: {
    component: lazy(() => import("../components/pagination")),
    title: "Pagination",
  },
  12: {
    component: lazy(() => import("../components/Stack")),
    title: "Stack",
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
