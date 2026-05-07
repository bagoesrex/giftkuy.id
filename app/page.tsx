import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-full flex justify-center">
        <section className="w-full max-w-xl border-2 border-black bg-[#F6F7FF] px-6 py-8 shadow-[6px_6px_0_0_#000]">
          <header className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase">GiftKuy.id</p>
            <h1
              className={`${pressStart2P.className} mt-4 text-xl leading-tight`}
            >
              Coming Soon
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-800">
              Platform virtual gift untuk mengirim hadiah digital, kado online,
              dan voucher secara cepat dan praktis.
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://instagram.com/giftkuy.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border-2 border-black bg-[#FF4D8D] px-4 py-3 text-sm font-semibold shadow-[4px_4px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] transition"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@giftkuy.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border-2 border-black bg-[#2DE2E6] px-4 py-3 text-sm font-semibold shadow-[4px_4px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] transition"
            >
              TikTok
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
