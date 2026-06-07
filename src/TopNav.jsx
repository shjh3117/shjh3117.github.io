import { Group, ActionIcon } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export default function TopNav({ onHome }) {
  return (
    <Group className="top-nav" gap="xs">
      <ActionIcon aria-label="Home" size="xl" variant="light" onClick={onHome}>
        <IconHome size={32} />
      </ActionIcon>
    </Group>
  );
}
