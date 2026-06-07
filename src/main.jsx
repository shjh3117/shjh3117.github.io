import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import SiteTitle from "./SiteTitle.jsx";
import TopNav from "./TopNav.jsx";
import "@mantine/core/styles.css";
import "./style.css";

function Root() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <MantineProvider defaultColorScheme="auto">
      <TopNav />
      <SiteTitle hidden={isDetailOpen} />
      <App onDetailOpenChange={setIsDetailOpen} />
    </MantineProvider>
  );
}

// React 앱의 시작점입니다.
createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
