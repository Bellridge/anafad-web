"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { headerNavItems } from "@/lib/constants";
import Logo from "../shared/Logo";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  sectionId: string;
}

const Header = () => {
  // Ref
  const sideNavRef = useRef<HTMLDivElement>(null);

  // Router
  const pathname = usePathname();

  // sidenav open/close
  const openSideNav = () => {
    if (sideNavRef.current) sideNavRef.current.style.width = "100%";
  };

  const closeSideNav = () => {
    if (sideNavRef.current) sideNavRef.current.style.width = "0%";
  };

  return (
    <header className="flex items-center  bg-anafad-primary-blue shadow-sm px-8 md:px-16 h-[70px] md:h-24 gap-8 sticky top-0 z-50 font-sans">
      <Logo width={100} height={100} />

      <nav className="hidden md:flex items-center gap-10 ml-auto">
        {headerNavItems.map((item: any) => {
          const isActive = pathname === item.route;
          return (
            <Link
              key={item.sectionId}
              href={`${item.route}`}
              className={`flex flex-col items-center justify-center text-md font-medium transition-all text-white ${
                isActive && "underline"
              }`}
            >
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={openSideNav}
        className="ml-auto md:hidden text-white focus:outline-none"
      >
        <Menu size={16} />
      </button>

      <div
        ref={sideNavRef}
        className="fixed top-0 right-0 h-screen w-0 overflow-hidden bg-white z-50 transition-all duration-300"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeSideNav}
            className="text-red-600 text-2xl font-bold"
          >
            <X size={16} className="text-anafad-primary-blue" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 mt-10">
          {headerNavItems.map((item) => (
            <Link
              key={item.sectionId}
              href={`${item.route}`}
              onClick={() => {
                closeSideNav();
              }}
              className={`text-lg `}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
