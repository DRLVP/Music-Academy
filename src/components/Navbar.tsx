"use client" // for use react hooks
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col gap-4">
            <HoveredLink href="/courses">
              All courses
            </HoveredLink>
            <HoveredLink href="/courses">
              Basic music theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced music compositions
            </HoveredLink>
            <HoveredLink href="/courses">
              advanced songwriting
            </HoveredLink>
            <HoveredLink href="/courses">
              complete music production
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
            <MenuItem  setActive={setActive} active={active} item="Contact us">
             
            </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar