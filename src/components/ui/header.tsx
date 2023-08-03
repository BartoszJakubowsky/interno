"use client";

import { motion as m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome as HomeIcon,
  HiOutlinePhotograph as GalleryIcon,
  HiOutlineMail as ContactIcon,
} from "react-icons/hi";
export default function Header() {
  const linkClassName = "";
  const path = usePathname();

  const links = [
    { href: "/", label: "O nas", icon: <HomeIcon className={linkClassName} /> },
    {
      href: "/galeria",
      label: "Galeria",
      icon: <GalleryIcon className={linkClassName} />,
    },
    {
      href: "/kontakt",
      label: "Kontakt",
      icon: <ContactIcon className={linkClassName} />,
    },
  ];

  return (
    <header className="relative w-full h-14 z-10 pt-2 pb-20 bg-orange-100 dark:bg-slate-700">
      <nav className="flex flex-row gap-2 justify-between relative">
        <span className="border-b border-black absolute w-11/12 -bottom-3 left-1/2 -translate-x-1/2" />
        <h1 className="text-lg font-medium self-center">Interno</h1>
        <ul className="flex gap-2">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <Link href={link.href} className="relative">
                  <div className="flex flex-col items-center">
                    {link.icon}
                    {link.label}
                    {link.href === path && (
                      <m.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[1px] w-full bg-black"
                      />
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
