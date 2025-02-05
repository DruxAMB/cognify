"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import DesktopSidebar from "@/components/Sidebar";
import BreadcrumHeader from "@/components/BreadcrumHeader";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <QueryClientProvider client={queryClient}>
        <DesktopSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
          <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
            <BreadcrumHeader />
            <div className="gap-2 flex items-center">
              <ModeToggle />
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <Separator />
          <div className="overflow-auto">
            <div className="flex-1 container py-4 text-accent-foreground">
              {children}
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default layout;
