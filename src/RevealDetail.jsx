import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import ArticlePanel from "./ArticlePanel.jsx";

export default function RevealDetail({ onHome, project }) {
  const revealRef = useRef(null);
  const deckRef = useRef(null);
  const onHomeRef = useRef(onHome);
  const ProjectArticle = project.Article;
  const slides = project.slides;

  useEffect(() => {
    onHomeRef.current = onHome;
  }, [onHome]);

  useEffect(() => {
    const deck = new Reveal(revealRef.current, {
      backgroundTransition: "fade",
      center: true,
      controls: true,
      controlsLayout: "edges",
      controlsTutorial: false,
      hash: true,
      keyboard: {
        // Disable the presenter "blackout" toggle (;, :, b, v, ., /) — it
        // just hides the slide behind a black overlay with no visible exit.
        58: null,
        59: null,
        66: null,
        86: null,
        190: null,
        191: null,
      },
      height: 640,
      history: false,
      progress: true,
      transition: "convex",
      transitionSpeed: "default",
      width: 720,
    });

    deckRef.current = deck;
    deck.initialize();

    function handleEscapeKey(event) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      onHomeRef.current();
    }

    document.addEventListener("keydown", handleEscapeKey, true);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey, true);
      deck.destroy();
      deckRef.current = null;
      window.history.replaceState(null, "", window.location.pathname);
    };
  }, []);

  return (
    <div className="reveal-detail">
      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {Array.from({ length: project.slideCount }, (_, index) => (
            <section
              className={`reveal-step reveal-step--${slides[index].variant ?? "card"}`}
              data-auto-animate={slides[index].autoAnimate}
              data-background-color={slides[index].backgroundColor}
              data-background-image={slides[index].backgroundImage}
              data-background-opacity={slides[index].backgroundOpacity}
              data-background-position={slides[index].backgroundPosition}
              data-background-size={slides[index].backgroundSize}
              data-transition={slides[index].transition}
              key={slides[index].id}
            >
              <ArticlePanel>
                {({ openImage }) => (
                  <ProjectArticle
                    openImage={openImage}
                    slideCount={project.slideCount}
                    slideIndex={index}
                  />
                )}
              </ArticlePanel>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
