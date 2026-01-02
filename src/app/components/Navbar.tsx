// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-[#f8f1e7]">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / Marka */}
        <Link href="/" className="flex items-center gap-2">
  <div className="flex flex-col leading-tight">
 <Image
    src="/nurten-handmade.png"
    alt="Nurten Handmade"
    width={190}
    height={190}
    className="h-auto w-auto"
    priority
  />
  </div>
</Link>


        {/* Masaüstü menü */}
        <nav className="hidden md:flex items-center gap-10 text-neutral-800 uppercase tracking-[0.25em] text-[12px] leading-relaxed">
          <Link
  href="/urunler"
  className="relative hover:opacity-100 transition
             after:absolute after:left-1/2 after:-translate-x-1/2
             after:bottom-[-6px] after:h-[1px] after:w-18
             after:bg-neutral-400 after:opacity-0
             hover:after:opacity-100 after:transition"
>
  Ürünler
</Link>
          <Link href="/egitimler" className="relative hover:opacity-100 transition
             after:absolute after:left-1/2 after:-translate-x-1/2
             after:bottom-[-6px] after:h-[1px] after:w-28
             after:bg-neutral-400 after:opacity-0
             hover:after:opacity-100 after:transition"
>
            Eğitimlerimiz
          </Link>
          <Link href="/hakkimizda" className="relative hover:opacity-100 transition
             after:absolute after:left-1/2 after:-translate-x-1/2
             after:bottom-[-6px] after:h-[1px] after:w-24
             after:bg-neutral-400 after:opacity-0
             hover:after:opacity-100 after:transition"
>
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="relative hover:opacity-100 transition
             after:absolute after:left-1/2 after:-translate-x-1/2
             after:bottom-[-6px] after:h-[1px] after:w-18
             after:bg-neutral-400 after:opacity-0
             hover:after:opacity-100 after:transition"
>
            İletişim
          </Link>
        </nav>

        {/* Sağ ikonlar + mobil menü butonu */}
        <div className="flex items-center gap-3 text-sm">
          <button
            aria-label="Sepet"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-900 text-xs sm:flex"
          >
            🛒
          </button>

          {/* Hamburger (sadece mobil) */}
          <button
            aria-label="Menüyü aç/kapat"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xs md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="border-t border-neutral-200 bg-[#f8f1e7] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-neutral-900">
            <Link
              href="/store"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              Mağaza
            </Link>
            <Link
              href="/courses"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              Online Dersler
            </Link>
            <Link
              href="/about"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              Hakkımda
            </Link>
            <Link
              href="/contact"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              İletişim
            </Link>
            <a
              href="https://www.instagram.com/nurten_handmade"
              target="_blank"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              Instagram
            </a>

            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-full border border-neutral-300 px-3 py-1.5 text-xs">
                Hesabım
              </button>
              <button className="flex-1 rounded-full border border-neutral-900 px-3 py-1.5 text-xs">
                Sepetim
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
