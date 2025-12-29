import { Outlet } from "react-router";
import Navbar from "~/components/layout/Navbar";
import { useEffect } from "react";
import { useThemeStore } from "~/store/theme.store";

const AppLayout = () => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
