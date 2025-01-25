"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export default function Header() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  return (
    <header className="sticky top-0 flex items-center justify-between px-4 py-6 text-lg font-semibold backdrop-blur-sm md:p-6 md:text-2xl">
      <Link href="/" className="border-b border-transparent pb-1">
        Sameer Jadav
      </Link>
      <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                "border-b border-transparent pb-1 capitalize transition-all",
                {
                  "text-myGray hover:border-white hover:text-white": !isActive,
                  "border-white": isActive,
                }
              )}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
