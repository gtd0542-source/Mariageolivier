"use client";

import { useEffect, useState } from "react";

/** Returns true only after client-side mount. Used to defer rendering of
 * client-only visuals (e.g. randomized animations) until after hydration,
 * preventing SSR/CSR markup mismatches. */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: flips once after hydration, not a cascading update.
    setMounted(true);
  }, []);
  return mounted;
}
