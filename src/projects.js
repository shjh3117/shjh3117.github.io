import CelLitArticle, { cellitSlides } from "./CelLitArticle.jsx";
import MyRecitalArticle, { myRecitalSlides } from "./MyRecitalArticle.jsx";
import ReciCommonUIArticle, { reciCommonUISlides } from "./ReciCommonUIArticle.jsx";

export const projects = [
  {
    id: "my-recital",
    path: "/article1",
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
    path: "/article2",
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
  {
    id: "reci-common-ui",
    path: "/article3",
    title: "Reci Common UI",
    subtitle: "CommonUI 기반 게임 메뉴 UI 플러그인",
    badge: "Unreal",
    thumbnail: {
      src: "/article3/reci-demo.png",
      alt: "Reci Common UI demo",
    },
    Article: ReciCommonUIArticle,
    slideCount: reciCommonUISlides.length,
    slides: reciCommonUISlides,
  },
];
