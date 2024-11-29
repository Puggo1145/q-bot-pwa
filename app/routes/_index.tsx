import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/common/app-sidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "Q bot Dashboard" },
    { name: "description", content: "Q bot Dashboard" },
  ];
};

export default function Index() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
