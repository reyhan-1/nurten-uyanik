import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Nurten Handmade",
  description: "Nurten Handmade’in el yapımı tasarımları ve eğitimleri hakkında detaylı bilgi.",
};

const onlineDersler = [
  {
    name: "Ökseotu Çelenk",
    description: "Buğulu dokusuyla Nurten Handmade’in imza tasarımlarından biri.",
    tag: "4 Teknik",
    price: "₺2500",
    season: "Kış Sezonu",
    details:
      "Buğulu görünüm tekniği, ökseotu yaprak yapımı ve toplama yöntemleri, yaprakların çelenk üzerine yerleştirilmesi, hamurun renklendirilmesi ve boyama teknikleri.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Yeni Yıl Teması",
    description: "Kış sezonunun vazgeçilmez dekoratif objeleri bir arada.",
    tag: "8 Farklı Ürün",
    price: "₺2500",
    season: "Kış Sezonu",
    details:
      "Yeni yıl kurabiyelerinin yapımı, boyama ve süslemesi; örgü bere ve eldiven seti; çam ağacı yapımı; iki farklı mini yılbaşı çelengi çalışması.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Kurabiye Ev & Ters Buket",
    description: "Başlangıç seviyesine uygun kış temalı dekoratif objeler.",
    tag: "Gingerbread evler ve pırıltılı berryler",
    price: "₺1800",
    season: "Kış Sezonu",
    details:
      "Farklı boyutlarda çalışılabilen gingerbread kurabiye evler ve pırıltılı berryler; yaprak kesimi; kurabiye ev kalıbı çıkarma, birleştirme ve boyama teknikleri; evin dekoratif olarak süslenmesi; ters buket için yaprak kesimi, boyama ve pırıltılı berry tekniği.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Sukulent",
    description: "Kalıpsız 14 farklı sukulent modeli.",
    tag: "Kalıpsız",
    price: "₺1800",
    season: "Soğuk Porselen Çiçek",
    details:
      "Kalıp kullanmadan yalnızca hamur ve el ile şekillendirilen 14 farklı sukulent ve gerçekçi boyama teknikleri.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Sonbahar Garland",
    description: "Mini balkabaklarıyla sonbahar dokulu zarif bir garland.",
    tag: "Sonbahar renkleri",
    price: "₺2000",
    season: "Sonbahar",
    details:
      "Balkabağı yapımı ve boyaması, sonbahar yapraklarının şekillendirilmesi ve boyanması, yaprakların tele takılması ve garland kompozisyonunun oluşturulması.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Şapka ve Çam Topiary",
    description: "Masa ve vitrin dekorasyonuna uygun iki farklı topiary çalışması.",
    tag: "2 Topiary",
    price: "₺1300",
    season: "Sonbahar",
    details: "Hamur renklendirme, iki farklı topiary formunun oluşturulması ve detaylandırılması.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Mantar",
    description: "Doğal detaylarıyla üç farklı mantar türü.",
    tag: "3 Mantar",
    price: "₺700",
    season: "Sonbahar",
    details:
      "Sinek mantarı, porcini ve kestane mantarının şapka, yüksük, sap ve lamel detaylarıyla modellenmesi.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Elma",
    description: "Gerçeğinden ayırt etmesi neredeyse imkânsız, parlak kırmızı elmalar.",
    tag: "Kalıpsız",
    price: "₺700",
    season: "Sonbahar",
    details:
      "Kırmızı elma yapımı; tek başına dekoratif obje olarak ya da garlandlarda yardımcı süsleyici öğe olarak kullanılabilir.",
    hamur: "Soğuk Porselen",
  },
  {
    name: "Ortanca",
    description: "Hacimli ve gerçekçi ortanca dalları.",
    tag: "2 farklı toplama tekniği",
    price: "₺2200",
    season: "İlkbahar",
    details:
      "Çiçeğin türüne uygun merkez oluşturma (tel veya hamur kullanımı), taç yaprak ve yaprakların şekillendirilip kurutulması, parçaların gövdeye dengeli şekilde monte edilmesi, renklendirme ve boyama teknikleri, yaprak ve yan dalların çiçeğe eklenerek kompozisyonun tamamlanması.",
    hamur: "Esnek Porselen Çiçek",
  },
  {
    name: "Şakayık",
    description: "Doğal formu ve katmanlı yapısıyla şakayık dalları.",
    tag: "Dal tekniği",
    price: "₺2200",
    season: "İlkbahar",
    details:
      "Şakayık için uygun merkez oluşturma (tel veya hamur kullanımı), taç yaprak ve yaprakların şekillendirilip kurutulması, parçaların gövdeye sıralı ve dengeli şekilde monte edilmesi, renklendirme ve boyama teknikleri, yaprak ve yan dalların eklenmesiyle dalların tamamlanması.",
    hamur: "Esnek Porselen Çiçek",
  },
  {
    name: "Lale",
    description: "Klasik zarafetiyle lale dalları.",
    tag: "Dal tekniği",
    price: "₺1700",
    season: "İlkbahar",
    details:
      "Lale formuna uygun merkez oluşturma, taç yaprak ve yaprakların şekillendirilip kurutulması, parçaların gövdeye dengeli şekilde monte edilmesi, renklendirme ve boyama teknikleri, yaprak ve yan dalların eklenmesiyle dalların tamamlanması.",
    hamur: "Esnek Porselen Çiçek",
  },
  {
    name: "Manolya",
    description: "Büyük formlu, zarif manolya çiçekleri.",
    tag: "Dal tekniği",
    price: "₺1700",
    season: "İlkbahar",
    details:
      "Manolya için türüne uygun merkez oluşturma, taç yaprak ve yaprakların şekillendirilip kurutulması, parçaların gövdeye dengeli şekilde monte edilmesi, renklendirme ve boyama teknikleri, yaprak ve yan dalların eklenmesiyle kompozisyonun tamamlanması.",
    hamur: "Esnek Porselen Çiçek",
  },
  {
    name: "Figür Hamuru ve Gnomelar",
    description: "Figür çalışmalarında kullanılan özel hamur tarifi ve gnome figürü.",
    tag: "Gnome hediyeli",
    price: "₺2600",
    season: "Hamurlar",
    details:
      "Kolayca hazırlanabilen, rahat şekillenen ve kolay kaynaşan bir figür hamuruyla çalışma; temel form verme, detaylandırma ve gnom figürü yapımı.",
    hamur: "Figür Hamuru",
  },

    {
    name: "Polipuff",
    description: "Figür çalışmalarında kullanılan özel hamur tarifi ve gnom figürü.",
    tag: "fırınlanmayan seramik kil",
    price: "₺2600",
    season: "Hamurlar",
    details:
      "Hamur yapımı tüm detay ve farklı alanlarda kullanılan hamurlar, Düz plaka çalışması," +
        "Yuvarlak obje çalışması," +
        "Renklendirme teknikleri" +
        "Ürünlerin hazırlanması" +
        "Hazırlanan hamur ile Yumurtalık yapımı",
    hamur: "Polipuff",
  },
    {
    name: " Soğuk Porselen",
    description: "Figür çalışmalarında kullanılan özel hamur tarifi ve gnom figürü.",
    tag: "fırınlanmayan seramik kil",
    price: "₺2600",
    season: "Hamurlar",
    details:
      "Hamur yapımı tüm detay ve farklı alanlarda kullanılan hamurlar, Düz plaka çalışması," +
        "Yuvarlak obje çalışması," +
        "Renklendirme teknikleri" +
        "Ürünlerin hazırlanması" +
        "Hazırlanan hamur ile Yumurtalık yapımı",
    hamur: "Esnek Porselen Çiçek",
  },
    {
    name: " Soğuk Porselen",
    description: "Figür çalışmalarında kullanılan özel hamur tarifi ve gnom figürü.",
    tag: "fırınlanmayan seramik kil",
    price: "₺2600",
    season: "Hamurlar",
    details:
      "Hamur eğitimlerimizde, hamurun yapımından başlayarak renklendirme tekniklerine " +
        "kadar tüm detayları adım adım öğreniyoruz." +
        "Hangi oranla yoğurulur, nasıl yumuşak kalır, " +
        "renkler nasıl karıştırılır, tonlamalar nasıl yapılır gibi",
    hamur: "Soğuk Porselen",
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl md:text-4xl font-semibold mb-6">Eğitimler</h1>

      <p className="text-neutral-800 leading-relaxed mb-4">
        Atölyemizde ve online derslerimizde, kendi ritminizi bulabileceğiniz yavaş
        ve keyifli bir üretim alanı sunuyoruz.
      </p>

      <section className="mx-auto mt-10 max-w-6xl px-4">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl uppercase font-semibold tracking-light">
            ONLINE EĞİTİMLER
          </h2>
        </div>

        <p className="mt-2 max-w-2xl text-sm text-neutral-700">
          Online eğitimlerimiz, başlangıç seviyesinden ileri seviyeye kadar farklı
          bilgi ve beceri düzeylerini kapsamaktadır. Soğuk porselenle ilk kez
          tanışıyorsanız, sizlere hamur dersi ile başlamanızı öneriyoruz. Eğitimlerimiz
          videolu olup, görsel bir kitap gibi tasarlanmıştır; dilediğiniz zaman,
          dilediğiniz kadar izleyebilir, sorularınızı ise her zaman sorabilirsiniz.
        </p>

        {/* Ürün Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {onlineDersler.map((item) => (
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

                  <p className="text-xs text-neutral-700">{item.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.price}</span>

                  <button className="border border-neutral-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-neutral-900 hover:text-[#f8f1e7]">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
