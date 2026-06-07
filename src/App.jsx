import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import { projects } from "./projects.js";

export default function App({ onDetailOpenChange }) {
  const [activeProject, setActiveProject] = useState(null);
  const project = projects[0];

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
