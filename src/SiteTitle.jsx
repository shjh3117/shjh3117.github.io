import { Title } from "@mantine/core";

export default function SiteTitle({ hidden }) {
  return (
    <div className={`site-title${hidden ? " site-title--hidden" : ""}`}>
      <Title order={2}>
        shjh3117&apos;s
        <br />
        tech blog
      </Title>
    </div>
  );
}
