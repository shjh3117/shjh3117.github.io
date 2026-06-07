import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import RevealDetail from "./RevealDetail.jsx";
import TopNav from "./TopNav.jsx";
import { projects } from "./projects.js";

const LEAVE_DURATION_MS = 420;

function findProjectByPath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return projects.find((item) => item.path === normalized) ?? null;
}

export default function App() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(
    () => findProjectByPath(window.location.pathname)?.id ?? null,
  );
  const [coverOpen, setCoverOpen] = useState(false);
  const project = projects.find((item) => item.id === openProjectId) ?? null;

  function handleOpen(projectId) {
    setIsLeaving(true);
    window.setTimeout(() => {
      setOpenProjectId(projectId);
      const target = projects.find((item) => item.id === projectId);
      window.history.pushState(null, "", target.path);
    }, LEAVE_DURATION_MS);
  }

  function handleHome() {
    setOpenProjectId(null);
    setIsLeaving(false);
    window.history.pushState(null, "", "/");
  }

  // Keep state in sync with browser back/forward navigation.
  useEffect(() => {
    function handlePopState() {
      setOpenProjectId(findProjectByPath(window.location.pathname)?.id ?? null);
      setIsLeaving(false);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
