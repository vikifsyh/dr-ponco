import Icon from "@/components/atoms/Icon";
import React from "react";

export default function About() {
  return (
    <section
      id="tentang"
      className="md:mx-[100px] md:-mt-24 md:mb-20 mx-5 mb-10 -mt-24"
    >
      <div className="px-6 md:px-12 py-4 md:py-9 bg-baseBackground rounded-xl">
        <h1 className="text-[32px] text-neutral font-bold md:text-left text-center">
          Hallo,
        </h1>
        <div className="md:flex md:items-center">
          <h2 className="md:text-[32px] text-2xl font-bold md:mr-2">Saya,</h2>
          <h2 className="md:text-[32px] text-xl font-bold">
            <span className="text-primary underline underline-offset-2">
              dr. Ponco Agus Prasojo, Sp.B-KBD, MARS
            </span>
          </h2>
        </div>
        <p className="mt-6 text-[#1C1C1C] text-lg text-justify">
          Sejak awal karir, saya telah berkomitmen untuk melayani dan mengabdi
          kepadarakyat Indonesia dalam bidang kesehatan. Dengan latar belakang
          sebagai dokter dan pemimpin di berbagai lembaga kesehatan, serta
          pengalaman sebagai Mayor Jenderal (Purn) TNI, saya memahami tantangan
          dan kebutuhan dalam sistem kesehatan kita. Disiplin dan dedikasi yang
          saya pelajari di dunia militer kini ingin saya teruskan untuk
          memperbaiki sistem kesehatan Indonesia. Saya bertekad untuk membawa
          perubahan signifikan yang selaras dengan visi Presiden Prabowo:
          Bersama Indonesia Maju Menuju Indonesia Emas 2045.
        </p>
        <div className="mt-9 gap-[14px] flex items-center md:justify-start justify-center">
          <div className=" p-2 md:p-4 border border-primary rounded-full ">
            <Icon name="at" />
          </div>
          <div>
            <h3 className="text-sm text-neutral ">EMAIL NOW:</h3>
            <h3 className="md:text-xl text-lg font-bold text-neutral">
              poncoworkspace@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
