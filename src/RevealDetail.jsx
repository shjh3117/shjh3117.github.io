import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArticlePanel from "./ArticlePanel.jsx";

export default function RevealDetail({ onHome, project }) {
  const swiperRef = useRef(null);
  const onHomeRef = useRef(onHome);
  const ProjectArticle = project.Article;
  const slides = project.slides;

  useEffect(() => {
    onHomeRef.current = onHome;
  }, [onHome]);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      onHomeRef.current();
    }

    document.addEventListener("keydown", handleEscapeKey, true);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey, true);
    };
  }, []);

  function goToSlide(index) {
    swiperRef.current?.slideTo(index);
  }

  return (
    <div className="reveal-detail">
      <Swiper
        className="project-swiper"
        keyboard={{ enabled: true }}
        modules={[Keyboard, Navigation]}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
      >
        {Array.from({ length: project.slideCount }, (_, index) => (
          <SwiperSlide className="reveal-step" key={slides[index].id}>
            <ArticlePanel>
              {({ openImage }) => (
                <ProjectArticle
                  goToSlide={goToSlide}
                  openImage={openImage}
                  slideCount={project.slideCount}
                  slideIndex={index}
                />
              )}
            </ArticlePanel>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
