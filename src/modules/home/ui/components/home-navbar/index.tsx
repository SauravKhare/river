import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { HomeNavbarSearchInput } from "./home-navbar-search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center p-4 gap-1">
              <Image src="/river_logo_small_transparent.png" width={35} height={35} alt="River logo" />
              <p className="font-inter font-semibold tracking-tight text-3xl">River</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 justify-center max-w-[700px] mx-auto">
          <HomeNavbarSearchInput />
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}