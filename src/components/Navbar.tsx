"use client";

import React, { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { Lilita_One } from "next/font/google";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useClerk, UserButton } from "@clerk/nextjs"; 

const lilitaFont = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false); 
  const { user } = useClerk();

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isMounted) {
    return null; 
  }

  return (
    <nav className="w-full py-8 px-3 shadow-lg relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <Link
          href={"/"}
          className={`${lilitaFont.className} text-4xl font-bold tracking-tight`}
        >
          Blog <span className="text-indigo-600">Nook</span>
        </Link>

        <ul className="hidden md:flex space-x-4">
          <li className="text-lg font-semibold hover:text-indigo-700 transition-colors duration-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-lg font-semibold hover:text-indigo-700 transition-colors duration-300">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-lg font-semibold hover:text-indigo-700 transition-colors duration-300">
            <Link href={"/#blog"}>Blogs</Link>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <ThemeSwitch />
          {user ? (
            <div className="gap-3 items-center">
              <UserButton />
            </div>
          ) : (
            <Button
              onClick={() => (window.location.href = "/sign-in")}
              className="p-6 bg-indigo-600 hover:bg-indigo-700 text-base dark:text-white"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-white/100 dark:bg-slate-950 shadow-lg px-5 py-3 z-20`}
      >
        <ul className="flex flex-col space-y-4">
          <li className="text-lg font-semibold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-lg font-semibold">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-lg font-semibold">
            <Link href={"/#blog"}>Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
