import {
  Anchor,
  Badge,
  Box,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const repoUrl = "https://github.com/shjh3117/ReciCommonUI";
const releaseLabel = "v0.1.0 Beta";

const images = {
  demo: {
    src: "/article3/reci-demo.png",
    alt: "Reci Common UI demo, Lists page",
  },
  touch: {
    src: "/article3/reci-touch.png",
    alt: "A list after a tap on + of Item 3",
  },
  keyboard: {
    src: "/article3/reci-keyboard.png",
    alt: "A list with keyboard key hints",
  },
  gamepad: {
    src: "/article3/reci-gamepad.png",
    alt: "A list with gamepad key hints",
  },
  composer: {
    src: "/article3/reci-composer.png",
    alt: "Composer graph that adds the input mapping and pushes the first Screen",
  },
};

const projectContent = {
  intro: {
    title: "Reci Common UI",
    body: (
      <>
        CommonUI를 기반으로, 게임 메뉴가{" "}
        <strong>키보드, 게임패드, 마우스, 터치에서 같게 동작하도록</strong> 돕는 Unreal
        Engine 플러그인입니다.
      </>
    ),
  },
  info: {
    title: "Project Info",
  },
  devOverview: {
    title: "프로젝트 주요 개발 사항",
    lead: "CommonUI가 이미 하는 일은 그대로 맡기고, CommonUI만으로는 채우기 어려운 부분을 플러그인으로 더했습니다.",
  },
  implementation: {
    title: "Implementation",
    lead: "구현 사항은 persistent list와 입력 layer, 두 가지로 정리할 수 있습니다.",
    commonTitle: "CommonUI에 맡긴 것",
    reciTitle: "Reci가 더한 것",
  },
  result: {
    title: "회고",
    points: [
      {
        label: "역할",
        body: "개인 개발로 진행하며, 설계부터 C++ 구현, 데모, 문서까지 전 과정을 담당했습니다.",
      },
      {
        label: "성과",
        body: "데모 프로젝트, 단계별 가이드와 함께 GitHub에 v0.1.0 Beta로 공개했습니다.",
      },
      {
        label: "계획",
        body: "Known deviations로 남긴 focus 처리의 제약을 해결하고, 피드백을 반영해 개선해 나가겠습니다.",
      },
    ],
    thanks: "감사합니다.",
  },
};

const commonUIParts = [
  "화면 activation과 Stack",
  "Back과 modal",
  "버튼 action routing",
  "입력 장치 감지",
  "Style asset",
];

const reciParts = [
  "Persistent entry list",
  "hover, focus, selection 분리",
  "Enhanced Input 기반 navigation",
  "장치별 key hint",
  "frame rate와 무관한 motion",
];

const projectMeta = [
  {
    label: "주제",
    value: "CommonUI 기반 게임 메뉴 UI 플러그인",
  },
  {
    label: "인원",
    value: "개인 개발",
  },
  {
    label: "역할",
    value: "설계, C++ 구현, 데모, 문서 전체",
  },
  {
    label: "기술스택",
    value: "Unreal Engine 5.8, C++, CommonUI, Enhanced Input, UMG, Slate",
  },
];

const coreFlow = [
  {
    href: "#/3",
    id: "feature-unified-input",
    index: 0,
    title: "입력 통합",
    body: "키보드, 게임패드, 마우스, 터치가 같은 hover, focus, selection, confirm 규칙으로 동작합니다. 그림은 터치로 Item 3의 +를 누른 결과로, 값이 바뀌고 focus도 그 entry로 옮겨졌습니다.",
    image: images.touch,
  },
  {
    href: "#/4",
    id: "feature-list-entries",
    index: 1,
    title: "Focusable List Entries",
    body: "Reci List는 item마다 살아 있는 widget을 두어, entry 안의 −/+ 같은 control을 그대로 쓸 수 있고 list를 다시 채워도 focus를 잃지 않습니다.",
    image: images.keyboard,
  },
  {
    href: "#/5",
    id: "feature-key-hints",
    index: 2,
    title: "Key Hints",
    body: "Key hint는 Enhanced Input의 현재 binding에서 지금 쓰는 장치의 key를 보여 줍니다. 그림은 게임패드로 조작한 화면이고, 터치에서는 hint가 숨습니다.",
    image: images.gamepad,
  },
  {
    href: "#/6",
    id: "feature-structure",
    index: 3,
    title: "Composer → Screen",
    body: "map마다 Composer 하나가 UI input mapping과 Stack을 맡고, Screen은 자기 화면의 표시, 입력, 초기 focus만 맡습니다. 참조는 아래로만 향하고, 위로는 dispatcher로 요청합니다.",
    image: images.composer,
  },
];

const implementationTopics = [
  {
    href: "#/8",
    id: "persistent-list",
    index: 0,
    title: "Persistent List",
  },
  {
    href: "#/9",
    id: "input-layer",
    index: 1,
    title: "입력 layer",
  },
];

const persistentListParagraphs = [
  "CommonUI의 list는 ListView 위에 있어 보이는 entry widget만 만들고 재활용합니다. 그래서 focus가 row 단위로만 움직이고, entry 안의 버튼이나 slider, dropdown에는 닿지 않습니다.",
  "Reci List는 item마다 entry widget을 살려 두고, 책임을 나눴습니다. data와 selection은 list source가, 배치와 key 처리는 Reci Vertical, Horizontal, Tile Box 같은 layout host가, scrolling은 Reci Scroll Box가 맡습니다.",
  "focus와 별개로 driven item이라는 cursor를 두어, Set List Items로 list를 다시 만들어도 focus가 같은 item으로 돌아오고, 다른 곳에 갔다가 돌아와도 마지막 entry에 닿습니다. 대신 virtualize하지 않으므로 긴 list에는 ListView를 쓰도록 했습니다.",
];

const inputLayerParagraphs = [
  "입력 preprocessor는 Reci control이나 등록된 screen이 있을 때만 설치되고, 마지막 것이 사라지면 제거됩니다. 그래서 Reci를 쓰지 않는 화면에서는 아무것도 바꾸지 않습니다.",
  "각 입력은 handler 하나로만 갑니다. 열린 popup, screen key, focus된 Reci control, 그다음 CommonUI와 Slate의 기본 경로 순서로 전달하고, 처리한 입력만 consume합니다.",
  "Reci UI Input Data를 쓰면 Slate의 focus navigation이 Enhanced Input mapping을 따르므로, key를 바꾸면 이동 key와 hint가 함께 바뀝니다. stick은 한 번에 한 방향으로만 움직이게 했고, scroll과 carousel motion은 frame rate와 무관하게 같은 거리를 움직입니다.",
];

export const reciCommonUISlides = [
  {
    id: "intro",
    render: ({ openImage }) => (
      <Stack gap={16} h="100%" style={{ overflow: "hidden" }}>
        <Title order={2} mt={0}>{projectContent.intro.title}</Title>

        <button
          aria-label={`${images.demo.alt} 크게 보기`}
          className="presentation-hero__image flow-stage__image"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            openImage(images.demo);
          }}
        >
          <img src={images.demo.src} alt={images.demo.alt} />
        </button>

        <Text>{projectContent.intro.body}</Text>

        <Group gap={8} wrap="nowrap">
          <Anchor href={repoUrl} target="_blank" rel="noreferrer">
            {repoUrl}
          </Anchor>
          <Badge variant="light">{releaseLabel}</Badge>
        </Group>
      </Stack>
    ),
  },
  {
    id: "project-info",
    render: () => (
      <Stack gap={28} h="100%">
        <Title order={2} mt={0}>{projectContent.info.title}</Title>

        <Stack gap={0}>
          {projectMeta.map((item) => (
            <Box
              key={item.label}
              py={18}
              style={{
                borderTop: "1px solid var(--mantine-color-default-border)",
              }}
            >
              <Group align="baseline" gap={24} wrap="nowrap">
                <Text c="dimmed" fw={700} size="sm" w={144}>
                  {item.label}
                </Text>
                <Text fw={700}>{item.value}</Text>
              </Group>
            </Box>
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "dev-overview",
    transition: "convex-in slide-out",
    render: () => (
      <Stack gap={16} h="100%">
        <Title order={2} mt={0}>{projectContent.devOverview.title}</Title>

        <Text maw={480} size="lg">
          {projectContent.devOverview.lead}
        </Text>

        <Stack gap={0} mt={6}>
          {coreFlow.map((item) => (
            <FlowIntroStep item={item} key={item.id} />
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "feature-unified-input",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[0]} openImage={openImage} />
    ),
  },
  {
    id: "feature-list-entries",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[1]} openImage={openImage} />
    ),
  },
  {
    id: "feature-key-hints",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[2]} openImage={openImage} />
    ),
  },
  {
    id: "feature-structure",
    transition: "slide-in convex-out",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[3]} openImage={openImage} />
    ),
  },
  {
    id: "implementation-overview",
    transition: "convex-in slide-out",
    render: () => (
      <Stack gap={16} h="100%">
        <Title order={2} mt={0}>{projectContent.implementation.title}</Title>

        <Text maw={480} size="lg">
          {projectContent.implementation.lead}
        </Text>

        <SimpleGrid cols={2} spacing={24}>
          <FeatureList title={projectContent.implementation.commonTitle} items={commonUIParts} />
          <FeatureList title={projectContent.implementation.reciTitle} items={reciParts} />
        </SimpleGrid>

        <Stack gap={0} mt={6}>
          {implementationTopics.map((item) => (
            <FlowIntroStep item={item} key={item.id} />
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "persistent-list",
    transition: "slide",
    render: () => (
      <ParagraphSlide title={implementationTopics[0].title} paragraphs={persistentListParagraphs} />
    ),
  },
  {
    id: "input-layer",
    transition: "slide-in convex-out",
    render: () => (
      <ParagraphSlide title={implementationTopics[1].title} paragraphs={inputLayerParagraphs} />
    ),
  },
  {
    id: "result",
    render: () => <ReviewSlide />,
  },
];

export default function ReciCommonUIArticle({ openImage, slideIndex }) {
  const slide = reciCommonUISlides[slideIndex];

  return (
    <Paper
      className="presentation-slide"
      p={24}
      pt={32}
      radius="md"
      shadow="xl"
      withBorder
    >
      <Box flex={1} style={{ overflow: "hidden" }}>
        {slide.render({ openImage })}
      </Box>
    </Paper>
  );
}

function FeatureList({ title, items }) {
  return (
    <Stack gap={8}>
      <Text fw={700} c="dimmed" size="sm">{title}</Text>
      <Box component="ul" m={0} pl={20}>
        {items.map((item) => (
          <Text component="li" key={item}>{item}</Text>
        ))}
      </Box>
    </Stack>
  );
}

function FlowIntroStep({ item }) {
  return (
    <Box
      py={16}
      style={{
        borderTop: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Group align="center" gap={24} wrap="nowrap">
        <Text
          c="var(--mantine-primary-color-filled)"
          fw={800}
          fz={17}
          w={48}
        >
          {formatFlowIndex(item)}
        </Text>
        <Anchor className="flow-intro__step-title" href={item.href}>
          {item.title}
        </Anchor>
      </Group>
    </Box>
  );
}

function FlowStage({ step, openImage }) {
  return (
    <Stack gap={16} h="100%">
      <Title order={2} mt={0}>{projectContent.devOverview.title}</Title>

      <SimpleGrid cols={4} spacing={8}>
        {coreFlow.map((item) => (
          <Anchor
            className={`flow-stage__rail-item ${
              item.id === step.id ? "flow-stage__rail-item--active" : ""
            }`}
            data-id={item.id}
            href={item.href}
            key={item.id}
          >
            <span>{formatFlowIndex(item)}</span>
            {item.title}
          </Anchor>
        ))}
      </SimpleGrid>

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

      <Box data-id={step.id} pr={64}>
        <Title order={3} mb={4}>{step.title}</Title>
        <Text>{step.body}</Text>
      </Box>
    </Stack>
  );
}

function ParagraphSlide({ title, paragraphs }) {
  return (
    <Stack gap={14} h="100%">
      <Title order={2} mt={0}>{title}</Title>

      <Stack gap={10} style={{ overflow: "auto" }}>
        {paragraphs.map((paragraph) => (
          <Text key={paragraph} size="sm">
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
}

function ReviewSlide() {
  const review = projectContent.result;

  return (
    <Stack gap={24} h="100%">
      <Title order={2} mt={0}>{review.title}</Title>

      <Stack gap={0}>
        {review.points.map((item) => (
          <Box
            key={item.label}
            py={20}
            style={{
              borderTop: "1px solid var(--mantine-color-default-border)",
            }}
          >
            <Group align="flex-start" gap={20} wrap="nowrap">
              <Text c="dimmed" fw={700} size="md" w={64} style={{ flexShrink: 0 }}>
                {item.label}
              </Text>
              <Text size="md">{item.body}</Text>
            </Group>
          </Box>
        ))}
      </Stack>

      <Text c="dimmed" mt="auto">
        {review.thanks}
      </Text>
    </Stack>
  );
}

function formatFlowIndex(item) {
  return typeof item.index === "number"
    ? String(item.index + 1).padStart(2, "0")
    : item.index;
}
