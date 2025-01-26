import React from "react";
import useTheme from "next-theme";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from 'lucide-react'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant={"outline"}
      className="p-6 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeSwitch;
