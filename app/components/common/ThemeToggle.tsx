import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "~/store/theme.store";
import { Button } from "~/components/ui/button";

const ThemeToggle = () => {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </Button>
  );
};

export default ThemeToggle;
