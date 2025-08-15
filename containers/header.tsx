"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Home,
  HomeIcon,
  House,
  Link,
  LucideHome,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@/hooks/theme";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center container mx-auto max-w-screen-lg">
      <div className="flex gap-2 items-center">
        <Avatar className="size-13 border border-gray-800">
          <AvatarImage src="/images/logo.jpg" />
        </Avatar>
        <div className="flex flex-col">
          <p className="font-bold">حمید شاهسونی</p>
          <p className="text-sm font-medium text-muted-foreground">
            پژوهشگر روانکاوی لکانی
          </p>
        </div>
      </div>
      <div className="gap-4 flex items-center">
        <Button
          size="icon"
          className="size-12"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="size-6" />
          ) : (
            <Moon className="size-6" />
          )}
        </Button>
        {pathname !== "/" && (
          <Button
            onClick={() => router.push("/")}
            className="size-12"
            size="icon"
          >
            <Home className="size-6" />
          </Button>
        )}
      </div>
    </div>
  );
};
