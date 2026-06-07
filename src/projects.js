import CelLitArticle, { cellitSlides } from "./CelLitArticle.jsx";
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
  {
    id: "cel-lit",
    title: "CelLit",
    subtitle: "Unreal Engine NPR 캐릭터 렌더링 플러그인",
    badge: "Unreal",
    thumbnail: {
      type: "video",
      src: "/article2/CelLit-PV.mov",
      poster: "/article2/CelLit-Light.png",
      alt: "UE_CelLit preview video",
    },
    Article: CelLitArticle,
    slideCount: cellitSlides.length,
    slides: cellitSlides,
  },
];
