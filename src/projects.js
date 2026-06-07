import MyRecitalArticle, { myRecitalSlides } from "./MyRecitalArticle.jsx";

export const projects = [
  {
    id: "my-recital",
    title: "My Recital",
    subtitle: "AI 리듬게임 프로젝트",
    badge: "Unreal",
    thumbnail: {
      src: "/article1/my-recital-gameplay.png",
      alt: "My Recital gameplay screen",
    },
    Article: MyRecitalArticle,
    slideCount: myRecitalSlides.length,
    slides: myRecitalSlides,
  },
];
