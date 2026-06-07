import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import TopNav from "./TopNav.jsx";
import { projects } from "./projects.js";

const LEAVE_DURATION_MS = 420;

export default function App() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(null);
  const [coverOpen, setCoverOpen] = useState(false);
  const project = projects.find((item) => item.id === openProjectId) ?? null;

  function handleOpen(projectId) {
    setIsLeaving(true);
    window.setTimeout(() => setOpenProjectId(projectId), LEAVE_DURATION_MS);
  }

  function handleHome() {
    setOpenProjectId(null);
    setIsLeaving(false);
  }

  // On first load, the white cover sits fully closed over the card, then
  // its circular opening grows from the center to reveal it underneath.
  useEffect(() => {
    let settleFrame;
    const enterFrame = requestAnimationFrame(() => {
      settleFrame = requestAnimationFrame(() => {
        setCoverOpen(true);
      });
    });

    return () => {
      cancelAnimationFrame(enterFrame);
      if (settleFrame) {
        cancelAnimationFrame(settleFrame);
      }
    };
  }, []);

  if (project) {
    return (
      <>
        <TopNav onHome={handleHome} />
        <RevealDetail onHome={handleHome} project={project} />
      </>
    );
  }

  return (
    <div className={`project-selection${isLeaving ? " project-selection--leaving" : ""}`}>
      <TopNav onHome={handleHome} />
      <div className="site-brand">
        <span>shjh3117's</span>
        <span>Techlog</span>
      </div>
      <a className="site-contact" href="mailto:shjh3117@gmail.com">
        shjh3117@gmail.com
      </a>
      <div className="project-list">
        {projects.map((item) => (
          <Card
            badge={item.badge}
            body={item.subtitle}
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            onOpen={() => handleOpen(item.id)}
          />
        ))}
      </div>
      <div className={`project-selection__cover${coverOpen ? " project-selection__cover--open" : ""}`} />
    </div>
  );
}
