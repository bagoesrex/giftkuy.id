import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

const WA_HREF =
  "https://wa.me/6283897335445?text=Halo%20GiftKuy%2C%20saya%20mau%20tanya%20gift%20digital";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FF6B6B] text-white"
    >
      <HeroDecorations />

      <MaxWidthWrapper className="flex min-h-screen items-center justify-center py-20 md:pt-30 max-w-6xl">
        <div className="">
          <div className="max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              <IconHeart className="size-4 text-white" />
              Open by Request
            </p>
            <h1 className="mt-6 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.35rem] lg:leading-snug">
              Satu Platform. Banyak Cara Kirim Gift Digital yang Berkesan.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/95 sm:text-lg">
              Gift digital custom untuk orang tersayang. Pilih contoh, kirim
              detail via WhatsApp, lalu GiftKuy bantu buatkan dengan sentuhan
              manis.
            </p>
          </div>

          <div className="hidden sm:block">
            <div className="mx-auto mt-10 max-w-3xl md:mt-12">
              <div className="flex flex-col gap-3 rounded-full border-2 border-white bg-white p-2 shadow-lg sm:flex-row sm:items-center sm:gap-2 sm:pr-2 sm:pl-4">
                <div className="flex min-h-12 flex-1 items-center gap-3 px-4 sm:px-2">
                  <IconGlobe className="size-5 shrink-0 text-[#FF6B6B]" />
                  <span className="truncate text-sm font-semibold text-[#FF6B6B] sm:text-base">
                    giftkuy.id/contoh-gift
                  </span>
                </div>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF6B6B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e85d5d] sm:px-8"
                >
                  <IconWhatsApp className="size-5" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border-2 border-white px-5 py-2.5 text-center text-xs font-medium text-white/95 sm:text-sm">
            <IconHeart className="size-3.5 shrink-0 text-white" />
            Manual request • Fast response • MVP friendly
            <IconHeart className="size-3.5 shrink-0 text-white" />
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function HeroDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <IconStar className="absolute left-[8%] top-[22%] size-6 text-white/70" />
      <IconStar className="absolute right-[10%] top-[28%] size-5 text-white/55" />
      <IconHeart className="absolute bottom-[38%] left-[5%] size-5 text-white/50" />
      <IconHeart className="absolute right-[6%] bottom-[32%] size-6 text-white/45" />
      <svg
        className="absolute left-[15%] top-[40%] h-16 w-24 text-white/35"
        viewBox="0 0 96 24"
        fill="none"
      >
        <path
          d="M4 12h88"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-7.5-4.35-10-9.5C.5 8.5 2 5.5 5.5 5.5c2 0 3.5 1.5 4.5 3C11 7 12.5 5.5 14.5 5.5 18 5.5 19.5 8.5 22 11.5 19.5 16.5 12 21 12 21Z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.9 5.7 21 8 14 2 9.4h7.6L12 2Z" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 000 20 15 15 0 000-20Z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
