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
  13: {
    component: lazy(() => import("../components/StarRating")),
    title: "StarRating",
  },

  14: {
    component: lazy(() => import("../components/Telephoneformatter")),
    title: "Telephone formatter",
  },

  15: {
    component: lazy(() => import("../components/TicTacToe")),
    title: "Tic Tac Toe",
  },

  16: {
    component: lazy(() => import("../components/ExpenseTracker")),
    title: "Expense Tracker",
  },
  17: {
    component: lazy(() => import("../components/STEPPER")),
    title: "Stepper",
  },

  18: {
    component: lazy(() => import("../components/Tab")),
    title: "Tab",
  },
  19: {
    component: lazy(() => import("../components/Calculator")),
    title: "Calculator",
  },
  20: {
    component: lazy(() => import("../components/ColorMixer")),
    title: "Color Mixer",
  },
  21: {
    component: lazy(() => import("../components/TrafficLights")),
    title: "Traffic Lights",
  },
  22: {
    component: lazy(() => import("../components/PasswordStrength")),
    title: "Password Strength",
  },
  23: {
    component: lazy(() => import("../components/ColumnTable")),
    title: "Column Table",
  },
  24: {
    component: lazy(() => import("../components/TodoList")),
    title: "TodoList",
  },
  25: {
    component: lazy(() => import("../components/EmojiPicker")),
    title: "EmojiPicker",
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
