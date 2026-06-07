import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import ArticlePanel from "./ArticlePanel.jsx";

export default function RevealDetail({ project }) {
  const revealRef = useRef(null);
  const deckRef = useRef(null);
  const ProjectArticle = project.Article;
  const slides = project.slides;

  useEffect(() => {
    const deck = new Reveal(revealRef.current, {
      backgroundTransition: "fade",
      center: true,
      controls: true,
      controlsLayout: "edges",
      controlsTutorial: false,
      hash: true,
      height: 512,
      history: false,
      progress: true,
      transition: "convex",
      transitionSpeed: "default",
      width: 640,
    });

    deckRef.current = deck;
    deck.initialize();

    return () => {
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
