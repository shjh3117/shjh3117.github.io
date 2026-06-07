import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import { projects } from "./projects.js";

const RETURN_FLAG = "myRecital:returningFromProject";
const EXPAND_DURATION_MS = 640;

function getInitialCirclePhase() {
  return sessionStorage.getItem(RETURN_FLAG) ? "returning" : "start";
}

export default function App({ onDetailOpenChange }) {
  const [activeProject, setActiveProject] = useState(null);
  const [circlePhase, setCirclePhase] = useState(getInitialCirclePhase);
  const project = projects[0];

  function openProjectDetail(project) {
    setCirclePhase("expanding");
    sessionStorage.setItem(RETURN_FLAG, "1");

    window.setTimeout(() => {
      document.body.classList.add("is-reveal-detail");
      setActiveProject(project);
      onDetailOpenChange(true);
    }, EXPAND_DURATION_MS);
  }

  useEffect(() => {
    sessionStorage.removeItem(RETURN_FLAG);

    let settleFrame;
    const enterFrame = requestAnimationFrame(() => {
      settleFrame = requestAnimationFrame(() => setCirclePhase("idle"));
    });

    return () => {
      cancelAnimationFrame(enterFrame);
      if (settleFrame) {
        cancelAnimationFrame(settleFrame);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove("is-reveal-detail");
    };
  }, []);

  if (!activeProject) {
    return (
      <div className={`project-selection project-selection--${circlePhase}`}>
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
