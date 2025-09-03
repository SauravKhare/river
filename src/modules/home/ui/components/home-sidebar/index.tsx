import { Sidebar, SidebarGroupContent } from "@/components/ui/sidebar";
import { HomeSidebarMainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import { HomeSidebarPersonalSection } from "./personal-section";

export function HomeSidebar() {
  return (
    <Sidebar className="pt-16 z-40 border-none">
      <SidebarGroupContent className="bg-background">
        <HomeSidebarMainSection />
        <Separator />
        <HomeSidebarPersonalSection />
      </SidebarGroupContent>
    </Sidebar>
  );
}