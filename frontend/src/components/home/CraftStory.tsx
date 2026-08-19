"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function CraftStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const replayVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setEnded(false);
  };

  return (
    <section className="bg-[var(--background)]  py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          {/* Top Section */}
          <div className="grid md:grid-cols-2">
            {/* Video */}
            <div className="relative h-[260px] md:h-[420px] overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                onEnded={() => setEnded(true)}
              >
                <source src="/videos/artisan.mp4" type="video/mp4" />
              </video>

              {ended && (
                <button
                  onClick={replayVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <Play
                      className="ml-1 text-foreground"
                      size={24}
                      fill="currentColor"
                    />
                  </div>
                </button>
              )}
            </div>

            {/* Content */}
            <div className="relative flex items-center px-8 md:px-14 py-10 md:py-0">
              <div className="max-w-md">
                <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
                  Rooted in
                  <span className="italic text-[var(--accent)]"> Tradition.</span>
                  <br />
                  Made for Today.
                </h2>

                <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                  Every formulation at Anart Pharmacy is prepared following
                  time-tested Ayurvedic principles, sourced from trusted
                  herbs and checked for purity before it reaches you.
                </p>

              <Link
  href="/our-story"
  className="inline-flex items-center mt-8 btn-accent px-6 py-3 hover:scale-105 transition-all duration-300"
>
  Discover Our Story →
</Link>
              </div>

              {/* Decorative Pattern */}
              <div className="hidden lg:block absolute right-10 top-10 opacity-15">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <path
                    d="M100 10C100 40 90 60 70 80"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M120 30C120 60 135 90 165 120"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M80 50C60 70 50 95 50 130"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                  <path
                    d="M130 70C155 85 175 105 185 140"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="border-t border-[var(--border)]">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <Feature
                icon={<Truck size={20} />}
                title="Pan-India Shipping"
                text="Reliable, trackable delivery"
              />

              <Feature
                icon={<RotateCcw size={20} />}
                title="Easy Returns"
                text="Hassle free returns"
              />

              <Feature
                icon={<ShieldCheck size={20} />}
                title="Secure Payments"
                text="100% safe checkout"
              />

              <Feature
                icon={<Headphones size={20} />}
                title="24/7 Support"
                text="We're here to help"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 p-5 md:p-6 border-r border-[var(--border)] last:border-r-0">
      <div className="text-foreground">{icon}</div>

      <div>
        <h4 className="text-sm font-medium text-foreground">
          {title}
        </h4>

        <p className="text-xs text-[var(--text-secondary)]">
          {text}
        </p>
      </div>
    </div>
  );
}