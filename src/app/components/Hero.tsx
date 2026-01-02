"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

type HeroProps = {
  /** Red announcement bar at the top */
  announcementText?: ReactNode;
  announcementLinkLabel?: string;
  announcementLinkHref?: string;

  /** Main hero content */
  title: ReactNode;
  description?: ReactNode;

  /** Primary CTA button */
  primaryCtaLabel?: string;
  primaryCtaHref?: string;

  /** Layout & style options */
  backgroundImageUrl?: string; // e.g. "/hero-placeholder.jpg"
  heightClassName?: string; // e.g. "h-[420px]" or "h-[520px]"
  align?: "center" | "left"; // text alignment + flex alignment
  sectionClassName?: string; // extra classes for <section>
  contentClassName?: string; // extra classes for inner content wrapper
};

export function Hero({
  announcementText,
  announcementLinkLabel,
  announcementLinkHref,

  title,
  description,

  primaryCtaLabel,
  primaryCtaHref,

  backgroundImageUrl = "/hero-placeholder.jpg",
  heightClassName = "h-[420px]",
  align = "center",
  sectionClassName = "",
  contentClassName = "",
}: HeroProps) {
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

  const isLeft = align === "left";

  return (
    <section ref={heroRef} className={sectionClassName}>
      {/* Announcement bar (optional) */}
      {announcementText && (
        <div className="bg-[#a52b25] text-center text-xs font-medium text-[#fdf5ea]">
          <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2">
            <span className="mr-1">{announcementText}</span>

            {announcementLinkLabel && announcementLinkHref && (
              <a
                href={announcementLinkHref}
                className="underline underline-offset-2 hover:text-white"
              >
                {announcementLinkLabel}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Main hero block */}
      <div className="relative bg-black">
        <div
          className={`relative mx-auto max-w-6xl overflow-hidden ${heightClassName}`}
        >
          {/* Background: gradient + image */}
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gradient-to-t from-black via-black/60 to-black/20" />
            {backgroundImageUrl && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
              />
            )}
          </div>

          {/* Content */}
          <div
            className={`relative flex h-full flex-col justify-center px-4 text-white ${
              isLeft
                ? "items-start text-left"
                : "items-center text-center"
            } ${contentClassName}`}
          >
            <h1 className="hero-heading text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl">
              {title}
            </h1>

            {description && (
              <div className="mt-3 max-w-xl text-sm text-neutral-200 sm:text-base">
                {description}
              </div>
            )}

            {primaryCtaLabel && primaryCtaHref && (
              <div className="hero-button mt-6">
                <a
                  href={primaryCtaHref}
                  className="bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-black"
                >
                  {primaryCtaLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
