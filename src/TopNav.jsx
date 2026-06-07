import { Group, ActionIcon } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export default function TopNav() {
  function handleHome() {
    window.location.assign(new URL("/", window.location.origin));
  }

  return (
    <Group className="top-nav" gap="xs">
      <ActionIcon aria-label="Home" size="xl" variant="light" onClick={handleHome}>
        <IconHome size={32} />
      </ActionIcon>
    </Group>
  );
}
