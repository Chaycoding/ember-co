import Image from "next/image";

const embers = [
  { left: "6%", size: 4, dur: 9, delay: 0 },
  { left: "17%", size: 3, dur: 11, delay: 3 },
  { left: "29%", size: 5, dur: 8, delay: 1.5 },
  { left: "41%", size: 3, dur: 12, delay: 5 },
  { left: "54%", size: 4, dur: 10, delay: 2 },
  { left: "66%", size: 5, dur: 9, delay: 6 },
  { left: "78%", size: 3, dur: 11, delay: 4 },
  { left: "90%", size: 4, dur: 8, delay: 0.5 },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Flames licking a grill loaded with skewers"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#1a1512,rgba(26,21,18,0.6),rgba(26,21,18,0.35))]" />
      <div className="absolute -bottom-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-ember/30 blur-3xl" />

      {embers.map((e, i) => (
        <span
          key={i}
          aria-hidden
          className="ember"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDuration: `${e.dur}s`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
          Asian-fusion · Colombo
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          Fire, <em className="text-ember">fused.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg text-cream/80">
          Contemporary Asian cooking, finished over live coals in the heart of the city.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#reserve"
            className="rounded-full bg-ember px-8 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:bg-gold"
          >
            Reserve a table
          </a>
          <a
            href="#dishes"
            className="rounded-full border border-cream/40 px-8 py-3 text-center text-xs uppercase tracking-[0.2em] transition hover:bg-cream hover:text-charcoal"
          >
            See the dishes
          </a>
        </div>
      </div>
    </section>
  );
}