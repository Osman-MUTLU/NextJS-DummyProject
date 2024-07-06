"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { Navbar } from "./navbar";
import Image from "next/image";
import CardWrapper from "./components/card-wrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <div className="h-[100vh] overflow-hidden">
        <Navbar title="Dummy Project" />
        <div className="flex h-[90vh]">
          <Sidebar />
          <main
            className={cn(
              "w-full bg-transparent transition-[margin-left] ease-in-out duration-300 px-6"
            )}
          >
            <CardWrapper variant="glass">{children}</CardWrapper>
          </main>
        </div>
        {/* <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer> */}
      </div>
    </>
  );
}
