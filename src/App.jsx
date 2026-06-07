import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import TopNav from "./TopNav.jsx";
import { projects } from "./projects.js";

const LEAVE_DURATION_MS = 420;

export default function App() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [coverOpen, setCoverOpen] = useState(false);
  const project = projects[0];

  function handleOpen() {
    setIsLeaving(true);
    window.setTimeout(() => setIsOpen(true), LEAVE_DURATION_MS);
  }

  function handleHome() {
    setIsOpen(false);
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

  if (isOpen) {
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
      <Card
        badge={project.badge}
        body={project.subtitle}
        thumbnail={project.thumbnail}
        title={project.title}
        onOpen={handleOpen}
      />
      <div className={`project-selection__cover${coverOpen ? " project-selection__cover--open" : ""}`}>
        <div className="project-selection__orbit" />
      </div>
    </div>
  );
}
