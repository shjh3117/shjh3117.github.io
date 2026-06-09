import {
  Anchor,
  Badge,
  Box,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";

const repoUrl = "https://github.com/shjh3117/UE_CelLit";
const repoStars = 15;

const images = {
  lights: {
    src: "/article2/CelLit-Light.png",
    alt: "Directional Light, Local Lights and Lumen GI support",
  },
  hairShadow: {
    src: "/article2/CelLit-HairShadow.png",
    alt: "Projected hair cast shadow on the face",
  },
  hairHighlight: {
    src: "/article2/CelLit-HairHighlight.png",
    alt: "Toon-style hair highlight",
  },
  eyeHighlight: {
    src: "/article2/CelLit-EyeHighlight.png",
    alt: "Toon-style eye highlight",
  },
};

const videos = {
  preview: {
    src: "/article2/CelLit-PV.mov",
    poster: images.lights.src,
    alt: "UE_CelLit preview video",
  },
};

const projectContent = {
  intro: {
    title: "CelLit",
    body: (
      <>
        Unreal Engine의 렌더링 파이프라인을 직접 수정하여 구현한,{" "}
        <strong>실시간 애니메이션풍 캐릭터 렌더링</strong> 플러그인입니다.
      </>
    ),
  },
  info: {
    title: "Project Info",
  },
  devOverview: {
    title: "프로젝트 주요 개발 사항",
    lead: "Lumen GI, VSM, PBR 등 Unreal Engine의 기존 렌더링 기능과 함께 동작하는 toon shading을 Deferred Lighting 단계에 직접 통합했습니다.",
  },
  implementation: {
    title: "Implementation",
    lead: "구현 사항은 그림자/하이라이트 제어, 머리카락·눈 표현, 외곽선과 데이터 패킹, 세 가지로 정리할 수 있습니다.",
    supportedTitle: "지원 기능",
    unsupportedTitle: "미지원 기능",
    techStackTitle: "기술 스택",
  },
  result: {
    title: "회고",
    points: [
      {
        label: "역할",
        body: "개인 개발로 진행하며, 렌더링 파이프라인 분석부터 셰이더 구현, 플러그인 제작까지 전 과정을 담당했습니다.",
      },
      {
        label: "성과",
        body: "GitHub에 공개한 뒤 기능 개선과 문서화를 지속했고, 외부 개발자들로부터 15개의 Star를 받았습니다.",
      },
      {
        label: "계획",
        body: "컴퓨터 그래픽스에 대한 이론을 더 공부하면서, 여러 시도를 프로젝트에 더해나가겠습니다.",
      },
    ],
    thanks: "감사합니다.",
  },
};

const supportedFeatures = [
  "Lumen GI",
  "PBR",
  "VSM",
  "Directional Light",
  "Local Lights",
];

const unsupportedFeatures = [
  "Substrate",
  "Path Tracing",
  "Mega Light",
  "Lumen Reflection",
];

const techStack = [
  "Unreal Engine",
  "C++",
  "HLSL",
  "Deferred Rendering",
  "Lumen GI",
  "Virtual Shadow Maps",
  "PBR",
  "Post Process",
  "Sobel Filtering",
  "Octahedral Encoding",
];

const projectMeta = [
  {
    label: "주제",
    value: "Unreal Engine NPR 캐릭터 렌더링 플러그인",
  },
  {
    label: "인원",
    value: "개인 개발",
  },
  {
    label: "역할",
    value: "렌더링 파이프라인 분석 및 셰이더 구현 전체",
  },
  {
    label: "기술스택",
    value: "Unreal Engine, C++, HLSL",
  },
];

const coreFlow = [
  {
    href: "#/3",
    id: "feature-lights",
    index: 0,
    title: "조명 / GI 지원",
    body: "Directional Light와 Local Light 환경, 그리고 Lumen GI와 함께 동작하는 toon shading을 지원합니다.",
    image: images.lights,
  },
  {
    href: "#/4",
    id: "feature-hair-shadow",
    index: 1,
    title: "Projected Hair Shadow",
    body: "라이트 방향에 따라 hair pixel을 screen-space로 projection하여, 얼굴 위에 제어 가능한 hair cast shadow를 생성합니다.",
    image: images.hairShadow,
  },
  {
    href: "#/5",
    id: "feature-hair-highlight",
    index: 2,
    title: "Toon Style Hair Highlight",
    body: "Kajiya-Kay 방식의 hair highlight를 단순화해 계산한 뒤 step 처리하여, toon-style hair highlight로 이산화했습니다.",
    image: images.hairHighlight,
  },
  {
    href: "#/6",
    id: "feature-eye-highlight",
    index: 3,
    title: "Toon Style Eye Highlight",
    body: "VRoid 계열 캐릭터 눈에 맞춰 가상의 eye-sphere normal을 만들고, 이를 기반으로 toon-style eye highlight를 계산합니다.",
    image: images.eyeHighlight,
  },
];

const implementationTopics = [
  {
    href: "#/8",
    id: "shading-control",
    index: 0,
    title: "그림자 / 하이라이트 제어",
  },
  {
    href: "#/9",
    id: "hair-and-eye",
    index: 1,
    title: "머리카락 그림자와 하이라이트",
  },
  {
    href: "#/10",
    id: "outline-and-packing",
    index: 2,
    title: "외곽선과 Custom Data Packing",
  },
];

const shadingControlParagraphs = [
  "NPR 캐릭터 렌더링에서 물리적으로 정확한 그림자는 항상 바람직하지 않습니다. 표면 노멀 기반의 N·L shading조차 의도한 2D 캐릭터 디자인을 방해할 수 있어, SDF face shadow map이나 light map, edited normal 같은 아티스트 제어 데이터로 N·L 응답을 대체하거나 재구성하는 경우가 많습니다.",
  "UE_CelLit은 캐릭터 얼굴에 생기는 불필요한 cast shadow를 줄이기 위해, 별도의 shadow pass를 추가하는 대신 Unreal Engine 내부의 transmission 동작을 이용했습니다. Transmission 관련 shadow 동작은 shadow map에서 처음 가리는 물체까지의 거리를 material opacity로 스케일링하는 방식으로 해석할 수 있는데, 이는 짧은 거리에서 발생하는 self-shadowing을 억제하는 데 효과적입니다.",
  "개념적으로는 shaded point 주변에 가상의 shell을 두는 것과 비슷합니다. 캐릭터 얼굴은 대체로 convex하고 구에 가까운 형태이므로, 이 근사가 stylized facial shading에서 잘 작동합니다. 또한 GBuffer.CustomData.x의 control bit를 통해 normal-based shading 사용 여부와 cast shadow의 toon-style step 처리 여부를 픽셀 단위로 제어할 수 있도록 했습니다.",
];

const hairShadowParagraphs = [
  "얼굴에는 머리카락으로부터 받는 의도적인 cast shadow도 필요합니다. Hair pixel은 GBuffer.CustomData의 bit flag로 표시되며, lighting 계산 중 셰이더는 light vector를 기준으로 screen-space 위치를 projection하고 해당 위치가 hair pixel인지 확인합니다.",
  "Projection된 sample이 hair에 해당하면, 이 값을 Unreal Engine의 기존 shadow term과 결합하여 얼굴 위에 제어된 hair-to-face cast shadow를 생성합니다. 이 과정에서 의도하지 않은 그림자를 줄이기 위한 추가 로직도 함께 적용했습니다.",
];

const highlightParagraphs = [
  "머리카락 highlight는 Kajiya-Kay 방식의 hair highlight를 단순화한 형태로 구현했습니다. Tangent에 해당하는 방향 벡터를 octahedral encoding하여 GBuffer.CustomData.yz에 저장하고, lighting 단계에서 이를 decode하여 anisotropic highlight를 계산한 뒤 step 처리하여 toon-style hair highlight로 이산화했습니다.",
  "주로 쓰이는 VRoid 계열 캐릭터의 눈 mesh는 이상적인 구 형태와 차이가 있어, 기본 specular highlight가 원하는 위치나 형태로 나오지 않는 경우가 있습니다. 이를 해결하기 위해 가상의 eye-sphere normal을 생성하고, 이 normal을 기준으로 eye highlight를 계산하여 원본 mesh normal에 덜 의존하는 toon-style eye highlight를 만들었습니다.",
];

const outlineParagraph =
  "외곽선은 post-process pass에서 depth buffer에 Sobel filtering을 적용해 계산했습니다. GBuffer.CustomData.x의 control bit를 통해 특정 pixel을 outline 계산 대상에 포함할지 선택할 수 있도록 했습니다.";

const customDataPackingParagraph =
  "GBuffer.CustomData.x는 compact control buffer로, GBuffer.CustomData.yz에는 octahedral encoding된 3D vector가 저장됩니다. 이 vector의 의미는 활성화된 control bit에 따라 달라집니다.";

const customDataBits = [
  {
    bit: 0,
    name: "UseLambertShadow",
    description: "normal-based N·L shading 사용 여부를 결정합니다.",
  },
  {
    bit: 1,
    name: "UseDiscreteSurfaceShadow",
    description: "cast shadow를 일정 threshold로 step 처리해 toon-style shadow로 만들지 결정합니다.",
  },
  {
    bit: 2,
    name: "UseEyeHighlight",
    description: "CustomData.yz를 eye 또는 iris center viewport UV로 해석하여 toon eye highlight를 계산합니다.",
  },
  {
    bit: 3,
    name: "UseHairHighlight",
    description: "CustomData.yz를 hair highlight용 tangent-like direction으로 해석합니다.",
  },
  {
    bit: 4,
    name: "UseSubLambertShadow",
    description: "CustomData.yz를 stylized N·L shading용 replacement normal로 해석합니다. Main world normal을 직접 바꾸지 않고 별도 normal로 조명 응답만 제어합니다.",
  },
  {
    bit: 5,
    name: "UseOutline",
    description: "post-process outline pass에서 해당 pixel을 outline 계산 대상으로 포함합니다.",
  },
  {
    bit: 6,
    name: "",
    description: "제거된 기능에서 사용하던 bit입니다.",
  },
  {
    bit: 7,
    name: "IsHair",
    description: "projected hair shadow와 hair 관련 효과를 위해 해당 pixel이 hair인지 표시합니다.",
  },
];

export const cellitSlides = [
  {
    id: "intro",
    render: () => (
      <Stack gap={16} h="100%" style={{ overflow: "hidden" }}>
        <Title order={2} mt={0}>{projectContent.intro.title}</Title>

        <div className="presentation-hero__image">
          <video
            aria-label={videos.preview.alt}
            autoPlay
            controls
            loop
            muted
            playsInline
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
            poster={videos.preview.poster}
            preload="metadata"
            src={videos.preview.src}
          />
        </div>

        <Text>{projectContent.intro.body}</Text>

        <Group gap={8} wrap="nowrap">
          <Anchor href={repoUrl} target="_blank" rel="noreferrer">
            {repoUrl}
          </Anchor>
          <Badge variant="light" color="yellow" leftSection="★">
            {repoStars}
          </Badge>
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
    id: "feature-lights",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[0]} openImage={openImage} />
    ),
  },
  {
    id: "feature-hair-shadow",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[1]} openImage={openImage} />
    ),
  },
  {
    id: "feature-hair-highlight",
    transition: "slide",
    render: ({ openImage }) => (
      <FlowStage step={coreFlow[2]} openImage={openImage} />
    ),
  },
  {
    id: "feature-eye-highlight",
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
          <FeatureList title={projectContent.implementation.supportedTitle} items={supportedFeatures} />
          <FeatureList title={projectContent.implementation.unsupportedTitle} items={unsupportedFeatures} />
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
    id: "shading-control",
    transition: "slide",
    render: () => (
      <Stack gap={14} h="100%">
        <Title order={2} mt={0}>{implementationTopics[0].title}</Title>

        <Stack gap={10} style={{ overflow: "auto" }}>
          {shadingControlParagraphs.map((paragraph) => (
            <Text key={paragraph} size="sm">
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "hair-and-eye",
    transition: "slide",
    render: () => (
      <Stack gap={14} h="100%">
        <Title order={2} mt={0}>{implementationTopics[1].title}</Title>

        <Stack gap={4}>
          <Title order={3} mb={2}>Hair Shadow</Title>
          {hairShadowParagraphs.map((paragraph) => (
            <Text key={paragraph} size="sm">
              {paragraph}
            </Text>
          ))}
        </Stack>

        <Stack gap={4}>
          <Title order={3} mb={2}>Hair / Eye Highlight</Title>
          {highlightParagraphs.map((paragraph) => (
            <Text key={paragraph} size="sm">
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    ),
  },
  {
    id: "outline-and-packing",
    transition: "slide-in convex-out",
    render: () => (
      <Stack gap={12} h="100%">
        <Title order={2} mt={0}>{implementationTopics[2].title}</Title>

        <Stack gap={4}>
          <Title order={3} mb={4}>Outline</Title>
          <Text size="sm">{outlineParagraph}</Text>
        </Stack>

        <Stack gap={4} style={{ minHeight: 0, overflow: "hidden" }}>
          <Title order={3} mb={4}>Custom Data Packing</Title>
          <Text size="sm" mb={6}>{customDataPackingParagraph}</Text>

          <Box style={{ overflow: "auto" }}>
            <Table fz={11} verticalSpacing={4} horizontalSpacing={8}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={36}>Bit</Table.Th>
                  <Table.Th w={160}>Name</Table.Th>
                  <Table.Th>Description</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {customDataBits.map((row) => (
                  <Table.Tr key={row.bit}>
                    <Table.Td>{row.bit}</Table.Td>
                    <Table.Td>
                      <Text fz={11} fw={700} c={row.name ? undefined : "dimmed"}>
                        {row.name || "—"}
                      </Text>
                    </Table.Td>
                    <Table.Td>{row.description}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
        </Stack>
      </Stack>
    ),
  },
  {
    id: "result",
    render: () => <ReviewSlide />,
  },
];

export default function CelLitArticle({ openImage, slideIndex }) {
  const slide = cellitSlides[slideIndex];

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
