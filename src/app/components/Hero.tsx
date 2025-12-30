// components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        y: 20,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef}>
      {/* Üst kırmızı duyuru bandı */}
      <div className="bg-[#a52b25] text-center text-xs font-medium text-[#fdf5ea]">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
          <span className="mr-1">
            Instagram'da çok sevilen online dersler — soğuk porselen ve daha fazlası...
          </span>
          <a
            href="/courses"
            className="underline underline-offset-2 hover:text-white"
          >
            Hemen incele
          </a>
        </div>
      </div>

      {/* Büyük hero (video/görsel alanı gibi) */}
      <div className="relative bg-black">
        {/* Arkaplan: şimdilik koyu görsel yerine gradient,
            istersen buraya Next Image ile gerçek foto/video ekleyebiliriz */}
        <div className="relative mx-auto h-[420px] max-w-6xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gradient-to-t from-black via-black/60 to-black/20" />
            <div className="absolute inset-0 bg-[url('/hero-placeholder.jpg')] bg-cover bg-center opacity-50" />
          </div>

          {/* Metin */}
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="hero-heading text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl">
              Üretmenin Mutluluğu
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-200 sm:text-base">
              Nurten Handmade eğitimleri ile dekoratif objeler yapmayı öğrenin.<br/>{" "}
              <strong>Ankara atölye eğitimleri</strong>
              ,{" "}<strong>online dersler</strong>{" "}
              ve <strong>günlük workshoplar</strong>la kendinize zaman ayırın, yaratıcı bir yolculuğa çıkın.
            </p>
            <div className="hero-button mt-6">
              <a
                href="/egitimler"
                className="bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-black"
              >
                Eğitimleri İnceleyin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
