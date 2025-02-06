"use client";

import React, { ReactNode } from "react";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Separator } from "@/components/ui/separator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full h-screen">
        {children}
        <Separator />
        <footer className="flex items-center justify-between p-2">
          <Logo iconSize={16} fontSize="text-xl" />
          <ModeToggle />
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default layout;
