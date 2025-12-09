// src/components/HamurlarSection.tsx
"use client";

import Image from "next/image";

const doughs = [
  {
    id: "soguk-porselen",
    name: "Soğuk Porselen",
    short: "İnce, zarif ve detaylı dekoratif objeler için.",
    uses: "Çiçekler, minik objeler, zarif figürler ve hassas detaylar.",
    objectImage: "/hamurlar/soguk-porselen-obje.jpg",
    doughImage: "/hamurlar/soguk-porselen-hamur.jpg",
  },
  {
    id: "esnek-porselen",
    name: "Esnek Porselen",
    short: "Daha esnek, kırılmaya dayanıklı projeler için.",
    uses: "Kıvrımlı formda kalan yapraklar, hareketli figürler, ince ama sağlam parçalar.",
    objectImage: "/hamurlar/esnek-porselen-obje.jpg",
    doughImage: "/hamurlar/esnek-porselen-hamur.jpg",
  },
  {
    id: "polypuff",
    name: "Polypuff Hamuru",
    short: "Kabaran, yumuşak dokulu ve hacimli efektler için.",
    uses: "Pastel görünümler, pofuduk detaylar, çocuk odası süsleri ve fun projeler.",
    objectImage: "/hamurlar/polypuff-obje.jpg",
    doughImage: "/hamurlar/polypuff-hamur.jpg",
  },
  {
    id: "figur-hamuru",
    name: "Figür Hamuru",
    short: "Yüz ifadesi ve vücut formu gibi figür çalışmalarına özel.",
    uses: "Karakter figürler, bebekler, minyatür insanlar ve yüz çalışmaları.",
    objectImage: "/hamurlar/figur-hamuru-obje.jpg",
    doughImage: "/hamurlar/figur-hamuru-hamur.jpg",
  },
];

export function HamurlarSection() {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Hamurlarımız
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-700">
            Online derslerde dört farklı hamurla çalışıyoruz: soğuk porselen,
            esnek porselen, polypuff ve figür hamuru. Her biri farklı dekoratif
            objelerde, farklı etkiler için kullanılıyor.
          </p>
        </div>

        <a
          href="/courses"
          className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 underline-offset-4 hover:underline"
        >
          ONLINE DERSLERİ GÖR
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {doughs.map((dough) => (
          <article
            key={dough.id}
            className="flex flex-col border border-neutral-200 bg-[#fdf5ea] text-sm shadow-sm"
          >
            {/* Hover'da obje → hamur geçişi */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-300/40">
              {/* Dekoratif obje */}
              <Image
                src={dough.objectImage}
                alt={`${dough.name} ile yapılmış dekoratif obje`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hamur görüntüsü */}
              <Image
                src={dough.doughImage}
                alt={`${dough.name} hamuru`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-3">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold tracking-tight">
                  {dough.name}
                </h3>
                <p className="text-xs text-neutral-700">{dough.short}</p>
              </div>
              <p className="mt-3 text-xs text-neutral-600">{dough.uses}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
