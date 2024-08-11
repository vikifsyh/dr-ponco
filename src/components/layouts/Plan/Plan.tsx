"use client";
import React, { useState } from "react";
import LayananKesehatan from "../../../../public/image/image 2.png";
import Image from "next/image";
import Image1 from "../../../../public/image/image 3.png";
import Image2 from "../../../../public/image/image 4.png";
import Image3 from "../../../../public/image/image 20.png";
import Icon from "@/components/atoms/Icon";
import Teknologi from "../../../../public/image/image 6.png";
import Image4 from "../../../../public/image/image 7.png";
import Image5 from "../../../../public/image/image 8.png";
import Image6 from "../../../../public/image/image 9.png";
import TenagaKesehatan from "../../../../public/image/image 10.png";
import Image7 from "../../../../public/image/image 11.png";
import Image8 from "../../../../public/image/image 12.png";
import Image9 from "../../../../public/image/image 13.png";
import Image10 from "../../../../public/image/image 14.png";
import Image11 from "../../../../public/image/image 15.png";
import Image12 from "../../../../public/image/image 16.png";
import Image13 from "../../../../public/image/image 17.png";
import Image14 from "../../../../public/image/image 18.png";

const data = [
  {
    id: 1,
    icon: <Icon name="health" />,
    title: "Meningkatkan Akses Layanan Kesehatan",
    image: LayananKesehatan,
    tab: "Layanan Kesehatan",
    programs: [
      {
        title: "Program Puskesmas Plus",
        imagePrograms: Image1,
        details: [
          "Mengupgrade Puskesmas menjadi Puskesmas Plus dengan fasilitas laboratorium, ruang gawat darurat, dan layanan rawat inap.",
          "Penempatan dokter spesialis di Puskesmas Plus untuk meningkatkan kualitas pelayanan.",
        ],
      },
      {
        title: "Mobile Health Clinics",
        imagePrograms: Image2,
        details: [
          "Implementasi klinik kesehatan bergerak untuk daerah terpencil dan sulit dijangkau.",
          "Mobile clinics dilengkapi dengan telemedicine untuk konsultasi dengan dokter spesialis.",
        ],
      },
      {
        title: "Infrastruktur Kesehatan",
        imagePrograms: Image3,
        details: [
          "Pembangunan dan renovasi fasilitas kesehatan di daerah tertinggal, perbatasan, dan kepulauan.",
          "Penambahan jumlah tempat tidur di rumah sakit daerah.",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: <Icon name="lamp" />,
    title: "Mengoptimalkan Penggunaan Teknologi dalam Sistem Kesehatan",
    tab: "Penggunaan Teknologi",
    image: Teknologi,
    programs: [
      {
        title: "Digital Health Records",
        imagePrograms: Image4,
        details: [
          "Implementasi rekam medis elektronik (Electronic Health Records - EHR) yang terintegrasi di seluruh fasilitas kesehatan.",
          "Pelatihan tenaga kesehatan dalam penggunaan EHR.",
        ],
      },
      {
        title: "Telemedicine",
        imagePrograms: Image5,
        details: [
          "Pengembangan platform telemedicine untuk konsultasi jarak jauh, terutama bagi masyarakat di daerah terpencil.",
          "Subsidi akses internet untuk fasilitas kesehatan di daerah dengan konektivitas rendah.",
        ],
      },
      {
        title: "Aplikasi Kesehatan Masyarakat",
        imagePrograms: Image6,
        details: [
          "Peluncuran aplikasi kesehatan untuk monitoring kesehatan masyarakat, termasuk program imunisasi dan pencegahan penyakit menular.",
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <Icon name="user-doctor" />,
    image: TenagaKesehatan,
    title: "Memperkuat Kapasitas Tenaga Kesehatan",
    tab: "Tenaga Kesehatan",
    programs: [
      {
        title: "Pendidikan dan Pelatihan Berkelanjutan",
        imagePrograms: Image7,
        details: [
          "Program beasiswa dan pelatihan berkelanjutan bagi tenaga kesehatan di dalam dan luar negeri.",
          "Workshop dan seminar untuk peningkatan kompetensi tenaga kesehatan dalam bidang khusus.",
        ],
      },
      {
        title: "Distribusi Tenaga Kesehatan",
        imagePrograms: Image8,
        details: [
          "Insentif bagi tenaga kesehatan yang bertugas di daerah terpencil dan kurang terjangkau.",
          "Program rotasi tenaga kesehatan untuk memastikan distribusi yang merata.",
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <Icon name="cost-estimate" />,
    image: Image9,
    title: "Meningkatkan Pembiayaan Kesehatan yang Adil dan Berkelanjutan",
    tab: "Pembiayaan Kesehatan",
    programs: [
      {
        title: "Reformasi Sistem Pembiayaan Kesehatan",
        imagePrograms: Image10,
        details: [
          "Penguatan BPJS Kesehatan dengan peningkatan alokasi anggaran dan pengelolaan yang transparan.",
          "Program bantuan kesehatan bagi masyarakat kurang mampu yang tidak terdaftar di BPJS.",
        ],
      },
      {
        title: "Public-Private Partnership",
        imagePrograms: Image11,
        details: [
          "Kolaborasi dengan sektor swasta dalam pembangunan infrastruktur kesehatan dan penyediaan layanan",
          "Pengembangan asuransi kesehatan swasta yang terjangkau sebagai pelengkap BPJS.",
        ],
      },
    ],
  },
  {
    id: 5,
    icon: <Icon name="handshake" />,
    image: Image12,
    title: "Mendorong Kolaborasi Internasional dan Swasta",
    tab: "Kolaborasi",
    programs: [
      {
        title: "Kerjasama dengan Lembaga Internasional",
        imagePrograms: Image13,
        details: [
          "Program kerjasama dengan WHO dan lembaga kesehatan internasional lainnya dalam pengembangan program kesehatan.",
          "Pelaksanaan proyek percontohan dengan pendanaan dari lembaga internasional.",
        ],
      },
      {
        title: "Kolaborasi dengan Sektor Swasta",
        imagePrograms: Image14,
        details: [
          "Insentif bagi perusahaan yang berinvestasi dalam sektor",
          "Program kemitraan dengan universitas dan institusi riset untuk inovasi di bidang kesehatan.",
        ],
      },
    ],
  },
];

export default function Plan() {
  const [activeTab, setActiveTab] = useState(data[0].id);

  const handleTabClick = (id: any) => {
    setActiveTab(id);
  };

  return (
    <div id="program" className="mx-5 my-10 md:my-20 md:mx-[90px]">
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-neutral max-w-4xl text-center">
          Rencana <span className="text-secondary">Strategis</span> Apa yang
          akan Saya Laksanakan untuk Memajukan Kesehatan di Indonesia?
        </h1>
      </div>
      <div className="mt-[60px]">
        <div className="bg-[#1D645B] px-5 md:px-20 py-[10px] rounded-2xl">
          <div className="flex gap-4 md:gap-10 items-center justify-center flex-wrap">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-2 px-[10px] py-2 md:px-[18px] md:py-4 rounded-xl font-bold text-white ${
                  activeTab === item.id ? "bg-secondary" : "bg-transparent"
                }`}
              >
                <span className="md:hidden">{item.icon}</span>{" "}
                {/* Show icon on mobile */}
                <span className="hidden md:inline">{item.tab}</span>{" "}
                {/* Show title on larger screens */}
              </button>
            ))}
          </div>
        </div>
      </div>
      {data.map((item) =>
        item.id === activeTab ? (
          <div key={item.id} className="my-10">
            <div className="flex md:hidden justify-center">
              <h2 className="text-lg font-semibold">{item.tab}</h2>
            </div>
            <div className="relative h-[200px] md:h-[300px] md:mt-0 mt-5">
              <Image
                alt={item.title}
                src={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl md:text-4xl font-bold rounded-md">
                {item.title}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10">
              {item.programs.map((program) => (
                <div key={program.title} className="flex gap-5">
                  <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex-shrink-0">
                    <Image
                      alt={program.title}
                      src={program.imagePrograms}
                      width={200}
                      height={200}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-2xl font-bold text-neutral">
                      {program.title}
                    </h3>
                    <ol className="mt-4">
                      {program.details.map((detail, index) => (
                        <div key={index} className="flex">
                          <span className="mr-1 text-neutral text-xs md:text-lg">{`${
                            index + 1
                          }.`}</span>
                          <p
                            className="text-xs md:text-lg text-neutral"
                            style={{ textAlign: "justify" }}
                          >
                            {detail}
                          </p>
                        </div>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
