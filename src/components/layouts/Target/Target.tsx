import Image from "next/image";
import React from "react";
import Pattern from "../../../../public/image/pattern.png";
import PoncoShadow from "../../../../public/image/image 25.png";
import Ponco from "../../../../public/image/image 24.png";
import Icon from "@/components/atoms/Icon";

const target = [
  {
    id: 1,
    content: "Peningkatan indeks kesehatan masyarakat Indonesia.",
  },
  { id: 2, content: "Pengurangan angka kematian ibu dan anak." },
  { id: 3, content: "Peningkatan angka harapan hidup." },
  {
    id: 4,
    content: "Penurunan prevalensi penyakit menular dan tidak menular.",
  },
  {
    id: 5,
    content:
      "Kenaikan persentase masyarakat yang memiliki akses ke layanan kesehatan berkualitas.",
  },
];

export default function Target() {
  return (
    <div id="target" className="bg-baseBackground my-20">
      <div className="md:mx-[90px] mx-5 flex justify-between">
        <div className="relative top-0 bottom-0 left-0 hidden md:block">
          <Image alt="Ponco" src={PoncoShadow} />
          <div className="absolute -bottom-0 left-20">
            <Image alt="" src={Ponco} />
          </div>
        </div>
        <div className="my-14 max-w-2xl">
          <h1 className="text-2xl md:text-3xl text-neutral font-semibold text-center md:text-left">
            Indikator <span className="text-primary">Keberhasilan</span> pada
            Program
          </h1>
          <div className="my-8 flex justify-center md:justify-start">
            <svg
              width="85"
              height="4"
              viewBox="0 0 85 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 2.31738H85" stroke="#EFB31E" stroke-width="3" />
            </svg>
          </div>
          <p className="text-[#777777] text-base md:text-lg text-center md:text-left">
            Apa Saja yang Menjadi Indikator Keberhasilan pada Program yang Kami
            Jalankan?
          </p>
          <div className="mt-[50px]">
            {target.map((item) => (
              <div
                key={item.id}
                className="flex items-center my-5 text-base md:text-xl"
              >
                <span>
                  <Icon name="list" />
                </span>
                <p className="ml-5 font-medium">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
