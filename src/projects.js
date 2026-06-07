import MyRecitalArticle, { myRecitalSlides } from "./MyRecitalArticle.jsx";

export const projects = [
  {
    id: "my-recital",
    title: "My Recital",
    subtitle: "AI 리듬게임 프로젝트",
    badge: "Unreal",
    thumbnail: {
      type: "video",
      src: "/article1/my-recital-gameplayvideo.mp4",
      poster: "/article1/my-recital-gameplay.png",
      alt: "My Recital gameplay video",
    },
    Article: MyRecitalArticle,
    slideCount: myRecitalSlides.length,
    slides: myRecitalSlides,
  },
];
