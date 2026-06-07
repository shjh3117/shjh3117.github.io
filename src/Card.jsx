import {
  Badge,
  Card as MantineCard,
  Group,
  Image,
  Text,
} from "@mantine/core";

export default function Card({ badge, body, thumbnail, title, onOpen }) {
  const cardImage = thumbnail ?? {
    src: "/article1/my-recital-lobby.png",
    alt: "Project thumbnail",
  };

  function handleOpen(event) {
    event.preventDefault();
    event.stopPropagation();
    onOpen();
  }

  return (
    <MantineCard
      className="project-card"
      radius="md"
      withBorder
      onClick={handleOpen}
    >
      <MantineCard.Section>
        <Image
          className="project-card__image"
          src={cardImage.src}
          alt={cardImage.alt}
        />
      </MantineCard.Section>

      <Group justify="space-between" gap="xs" mt="md" wrap="nowrap">
        <Text fw={700} size="lg" lineClamp={1}>
          {title}
        </Text>
        <Badge variant="light">{badge}</Badge>
      </Group>

      <Text c="dimmed" size="sm" lineClamp={1} mt={4}>
        {body}
      </Text>
    </MantineCard>
  );
}
