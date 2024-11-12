import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/Error/ErrorPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import Resume from "../layout/Resume";
import EducationPage from "../pages/EducationPage";
import ExperiencePage from "../pages/ExperiencePage";
import ContactPage from "../pages/ContactPage";

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
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

export default Router;
