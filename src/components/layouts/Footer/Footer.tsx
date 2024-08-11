"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/image/logo2.png";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 text-center">
      <div className="bg-[#439F90] relative py-24 flex justify-center">
        <div className="absolute inset-x-0 top-[-50%] mx-auto w-full max-w-4xl">
          <div className="bg-[#EEF7FF] relative text-center p-10 rounded-lg shadow-lg">
            <span className="absolute -top-10 z-10 right-4 ">
              <Icon name="pick" />
            </span>
            <p className="text-gray-800 text-lg font-medium leading-relaxed mt-10">
              Bersama-Sama, Kita Dapat Mewujudkan Visi Kesehatan Yang Inklusif
              Dan Berkelanjutan Untuk Seluruh Rakyat Indonesia. Mari Kita
              Melangkah Menuju Masa Depan Yang Lebih Sehat Dan Sejahtera,
              Sejalan Dengan Semangat Kepemimpinan Presiden Prabowo: Bersama
              Indonesia Maju Menuju Indonesia Emas 2045.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center">
        <Image
          src={Logo}
          alt="dr.Ponco Logo"
          className="h-auto mb-4"
          style={{ objectFit: "cover" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <Link
            href="mailto:poncoworkspace@gmail.com"
            className="flex flex-col items-center space-y-2 hover:text-[#439F90]"
          >
            <Icon name="mail" />
            <span className="text-primary">poncoworkspace@gmail.com</span>
          </Link>
          <Link
            href="https://instagram.com/dr.ponco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:text-[#439F90]"
          >
            <Icon name="instagram" />
            <span className="text-primary">@dr.ponco</span>
          </Link>
          <Link
            href="https://www.tiktok.com/@dr.ponco?_t=8okCZGdlWzK&_r=1"
            className="flex flex-col items-center space-y-2 hover:text-[#439F90]"
          >
            <Icon name="tiktok" />
            <span className="text-primary">@dr.ponco</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
