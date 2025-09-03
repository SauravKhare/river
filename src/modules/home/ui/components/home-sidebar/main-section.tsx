"use client";

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Flame, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon
  },
  {
    title: "Subscriptions",
    url: "/stream/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/stream/trending",
    icon: Flame
  },
]

export function HomeSidebarMainSection() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {
            items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} asChild isActive={false} onClick={() => { }}>
                  <Link href={item.url} className="flex items-center gap-4">
                    <item.icon />
                    <span className="font-inter text-sm">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          }
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}