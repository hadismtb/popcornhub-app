import { create } from "zustand/react";
import { persist } from "zustand/middleware/persist";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () => {
        const next = get().theme === "light" ? "dark" : "light";
        set({ theme: next });
        document.documentElement.classList.toggle("dark", next === "dark");
      },
    }),
    {
      name: "theme-storage",
    },
  ),
);
