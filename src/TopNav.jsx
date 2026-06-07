import { Group, ActionIcon } from "@mantine/core";
import { IconArrowLeft, IconHome } from "@tabler/icons-react";

export default function TopNav() {
  function handleBack() {
    window.dispatchEvent(new CustomEvent("blog:back"));
  }

  function handleHome() {
    window.location.assign(new URL("/", window.location.origin));
  }

  return (
    <Group className="top-nav" gap="xs">
      <ActionIcon aria-label="Back" size="xl" variant="light" onClick={handleBack}>
        <IconArrowLeft size={32} />
      </ActionIcon>
      <ActionIcon aria-label="Home" size="xl" variant="light" onClick={handleHome}>
        <IconHome size={32} />
      </ActionIcon>
    </Group>
  );
}
