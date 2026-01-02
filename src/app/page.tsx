// src/app/page.tsx
import { Hero } from "@/app/components/Hero";
import { Faq } from "@/app/components/Faq";
import { HamurlarSection } from "@/app/components/Hamurlar";
import { Footer } from "@/app/components/Footer";

const favoriteProducts = [
  {
    name: "El Yapımı Kırmızı Elma Obje",
    description: "Soğuk porselenden elde şekillendirilmiş dekoratif elma.",
    tag: "Dekoratif Obje",
    price: "₺450",
  },
  {
    name: "Çiçekli Mini Vazo Seti",
    description: "Esnek porselenden pastel tonlarda 3 mini vazo.",
    tag: "Clay Art",
    price: "₺620",
  },
  {
    name: "Online Ders: Soğuk Porselen Hamur Yapımı",
    description: "Hamur tarifleri, püf noktaları ve saklama önerileri.",
    tag: "Online Ders",
    price: "₺349",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#f8f1e7]">
      {/* Hero (reusable) */}
      <Hero
        announcementText={
          <>
            Instagram&apos;da çok sevilen online dersler — soğuk porselen ve
            daha fazlası...
          </>
        }
        announcementLinkLabel="Hemen incele"
        announcementLinkHref="/courses"
        title="Üretmenin Mutluluğu"
        description={
          <>
            Nurten Handmade eğitimleri ile dekoratif objeler yapmayı öğrenin.
            <br />
            <strong>Ankara atölye eğitimleri</strong>,{" "}
            <strong>online dersler</strong> ve{" "}
            <strong>günlük workshoplar</strong>la kendinize zaman ayırın,
            yaratıcı bir yolculuğa çıkın.
          </>
        }
        primaryCtaLabel="Eğitimleri İnceleyin"
        primaryCtaHref="/egitimler"
        backgroundImageUrl="/hero-placeholder.jpg"
        heightClassName="h-[420px]"
        align="center"
      />

      {/* FAVORİLERİMİZ */}
      <section className="mx-auto mt-10 max-w-6xl px-4">
        {/* Başlık + TÜMÜNÜ GÖR */}
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl uppercase font-semibold tracking-light">
            nurten handmade tasarımı ÖZEL ÜRÜNLER
          </h2>

          <a
            href="/store"
            className="flex items-center hover:underline
            gap-10 text-neutral-800 uppercase
            tracking-[0.25em] text-[12px] leading-relaxed"
          >
            TÜMÜNÜ GÖR
          </a>
        </div>

        {/* Ürün Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {favoriteProducts.map((item) => (
            <article
              key={item.name}
              className="flex flex-col border border-neutral-200 bg-[#fdf5ea] shadow-sm"
            >
              {/* Ürün görsel placeholder (gerçek resim ekleyince değiştireceğiz) */}
              <div className="h-52 bg-neutral-300/40" />

              <div className="flex flex-1 flex-col justify-between p-4 text-sm">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {item.tag}
                  </p>

                  <h3 className="text-sm font-semibold tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs text-neutral-700">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.price}</span>

                  <button className="border border-neutral-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-neutral-900 hover:text-[#f8f1e7]">
                    Sepete ekle
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HamurlarSection />

      {/* SSS – Soğuk Porselen */}
      <Faq />

      {/* INSTAGRAM BÖLÜMÜ */}
      <section className="mx-auto mt-10 max-w-6xl px-4 border-t border-neutral-200 pt-6 text-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          INSTAGRAM
        </p>

        <h3 className="mt-1 text-base font-semibold">@nurten_handmade</h3>

        <p className="mt-2 max-w-xl text-sm text-neutral-700">
          Soğuk Porselen &amp; Clay Art 🍎 • minik mutluluklar, evde terapi gibi
          bir hobi. Takip et, beraber üretelim 💌
        </p>

        <a
          href="https://www.instagram.com/nurten_handmade"
          target="_blank"
          className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 underline-offset-4 hover:underline"
        >
          INSTAGRAM’DA GÖR
        </a>
      </section>
    </div>
  );
}
