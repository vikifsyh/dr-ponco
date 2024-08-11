"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/image/logo.png";
import Icon from "@/components/atoms/Icon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);
  const [currentPostMobile, setCurrentPostMobile] = useState(0);

  const handleScroll = () => {
    setCurrentPos(window.scrollY);
    setCurrentPostMobile(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let path;
  if (typeof window !== "undefined") {
    path = window.location.hash;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full top-0 transition-all duration-300 bg-white`}
    >
      <div className="flex justify-between px-6 md:px-[100px] py-4">
        <div className="flex gap-2 items-center">
          <Image alt="logo" src={Logo} width={48} height={48} />
          <h1 className="text-3xl text-neutral font-bold">dr.Ponco</h1>
        </div>
        <div className="hidden md:flex space-x-6 bg-baseBackground rounded-full items-center p-1">
          <Link href="#tentang">
            <div
              className={`px-4 py-3  rounded-full gap-2  hover:text-primary ${
                currentPos < 750 &&
                (path === "#tentang" ||
                  path === "#tujuan" ||
                  path === "#program")
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              Tentang
            </div>
          </Link>
          <Link href="#tujuan">
            <div
              className={`px-4 py-3  rounded-full gap-2 hover:text-primary ${
                currentPos >= 750 &&
                currentPos < 1500 &&
                (path === "#tujuan" ||
                  path === "#tentang" ||
                  path === "#program")
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              Tujuan
            </div>
          </Link>

          <Link href="#program">
            <div
              className={`px-4 py-3  rounded-full gap-2  hover:text-primary ${
                currentPos >= 2000 &&
                currentPos < 2400 &&
                (path === "#program" ||
                  path === "#tentang" ||
                  path === "#tujuan")
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              Program
            </div>
          </Link>
          <Link href="#target">
            <div
              className={`px-4 py-3  rounded-full gap-2  hover:text-primary ${
                currentPos >= 3000 &&
                currentPos < 4000 &&
                (path === "#program" ||
                  path === "#tentang" ||
                  path === "#tujuan")
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              Target
            </div>
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/ponco-agus-prasojo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full text-lg px-6 items-center py-3 border border-primary text-primary hover:bg-primary hover:text-white"
        >
          LinkedIn
        </Link>
        <button
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <Icon name="hamburger" />
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 right-0 bg-white w-full transform transition-transform duration-300 ease-in-out z-10 md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-neutral">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 bg-white py-4">
          <li>
            <Link
              className="px-4 py-3 text-neutral rounded-full"
              href="#tentang"
              onClick={toggleMobileMenu}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 text-neutral rounded-full"
              href="#tujuan"
              onClick={toggleMobileMenu}
            >
              Tujuan
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 text-neutral rounded-full"
              href="#program"
              onClick={toggleMobileMenu}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-3 text-neutral rounded-full"
              href="#target"
              onClick={toggleMobileMenu}
            >
              Target
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/ponco-agus-prasojo/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full block text-sm w-full p-3 border border-primary text-primary hover:bg-primary hover:text-white"
              onClick={toggleMobileMenu}
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
