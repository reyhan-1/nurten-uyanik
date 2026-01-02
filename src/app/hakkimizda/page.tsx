// src/app/hakkimizda/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/app/components/Hero";

export const metadata: Metadata = {
  title: "Hakkımızda | Nurten Handmade",
  description: "Nurten Handmade’in hikâyesi ve atölyenin arkasındaki ilham.",
};

export default function HakkimizdaPage() {
  return (
    <main className="bg-[#f7f3ed]">
      {/* Hero – landing ile aynı layout / stil */}
      <Hero
        announcementText={
          <>
            Instagram&apos;da çok sevilen online dersler — soğuk porselen ve
            daha fazlası...
          </>
        }
        announcementLinkLabel="Hemen incele"
        announcementLinkHref="/courses"
        title="Hakkımızda"
        description={
          <>
            Nurten Handmade, soğuk porselen ve el yapımı objelerle üretmenin
            mutluluğunu paylaşmak için kuruldu.
            <br />
            Atölyede ve online derslerde, kendi ritmini bulabileceğin yavaş ve
            keyifli bir üretim alanı sunuyoruz.
          </>
        }
        primaryCtaLabel="Atölye & Eğitimler"
        primaryCtaHref="#atolye-egitimler"
        backgroundImageUrl="/nurten-handmade-workshop.webp"
        heightClassName="h-[420px]"   // landing ile aynı yükseklik
        align="center"                // landing ile aynı hizalama
      />

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Eyebrow + Title */}
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900">
          Nurten Handmade’in Hikâyesi
        </h2>

        {/* Short intro */}
        <p className="mt-5 text-base md:text-lg text-neutral-800 max-w-2xl">
          Nurten Handmade aslında çok basit bir fikirle başladı: Kızım, benden
          habersiz benim için bir Instagram hesabı açıp paylaşım yapmaya
          başladı — ve bugün 35 binlik bir aileyiz.
        </p>

        {/* Main content + big image */}
        <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* Text column */}
          <div className="space-y-4 text-neutral-800 leading-relaxed text-sm md:text-base">
            <p>Hobilerle olan yolculuğum ise çok daha önce başladı.</p>

            <p>Kız Meslek Lisesi giyim bölümü mezunuyum.</p>

            <p>
              1995–1997 yılları arasında Amerika’da yaşadım. O dönemde yemek
              kurslarına, patchwork ve farklı hobi atölyelerine katıldım.
              Orada, ellerimle bir şey üretmenin insana nasıl iyi geldiğini
              keşfettim.
            </p>

            <p>Türkiye’ye döndükten sonra bu merakım beni resme götürdü.</p>
            <p>
              Hikmet Çetinkaya ve Firdevsi Feyzullah’tan yağlı boya dersleri,
              Orhan Gürel&apos;den suluboya dersleri aldım.
            </p>
            <p>
              Türkiye’de çeşitli karma sergilerde yer aldım ve Paris&apos;te
              kişisel sergimi açtım. Rengi, ışığı ve yavaş yavaş ortaya çıkan
              bir görüntünün verdiği huzuru, sabrı öğrendim.
            </p>
            <p>
              2013 yılında çok sevdiğim resim hobime sağlık sebebiyle ara vermek durumda kaldım.
            </p>
          </div>

          {/* Image column – big portrait */}
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <Image
              src="/nurten-uyanik.webp"
              alt="Nurten Handmade atölyesinden bir kare"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ➜ 3-column images */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* 1st image card */}
          <div className="relative w-full aspect-[4/6] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
            <Image
              src="/nurten-uyanik-cagdas.jpg"
              alt="Nurten Handmade atölyesinden bir kare"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 2nd image card */}
          <div className="relative w-full aspect-[4/6] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
            <Image
              src="/nurten-uyanik-paris-sergi.jpg"
              alt="Nurten Handmade atölyesinden bir kare"
              fill
              className="object-cover"
            />
          </div>

          {/* 3rd image card */}
          <div className="relative w-full aspect-[4/6] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
            <Image
              src="/nurten-uyanik-aoc-sergi.webp"
              alt="Nurten Handmade atölyesinden bir kare"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Same text, just wrapped for spacing/typography */}
        <div className="space-y-4 pt-10 text-neutral-800 leading-relaxed text-sm md:text-base">
          <p>Yıllar ve tedavi sürecimden sonra, 2018’de soğuk porselenle tanıştım.</p>

          <p>
            Başta küçük bir denemeydi. Ama zamanla, hamuru yoğurmanın, şekil
            vermenin, sabırla detay eklemenin ruhu yavaşlatan bir ritüel
            olduğunu fark ettim.
          </p>

          <p>
            Bugün Nurten Handmade:
            <br />
            <br />
            • kendine zaman ayırmayı hatırlatan
            <br />
            • yavaşlamaya davet eden
            <br />
            • üretmenin mutluluğunu taşıyan
            <br />
            küçük ama anlamlı işler üretmemizi sağlıyor.
          </p>

          <p className="italic">
            Burada sadece dekoratif ürünler ya da hamur yapmıyorum; aynı
            zamanda “bana iyi geleni” paylaşmaya çalışıyorum.
          </p>
        </div>

        {/* Collage section */}
        <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div className="text-neutral-800 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Kızlarım sosyal medyada ve içeriklerde bana destek oluyor, ben ise
              elimden geldiğince rehberlik ederek yeni şeyler öğrenmek
              isteyenlerle bu yolculuğu paylaşıyorum.
            </p>

            <p className="italic">
              Ve yolculuğun en güzel taraflarından biri: öğretmek. Workshop’larda,
              derslerde ve paylaşımlarda öğrencilerimle aynı masanın etrafında
              toplanmayı çok seviyorum.
            </p>

            <p>
              Birlikte yavaşlıyoruz, gülümsüyoruz, deniyoruz… Ve herkes kendi
              emeğiyle ortaya çıkan o küçük mucizeyi görünce yüzlerde aynı
              mutluluk beliriyor. Bu yolculuğu sizinle paylaşmak benim için
              büyük bir mutluluk.
            </p>
          </div>

          {/* Image collage */}
          <div className="relative w-full h-[420px] md:h-[520px]">
            {/* Top image */}
            <div className="absolute left-8 md:left-16 -top-4 md:-top-10 -rotate-2">
              <div className="relative w-60 md:w-72 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white">
                <Image
                  src="/nurten-handmade-workshop.webp"
                  alt="nurten handmade workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle image */}
            <div className="absolute right-4 md:-right-25 top-35 md:top-4 -rotate-2">
              <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white">
                <Image
                  src="/IMG_1371.webp"
                  alt="nurten handmade workshop"
                  fill
                  className="object-cover scale-125"
                />
              </div>
            </div>

            {/* Bottom image */}
            <div className="absolute left-10 md:left-24 bottom-0 rotate-1">
              <div className="relative w-52 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white">
                <Image
                  src="/nurten-handmade-atolye-ders.webp"
                  alt="nurten handmade atolye dersi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Secondary section – Atölye & Eğitimler */}
        <section
          id="atolye-egitimler"
          className="mt-16 md:mt-20 border-t border-neutral-200 pt-10 md:pt-12"
        >
          <h2 className="text-xl md:text-2xl font-medium text-neutral-900">
            Atölye & Eğitimler
          </h2>

          <p className="mt-4 text-sm md:text-base text-neutral-800 max-w-2xl">
            Online dersler, küçük gruplarla yapılan atölyeler ve özel günlere
            özel workshop’lar ile soğuk porseleni birlikte keşfediyoruz.
            Seviyeniz ne olursa olsun, adım adım ilerleyen içeriklerle kendi
            figürlerinizi oluşturabilirsiniz.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="uppercase tracking-[0.18em] text-[11px] text-neutral-600 mb-2">
                Online
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Başlangıç Seviye Soğuk Porselen
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Malzeme bilgisi, temel şekillendirme ve ilk figürünüzü birlikte
                oluşturduğumuz ders serisi.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="uppercase tracking-[0.18em] text-[11px] text-neutral-600 mb-2">
                Atölye
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Yüz İfadeleri &amp; Detay Çalışmaları
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Figürlerinize karakter kazandıran yüz, saç ve kıyafet
                detaylarına odaklanan uygulamalı workshop.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="uppercase tracking-[0.18em] text-[11px] text-neutral-600 mb-2">
                Özel Günler
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Doğum Günü &amp; Etkinlik Workshop&apos;ları
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Küçük gruplar için keyifli, hatıra odaklı üretim deneyimleri.
                Çocuklar ve yetişkinler için uygundur.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
