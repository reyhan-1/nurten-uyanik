// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-[#f8f1e7]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / Marka */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-semibold tracking-tight">
            Nurten Handmade
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Nurten Uyanık
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-800 md:flex">
          <Link href="/store" className="hover:underline">
            Mağaza
          </Link>
          <Link href="/courses" className="hover:underline">
            Online Dersler
          </Link>
          <Link href="/about" className="hover:underline">
            Hakkımda
          </Link>
          <Link href="/contact" className="hover:underline">
            İletişim
          </Link>
          <a
            href="https://www.instagram.com/nurten_handmade"
            target="_blank"
            className="hover:underline"
          >
            Instagram
          </a>
        </nav>

        {/* Sağ ikonlar + mobil menü butonu */}
        <div className="flex items-center gap-3 text-sm">
          <button
            aria-label="Hesabım"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xs sm:flex"
          >
            😊
          </button>
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
