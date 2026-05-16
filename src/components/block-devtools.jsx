"use client";

import { useEffect } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import DisableDevtool from "disable-devtool";

const shouldBlock =
  process.env.NODE_ENV === "production" ||
  process.env.NEXT_PUBLIC_BLOCK_DEVTOOLS === "true";

export default function BlockDevTools() {
  useEffect(() => {
    if (!shouldBlock) return;

    disableReactDevTools();

    DisableDevtool({
      disableMenu: true,
      clearLog: true,
    });
  }, []);

  return null;
}
