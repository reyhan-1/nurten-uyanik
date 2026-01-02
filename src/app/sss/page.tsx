import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Nurten Handmade",
  description: "Nurten Handmade hakkında bilgi.",
};

export default function HakkimizdaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        Hakkımızda
      </h1>

      <p className="text-neutral-800 leading-relaxed mb-4">
        Buraya Nurten Handmade’in hikâyesini, nasıl başladığını, değerlerini
        ve vizyonunu yazabilirsiniz.
      </p>

      <p className="text-neutral-800 leading-relaxed">
        Örneğin: el yapımı seramiklere olan tutkunuz, atölyenin kuruluşu,
        üretim süreci, kullanılan malzemeler vb.
      </p>
    </main>
  );
}
