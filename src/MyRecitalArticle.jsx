import {
  Anchor,
  Box,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

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

const videos = {
  gameplay: {
    src: "/article1/my-recital-gameplayvideo.mp4",
    poster: images.gameplay.src,
    alt: "My Recital gameplay video",
  },
};

const projectContent = {
  intro: {
    title: "My Recital",
    body: (
      <>
        AI와 광선추적으로, 소리와 빛을 표현한, <strong>리듬 게임</strong>
        입니다.
      </>
    ),
  },
  info: {
    title: "Project Info",
  },
  flow: {
    title: "Game Flow",
    lead: "My Recital은 로비, 선곡, 플레이 순으로 진행됩니다.",
  },
  settings: {
    title: "Settings",
    body: "언어, 해상도, HDR, 볼륨, 판정 등의 설정이 가능한 화면입니다.",
  },
  implementation: {
    title: "Implementation",
    lead: "구현 사항은 크게 게임 클라이언트 구현과 채보 제작 자동화, 두 가지로 정리할 수 있습니다.",
  },
  clientImplementation: {
    title: "게임 클라이언트 구현 사항",
    items: [
      {
        label: "입력",
        body: "정확한 입력을 얻기 위한 Win32 GetAsyncKeyState 기반 커스텀 raw input polling 구현",
      },
      {
        label: "판정",
        body: "정확한 판정을 위해 오디오 엔진의 Quartz Clock 기준 노트 배치 및 판정",
      },
      {
        label: "그래픽",
        body: "Lumen Reflection 및 HDR을 활용하여 디자인",
      },
      {
        label: "UI",
        body: "Slate UI 기반 C++ 구현",
      },
      {
        label: "국제화",
        body: "Unreal Localization 시스템을 사용한 다국어 지원",
      },
      {
        label: "배포",
        body: "Windows 대상, STOVE Indie 배포(예정)",
      },
    ],
  },
  chartAutomation: {
    title: "게임 데이터(채보) 제작 자동화 구현 사항",
    sections: [
      {
        title: "모델 학습",
        groups: [
          {
            title: "전처리",
            items: [
              "음원을 AMT 모델로 디지털 악보로 전사",
              "Onset / High Pitch 기준으로 정렬",
            ],
          },
          {
            title: "인코딩(입력)",
            items: ["전사된 음원을 시간 순서 토큰으로 변환"],
          },
          {
            title: "인코딩(출력)",
            items: ["기존 채보를 시간별 노트 이벤트 토큰으로 변환"],
          },
          {
            title: "모델",
            items: [
              "Encoder-only Transformer 사용",
              "attention으로 앞뒤 음악 흐름과 채보 패턴 학습",
            ],
          },
          {
            title: "학습",
            items: [
              "입력: 전사 음원 토큰",
              "정답: 사람이 만든 기존 채보 토큰",
              "목표: 각 시간 위치의 채보 토큰 예측",
            ],
          },
        ],
      },
      {
        title: "자동화 실행 흐름",
        groups: [
          {
            title: "전처리",
            items: [
              "음원을 AMT 모델로 디지털 악보로 전사",
              "Onset / High Pitch 기준 정렬",
            ],
          },
          {
            title: "생성",
            items: [
              "전사 토큰을 모델에 입력",
              "모델이 시간별 채보 토큰 예측",
            ],
          },
          {
            title: "후처리",
            items: ["인간 채보 디자이너가 검수"],
          },
        ],
      },
    ],
  },
  result: {
    title: "Review",
    points: [
      {
        label: "역할",
        body: "팀장으로서 기능 구현을 넘어 방향성 설정, 일정 관리, 역할 분배, 팀원 간 커뮤니케이션 조율까지 맡았습니다.",
      },
      {
        label: "갈등",
        body: "팀원 간 음악적 직관에 따른 방향성 차이를 좁히지 못해 결국 두 의견을 모두 구현했고, 그만큼 개발 기간이 늘어났습니다.",
      },
      {
        label: "해결",
        body: "음악적 취향처럼 애초에 직관 외에 다른 근거가 있을 수 없는 영역에서는, '누구 의견이 더 맞는가'를 가리려는 시도 자체가 답이 될 수 없다는 것을 배웠습니다. 그런 상황에서는 해당 분야에 더 전문적인 직관을 가진 사람에게 결정을 맡기고, 그마저 가리기 어렵다면 구현 비용이 더 적은 쪽을 선택하는 식으로 미리 기준을 세워뒀어야 했다는 것을 깨달았습니다.",
      },
    ],
    thanks: "감사합니다.",
  },
};

const coreFlow = [
  {
    href: "#/3",
    id: "lobby",
    index: 0,
    title: "Lobby",
    body: "게임 실행시 마주보게 되는 화면입니다.",
    image: images.lobby,
  },
  {
    href: "#/4",
    id: "song-select",
    index: 1,
    title: "Song Select",
    body: "플레이할 곡과 난이도를 고르는 화면입니다.",
    image: images.songSelect,
  },
  {
    href: "#/5",
    id: "gameplay",
    index: 2,
    title: "Gameplay",
    body: "판정, 콤보, 점수 등이 한 번에 보이는 플레이 화면입니다.",
    image: images.gameplay,
  },
];

const extraFlow = {
  href: "#/6",
  id: "settings",
  index: "Ex",
  title: projectContent.settings.title,
  body: projectContent.settings.body,
  image: images.settings,
};

const flowStages = [...coreFlow, extraFlow];

const implementationTopics = [
  {
    href: "#/8",
    id: "client-implementation",
    index: 0,
    title: projectContent.clientImplementation.title,
  },
  {
    href: "#/9",
    id: "chart-automation",
    index: 1,
    title: projectContent.chartAutomation.title,
  },
];

const projectMeta = [
  {
    label: "주제",
    value: "리듬 게임",
  },
  {
    label: "기간",
    value: "2026.03 - 2026.05",
  },
  {
    label: "프로젝트 인원",
    value: "4 인",
  },
  {
    label: "역할",
    value: "팀장, 게임 클라이언트 전체 구현",
  },
  {
    label: "기술스택",
    value: "Unreal Engine, Pytorch",
  },
  {
    label: "성과",
    value: "특화프로젝트 우수상 수상 (삼성청년SW·AI아카데미, 삼성전자주식회사)",
  },
];

export const myRecitalSlides = [
  {
    id: "intro",
    render: () => (
      <Stack gap={16} h="100%" style={{ overflow: "hidden" }}>
        <Title order={2} mt={0}>{projectContent.intro.title}</Title>

        <div className="presentation-hero__image">
          <video
            aria-label={videos.gameplay.alt}
            autoPlay
            controls
            loop
            muted
            playsInline
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
            poster={videos.gameplay.poster}
            preload="metadata"
            src={videos.gameplay.src}
          />
        </div>

        <Text>{projectContent.intro.body}</Text>
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
    id: "flow-overview",
    transition: "convex-in slide-out",
    render: () => (
      <Stack gap={16} h="100%">
        <Title order={2} mt={0}>{projectContent.flow.title}</Title>

        <Text maw={480} size="lg">
          {projectContent.flow.lead}
        </Text>

        <Stack gap={0} mt={6}>
          {coreFlow.map((item) => (
            <FlowIntroStep item={item} key={item.id} />
          ))}

          <FlowIntroStep item={extraFlow} />
        </Stack>
      </Stack>
    ),
  },
  {
    id: "flow-lobby",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[0]} openImage={openImage} />
    ),
  },
  {
    id: "flow-song-select",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[1]} openImage={openImage} />
    ),
  },
  {
    id: "flow-gameplay",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[2]} openImage={openImage} />
    ),
  },
  {
    id: "settings",
    transition: "slide-in convex-out",
    render: ({ openImage }) => (
      <FlowStage step={extraFlow} openImage={openImage} />
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

        <Stack gap={0} mt={6}>
          {implementationTopics.map((item) => (
            <FlowIntroStep item={item} key={item.id} />
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "client-implementation",
    transition: "slide",
    render: () => (
      <ClientImplementationSlide />
    ),
  },
  {
    id: "chart-automation",
    transition: "slide-in convex-out",
    render: () => (
      <ChartAutomationSlide />
    ),
  },
  {
    id: "result",
    render: () => (
      <ReviewSlide />
    ),
  },
];

export default function MyRecitalArticle({ openImage, slideIndex }) {
  const slide = myRecitalSlides[slideIndex];

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

function FlowStage({ step, openImage }) {
  const stageTitle =
    step.index === "Ex"
      ? `${projectContent.flow.title} - ${step.index}`
      : projectContent.flow.title;

  return (
    <Stack gap={16} h="100%">
      <Title order={2} mt={0}>{stageTitle}</Title>

      <SimpleGrid cols={4} spacing={8}>
        {flowStages.map((item) => (
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

function ClientImplementationSlide() {
  return (
    <Stack gap={18} h="100%">
      <Title order={2} mt={0}>{projectContent.clientImplementation.title}</Title>

      <Stack gap={0}>
        {projectContent.clientImplementation.items.map((item) => (
          <Box
            key={item.label}
            py={9}
            style={{
              borderTop: "1px solid var(--mantine-color-default-border)",
            }}
          >
            <Group align="baseline" gap={16} wrap="nowrap">
              <Text c="dimmed" fw={700} size="sm" w={72}>
                {item.label}
              </Text>
              <Text size="sm">{item.body}</Text>
            </Group>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

function ChartAutomationSlide() {
  return (
    <Stack gap={18} h="100%">
      <Title order={2} mt={0}>{projectContent.chartAutomation.title}</Title>

      <SimpleGrid cols={2} spacing={18} style={{ minHeight: 0 }}>
        {projectContent.chartAutomation.sections.map((section) => (
          <Box key={section.title} style={{ minWidth: 0 }}>
            <Text fw={800}>{section.title}</Text>

            <Stack gap={6} mt={8}>
              {section.groups.map((group) => (
                <Box
                  key={group.title}
                  pt={6}
                  style={{
                    borderTop: "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  <Text c="dimmed" fw={700} size="xs">
                    {group.title}
                  </Text>
                  <Box component="ul" fz={12} lh={1.35} m={0} pl={16}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function formatFlowIndex(item) {
  return typeof item.index === "number"
    ? String(item.index + 1).padStart(2, "0")
    : item.index;
}

