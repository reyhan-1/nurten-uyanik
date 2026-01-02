import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Nurten Handmade",
  description: "Nurten Handmade ile iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed]">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-20">
        {/* Page heading */}
        <header className="mb-10 md:mb-12">
          <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500">
            İletişim
          </p>
          <p className="mt-4 text-sm md:text-base text-neutral-700 leading-relaxed">
            Atölye, online dersler, siparişler veya iş birlikleri ile ilgili
            sorularınız için aşağıdaki formu doldurabilir ya da diğer kanallar
            üzerinden bize ulaşabilirsiniz.
          </p>
        </header>

        {/* MESAJ FORMU – minimal, no rounded corners */}
        <section className="space-y-5">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">
            Mesaj Formu
          </h2>

          <form method="POST" action="/api/contact" className="space-y-5">
            {/* Ad Soyad + E-posta */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 block w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none rounded-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/15"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 block w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none rounded-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/15"
                />
              </div>
            </div>

            {/* Konu */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                Konu
              </label>
              <select
                name="topic"
                defaultValue=""
                className="mt-2 block w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none rounded-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/15"
              >
                <option value="" disabled>
                  Bir konu seçin
                </option>
                <option value="online-dersler">Online Dersler</option>
                <option value="atolye">Atölye / Workshop</option>
                <option value="ozel-gun">Özel Gün / Etkinlik</option>
                <option value="siparis">Özel Sipariş</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            {/* Mesaj */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
                Mesajınız
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 block w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none rounded-none resize-vertical focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/15"
              />
            </div>

            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Bilgileriniz yalnızca size dönüş yapmak için kullanılacaktır.
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white tracking-tight rounded-none transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900/40"
            >
              Mesajı Gönder
            </button>
          </form>
        </section>

        {/* SOCIAL / OTHER CONTACT – texty, As Ever style */}
        <section className="mt-12 md:mt-14 space-y-4">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">
            Diğer İletişim Kanalları
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
            İsterseniz{" "}
            <span className="font-medium">buradan da ulaşabilirsiniz:</span>
          </p>

          <div className="space-y-2 text-sm md:text-base text-neutral-800">
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/..."
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-[3px] decoration-neutral-400 hover:decoration-neutral-900"
              >
                @nurtenhandmade
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/..."
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-[3px] decoration-neutral-400 hover:decoration-neutral-900"
              >
                WhatsApp üzerinden yazın
              </a>
            </p>

            <p>
              E-posta:{" "}
              <a
                href="mailto:info@..."
                className="underline underline-offset-[3px] decoration-neutral-400 hover:decoration-neutral-900"
              >
                info@...
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
