"use client";

import { useCallback, useEffect, useState } from "react";

function readNavigationState() {
  if (typeof window === "undefined") {
    return { canBack: false, canForward: false };
  }

  if (window.navigation?.canGoBack !== undefined) {
    return {
      canBack: window.navigation.canGoBack,
      canForward: window.navigation.canGoForward,
    };
  }

  return {
    canBack: window.history.length > 1,
    canForward: false,
  };
}

export function useHistoryNavigation() {
  const [state, setState] = useState({ canBack: false, canForward: false });

  const refresh = useCallback(() => {
    setState(readNavigationState());
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener("popstate", refresh);
    return () => window.removeEventListener("popstate", refresh);
  }, [refresh]);

  return {
    canBack: state.canBack,
    canForward: state.canForward,
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    reload: () => window.location.reload(),
    refresh,
  };
}
