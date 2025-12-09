// src/components/Faq.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Soğuk porselen yıkanır mı?",
    answer:
      "Soğuk porselen suya dayanıklıdır ama bulaşık makinesi veya uzun süre suda bekletmeye uygun değildir. Tozlandığında hafif nemli bir bezle silmek yeterlidir. Direkt suyun altında yıkamak, özellikle ince ve narin parçaların zamanla zayıflamasına neden olabilir.",
  },
  {
    question: "Soğuk porselen hamuru neden çatlar?",
    answer:
      "Genellikle çok hızlı kuruma, kalın uygulama veya hamurun iyi yoğrulmaması çatlaklara sebep olur. İnce katlar halinde çalışmak, hamuru kullanmadan önce iyice yoğurmak ve obje kururken ani ısı değişimlerinden uzak tutmak çatlamayı azaltır.",
  },
  {
    question: "Soğuk porselen hamuru nedir?",
    answer:
      "Soğuk porselen hamuru, fırın gerektirmeyen, hava ile kuruyan bir el işi hamurudur. Soğuk seramik ile aynı şeyi ifade etmek için de kullanılır. Genellikle beyaz tutkal, nişasta ve birkaç ek malzeme ile hazırlanır ve kuruduktan sonra sert, porselene benzer bir görünüm alır.",
  },
  {
    question: "Porselen nasıl yapılır ve hangi malzemeler kullanılır?",
    answer:
      "Klasik porselen, özel kil karışımlarının yüksek sıcaklıkta (fırında) pişirilmesiyle yapılır. Soğuk porselen ise evde hazırlanabilen, fırın gerektirmeyen hobi versiyonudur. Genellikle beyaz tutkal, nişasta, az miktarda yağ ve nemlendirici benzeri malzemeler kullanılır. Kuruduktan sonra zımparalanabilir, boyanabilir ve verniklenebilir.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <h2 className="text-xl font-semibold tracking-tight">
        Sık Sorulan Sorular – Soğuk Porselen
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-neutral-700">
        Soğuk porselen ve soğuk seramik ile ilgili en merak edilen soruları
        senin için topladım. Aklına takılan başka şeyler olursa Instagram&apos;dan
        her zaman sorabilirsin. 💌
      </p>

      <div className="mt-6 divide-y divide-neutral-200 border border-neutral-200 bg-[#fdf5ea]">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
              >
                <span className="font-medium text-neutral-900">
                  {item.question}
                </span>
                <span className="ml-4 text-lg">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-sm text-neutral-700">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
