import { Badge, Button, Group, Text, Title } from "@mantine/core";

const projectLinks = [
  {
    label: "Store",
    href: "https://example.com/my-recital-store",
  },
  {
    label: "Trailer",
    href: "https://example.com/my-recital-trailer",
  },
];

const images = {
  lobby: {
    src: "/article1/my-recital-lobby.png",
    alt: "My Recital lobby screen",
  },
  gameplay: {
    src: "/article1/my-recital-gameplay.png",
    alt: "My Recital gameplay screen",
  },
  songSelect: {
    src: "/article1/my-recital-songlist.png",
    alt: "My Recital song selection screen",
  },
  settings: {
    src: "/article1/my-recital-setting.png",
    alt: "My Recital settings screen",
  },
};

const coreFlow = [
  {
    href: "#/1",
    id: "lobby",
    index: 0,
    title: "Lobby",
    body: "공연장 분위기와 게임의 첫 인상을 보여주는 진입 화면",
    image: images.lobby,
  },
  {
    href: "#/2",
    id: "song-select",
    index: 1,
    title: "Song Select",
    body: "플레이할 곡과 난이도를 고르고 게임으로 들어가는 화면",
    image: images.songSelect,
  },
  {
    href: "#/3",
    id: "gameplay",
    index: 2,
    title: "Gameplay",
    body: "입력, 판정, 조명 연출이 한 번에 보이는 실제 플레이 화면",
    image: images.gameplay,
  },
];

export const myRecitalSlides = [
  {
    id: "intro",
    label: "Intro",
    render: ({ openImage }) => (
      <div className="presentation-hero">
        <div className="presentation-hero__title">
          <Badge variant="light">Project</Badge>
          <Title order={2}>My Recital</Title>
        </div>

        <button
          aria-label={`${images.gameplay.alt} 크게 보기`}
          className="presentation-hero__image"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            openImage(images.gameplay);
          }}
        >
          <img src={images.gameplay.src} alt={images.gameplay.alt} />
        </button>

        <div className="presentation-hero__content">
          <Text>
            AI 채보와 실시간 조명 연출로 만든 리듬게임 프로젝트
          </Text>
          <Group gap="xs" mt="md">
            <Button component="a" href="#/1">
              Flow 보기
            </Button>
            {projectLinks.map((link) => (
              <Button
                component="a"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
                variant="light"
              >
                {link.label}
              </Button>
            ))}
          </Group>
        </div>
      </div>
    ),
  },
  {
    id: "flow-lobby",
    label: "Lobby",
    transition: "slide",
    variant: "flow",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[0]} openImage={openImage} />
    ),
  },
  {
    id: "flow-song-select",
    label: "Song",
    transition: "slide",
    variant: "flow",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[1]} openImage={openImage} />
    ),
  },
  {
    id: "flow-gameplay",
    label: "Play",
    transition: "slide",
    variant: "flow",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[2]} openImage={openImage} />
    ),
  },
  {
    id: "settings",
    label: "Settings",
    render: ({ openImage }) => (
      <>
        <Title order={3}>Settings</Title>
        <PreviewImage image={images.settings} openImage={openImage} />
        <Text>
          키 설정과 속도 조절처럼 플레이 감각에 직접 영향을 주는 설정 화면입니다.
        </Text>
      </>
    ),
  },
  {
    id: "tech",
    label: "Tech",
    render: () => (
      <>
        <Title order={3}>Technical Core</Title>
        <ul>
          <li>FMOD DSP Clock 기준으로 노트 타이밍과 판정을 맞췄습니다.</li>
          <li>Win32 GetAsyncKeyState 기반 polling으로 입력 타이밍을 직접 다뤘습니다.</li>
          <li>Lumen Reflection과 HDR을 사용해 피아노 공연장 분위기를 만들었습니다.</li>
          <li>AI 채보 제작 파이프라인으로 음원에서 노트 데이터 후보를 생성했습니다.</li>
        </ul>
      </>
    ),
  },
  {
    id: "result",
    label: "Result",
    render: () => (
      <>
        <Title order={3}>Role & Result</Title>
        <Text>
          팀장 및 게임 클라이언트 구현 사항 전반을 담당했습니다.
        </Text>
        <Text>
          프로젝트 결과로 특화프로젝트 우수상을 수상했습니다.
        </Text>
      </>
    ),
  },
];

export default function MyRecitalArticle({
  openImage,
  slideCount,
  slideIndex,
}) {
  const slide = myRecitalSlides[slideIndex];

  return (
    <div
      className={`presentation-slide presentation-slide--${slide.variant ?? "card"}`}
    >
      <div className="presentation-slide__content">
        {slide.render({ openImage })}
      </div>

      <Text className="presentation-slide__index" fw={700}>
        {slideIndex + 1} / {slideCount}
      </Text>
    </div>
  );
}

function FlowStage({ step, openImage }) {
  return (
    <div className="flow-stage">
      <div className="flow-stage__title">
        <Title order={2}>Flow</Title>
      </div>

      <div className="flow-stage__rail">
        {coreFlow.map((item) => (
          <a
            className={`flow-stage__rail-item ${
              item.id === step.id ? "flow-stage__rail-item--active" : ""
            }`}
            data-id={item.id}
            href={item.href}
            key={item.id}
          >
            <span>{String(item.index + 1).padStart(2, "0")}</span>
            {item.title}
          </a>
        ))}
      </div>

      <button
        aria-label={`${step.image.alt} 크게 보기`}
        className="flow-stage__image"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          openImage(step.image);
        }}
      >
        <img src={step.image.src} alt={step.image.alt} />
      </button>

      <div className="flow-stage__caption" data-id={step.id}>
        <Title order={3}>{step.title}</Title>
        <Text>{step.body}</Text>
      </div>
    </div>
  );
}

function PreviewImage({ image, openImage }) {
  function handlePointerDown(event) {
    event.preventDefault();
    event.stopPropagation();
    openImage(image);
  }

  return (
    <button
      aria-label={`${image.alt} 크게 보기`}
      className="presentation-image"
      type="button"
      onClick={handlePointerDown}
    >
      <img src={image.src} alt={image.alt} />
    </button>
  );
}
