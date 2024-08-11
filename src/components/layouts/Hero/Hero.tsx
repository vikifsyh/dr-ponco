import Image from "next/image";
import React from "react";
import Pattern from "../../../../public/image/pattern.png";
import Ponco from "../../../../public/image/Group 9455.png";
import Icon from "@/components/atoms/Icon";
import Union from "../../../../public/image/union.png";

export default function Hero() {
  return (
    <div className="my-5 md:my-10 mx-5 md:mx-[90px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
        {/* <div className="relative flex justify-center md:justify-start w-full md:w-auto">
          <Image alt="Pattern" src={Pattern} className="w-full md:w-auto" />
          <div className="absolute top-20 md:top-28 left-0 md:left-20 max-w-[400px] h-[350px] md:h-[400px] rounded-2xl bg-gradient-to-b from-[#45E4CA] to-[#439F90]">
            <div className="relative">
              <Image alt="Union" src={Union} className="w-full" />
              <div className="absolute top-0 left-0 w-full">
                <Image alt="Ponco" src={Ponco} className="w-full" />
              </div>
              <div className="absolute -bottom-40 md:-bottom-40 left-0 right-0 mx-2 z-10">
                <div className="bg-baseBackground shadow-lg p-4 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-gradient-to-r from-[#FFC95F] to-[#55AD9B] w-8 h-8 rounded-full flex items-center justify-center">
                      <Icon name="hospital" />
                    </div>
                    <div>
                      <h3 className="text-neutral text-sm md:text-base font-semibold underline underline-offset-2">
                        dr. Ponco Agus Prasojo, Sp.B-KBD, MARS
                      </h3>
                      <p className="font-medium text-xs text-[#6C87AE]">
                        Spesialis Bedah Digestif
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="my-20 relative">
          <Image alt="Ponco" src={Ponco} />
          <div className="absolute -bottom-5 left-0 right-0 mx-5">
            <div className="bg-baseBackground shadow-lg p-4 rounded-lg">
              <div className="flex gap-4 items-center">
                <div className="bg-gradient-to-r from-[#FFC95F] to-[#55AD9B] w-8 h-8 rounded-full flex items-center justify-center">
                  <Icon name="hospital" />
                </div>
                <div>
                  <h3 className="text-neutral text-sm md:text-base font-semibold underline underline-offset-2">
                    dr. Ponco Agus Prasojo, Sp.B-KBD, MARS
                  </h3>
                  <p className="font-medium text-xs text-[#6C87AE]">
                    Spesialis Bedah Digestif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start -mt-20 md:mt-0">
          <Image alt="Pattern" src={Pattern} className="w-full md:w-auto" />
          <div className="absolute top-20 md:top-40 text-center md:text-left w-full">
            <h2 className="text-xs md:text-sm text-[#00856F] font-bold">
              Meningkatkan Layanan Kesehatan 👋
            </h2>
            <h1 className="text-lg md:text-5xl font-bold text-neutral mt-2">
              KESEHATAN <span className="text-secondary">BERKUALITAS</span>{" "}
              UNTUK SEMUA MASYARAKAT INDONESIA
            </h1>
            <button className="bg-primary text-white text-sm md:text-lg font-bold px-4 py-3 rounded-lg gap-2 mt-5 md:mt-10 w-full md:w-auto flex items-center justify-center">
              <Icon name="plan" className="rotate-45" />
              Langkah Awal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
