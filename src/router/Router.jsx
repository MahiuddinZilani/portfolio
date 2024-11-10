import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/Error/ErrorPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

export default Router;
