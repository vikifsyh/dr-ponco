"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Ponco from "../../../../public/image/Mask group.png";
import Icon from "@/components/atoms/Icon";

const goals = [
  {
    id: 1,
    content: "Meningkatkan pembiayaan kesehatan yang adil dan berkelanjutan.",
    icon: <Icon name="justice" />,
  },
  {
    id: 2,
    content:
      "Meningkatkan akses layanan kesehatan berkualitas di seluruh wilayah Indonesia.",
    icon: <Icon name="medical-mark" />,
  },
  {
    id: 3,
    content: "Mengoptimalkan penggunaan teknologi dalam sistem kesehatan.",
    icon: <Icon name="technology" />,
  },
  {
    id: 4,
    content:
      "Mendorong kolaborasi dengan lembaga internasional dan swasta dalam peningkatan kualitas kesehatan.",
    icon: <Icon name="network" />,
  },
  {
    id: 5,
    content:
      "Memperkuat kapasitas tenaga kesehatan melalui pendidikan dan pelatihan berkelanjutan.",
    icon: <Icon name="training" />,
  },
];

export default function Goals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to your preference
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="tujuan">
      <div className="md:flex md:justify-between w-full bg-gradient-to-r from-[#fff] to-primary my-[90px] py-5 md:py-0">
        <div className="hidden md:block">
          <Image alt="Ponco" src={Ponco} />
        </div>
        <div className="bg-baseBackground/20 m-5 md:mx-20 md:my-10 px-8 py-5 rounded-xl">
          <h3 className="text-2xl md:text-3xl text-neutral text-center md:text-right">
            Apa tujuan saya untuk Kesehatan Indonesia?
          </h3>
          <p className="text-xl md:text-2xl text-[#5A5A5A] text-center md:text-right">
            Meningkatkan kualitas dan akses pelayanan kesehatan bagi seluruh
            rakyat Indonesia melalui reformasi sistem kesehatan yang inklusif,
            berkelanjutan, dan berbasis teknologi.
          </p>
          <p className="font-bold text-xl md:text-[32px] flex justify-center md:justify-end text-white mt-4 md:mt-[60px] ">
            dr. Ponco
          </p>
        </div>
      </div>
      <h2 className="md:text-4xl text-xl font-bold text-neutral text-center">
        Bagaimana Cara Mencapai Tujuan Saya untuk
        <span className="text-secondary"> Kesehatan Indonesia</span>?
      </h2>
      <div className="relative my-[100px] bg-[#EEF7FF] hidden md:block">
        <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-[#EEF7FF] to-transparent blur-md"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-[#EEF7FF] to-transparent blur-md"></div>
        <div className="flex gap-10 items-center mx-[90px] py-10 relative z-10">
          <button onClick={() => handleScroll("left")}>
            <Icon name="arrow-left" />
          </button>
          <div
            className="w-full overflow-x-scroll scrollbar-hide"
            ref={scrollContainerRef}
          >
            <div className="flex min-w-max gap-10">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="flex flex-col items-center max-w-[300px]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#081D3A] flex items-center justify-center">
                    {goal.icon}
                  </div>
                  <p className="mt-7 text-center text-lg">{goal.content}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => handleScroll("right")}>
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden my-5 bg-baseBackground p-5">
        <div className="flex flex-wrap justify-center">
          {goals.slice(0, 3).map((goal) => (
            <div key={goal.id} className="w-1/3 p-2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#081D3A] flex items-center justify-center">
                {goal.icon}
              </div>
              <p className="mt-7 text-center text-sm">{goal.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {goals.slice(3, 5).map((goal) => (
            <div key={goal.id} className="w-1/2 p-2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#081D3A] flex items-center justify-center">
                {goal.icon}
              </div>
              <p className="mt-7 text-center text-sm">{goal.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
