"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";



export function Footer() {
  return (
    <footer className="bg-[#f7f3ed] border-t border-neutral-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* SOCİALS*/}
<div>
  <p className="uppercase tracking-[0.2em] text-[12px] font-bold text-neutral-700 mb-2">
    Sosyal Medya
  </p>

  <div className="flex flex-col gap-3">

    <Link
      href="https://www.instagram.com/nurten_handmade"
      target="_blank"
      className="flex items-center gap-2 text-sm hover:opacity-60 transition"
    >
      <FaInstagram className="w-4 h-4" />
      Instagram
    </Link>

    <Link
      href="https://www.youtube.com/@NurtenHandmade"
      target="_blank"
      className="flex items-center gap-2 text-sm hover:opacity-60 transition"
    >
      <FaYoutube className="w-4 h-4" />
      YouTube
    </Link>

    <Link
      href="https://www.pinterest.com/nurtenhandmade/"
      target="_blank"
      className="flex items-center gap-2 text-sm hover:opacity-60 transition"
    >
      <FaPinterest className="w-4 h-4" />
      Pinterest
    </Link>

  </div>
</div>


          {/* Center — Logo + Newsletter */}
          <div className="text-center">
            <Image
    src="/nurten-handmade.png"
    alt="Nurten Handmade"
    width={300}
    height={300}
    className="h-auto w-full"
    priority
  />

            <p className="text-sm text-neutral-700 mb-6">
              Yeni dersler ve workshop duyuruları e-posta kutunuza gelsin.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-3"
            >
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-transparent border-b border-neutral-400 px-2 py-1 text-sm outline-none w-56"
              />

              <button className="uppercase tracking-[0.2em] text-[11px] hover:opacity-70 transition">
                Abone Ol →
              </button>
            </form>
          </div>

          {/* Right — Questions */}
          <div className="text-right">
            <p className="font-geist font-bold uppercase tracking-[0.2em] text-[12px] text-neutral-700 mb-2">
              İletişim
            </p>

            <div className="flex flex-col gap-1 text-sm uppercase tracking-[0.25em] text-[12px] leading-relaxed">
              <Link href="/sss" className="hover:opacity-60 transition">
                Sık Sorulan Sorular
              </Link>

              <Link href="/mesaj" className="hover:opacity-60 transition">
                Mesaj Formu
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 mt-12 pt-10">
          {/* Legal row */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.15em] text-neutral-600">
            <Link href="/privacy" className="hover:opacity-60">
              Gizlilik
            </Link>

            <Link href="/terms" className="hover:opacity-60">
              Kullanım Şartları
            </Link>

            <Link href="/cookies" className="hover:opacity-60">
              Çerez Ayarları
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-[11px] text-neutral-600 mt-6">
            © {new Date().getFullYear()} Nurten Handmade — Tüm hakları saklıdır.  | WEBSITE BY{' '}
              <Link href="https://www.reyhanuyanik.art" target="_blank">
  Reyhan Uyanik
</Link>

          </p>
        </div>
      </div>
    </footer>
  );
}
