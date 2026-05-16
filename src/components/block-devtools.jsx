"use client";

import { useEffect, useState } from "react";

export default function DevToolsBlocker({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const threshold = 160;

    const checkDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      setIsOpen(widthDiff > threshold || heightDiff > threshold);
    };

    const disableKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", checkDevTools);
    window.addEventListener("keydown", disableKeys);

    checkDevTools();

    return () => {
      window.removeEventListener("resize", checkDevTools);
      window.removeEventListener("keydown", disableKeys);
    };
  }, []);

  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-[99999]">
        <h1 className="text-4xl font-bold">DevTools Blocked</h1>
        <h2 className="text-lg mt-4 opacity-70">
          Please close Developer Tools to continue
        </h2>
      </div>
    );
  }

  return children ?? null;
}