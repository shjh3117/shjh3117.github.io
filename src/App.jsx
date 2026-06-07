import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import { projects } from "./projects.js";

export default function App({ onDetailOpenChange }) {
  const [activeProject, setActiveProject] = useState(null);
  const project = projects[0];

  function closeProjectDetail() {
    document.body.classList.remove("is-reveal-detail");
    setActiveProject(null);
    onDetailOpenChange(false);
  }

  function openProjectDetail(project) {
    document.body.classList.add("is-reveal-detail");
    setActiveProject(project);
    onDetailOpenChange(true);
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("is-reveal-detail");
    };
  }, []);

  useEffect(() => {
    function handleBackNavigation() {
      if (activeProject) {
        closeProjectDetail();
        return;
      }

      window.history.back();
    }

    window.addEventListener("blog:back", handleBackNavigation);

    return () => {
      window.removeEventListener("blog:back", handleBackNavigation);
    };
  }, [activeProject]);

  if (!activeProject) {
    return (
      <div className="project-selection">
        <Card
          badge={project.badge}
          body={project.subtitle}
          thumbnail={project.thumbnail}
          title={project.title}
          onOpen={() => openProjectDetail(project)}
        />
      </div>
    );
  }

  return (
    <RevealDetail project={activeProject} />
  );
}
