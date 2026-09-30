import Image from "next/image";

const embers = [
  { left: "6%", size: 6, dur: 9, delay: 0 },
{ left: "17%", size: 4, dur: 11, delay: 3 },
{ left: "29%", size: 7, dur: 8, delay: 1.5 },
  { left: "41%", size: 4, dur: 12, delay: 5 },
  { left: "54%", size: 6, dur: 10, delay: 2 },
  { left: "66%", size: 7, dur: 9, delay: 6 },
  { left: "78%", size: 5, dur: 11, delay: 4 },
  { left: "90%", size: 6, dur: 8, delay: 0.5 },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Flames licking a grill loaded with skewers"
        fill
        priority
        quality={80}
        className="object-cover object-bottom hero-zoom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#1a1512,rgba(26,21,18,0.6),rgba(26,21,18,0.35))]" />
     <div className="glow absolute -bottom-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-ember/30 blur-3xl" />


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
        <p className="hero-in d1 mb-5 text-xs uppercase tracking-[0.35em] text-gold">
          Asian-fusion · Colombo
        </p>
       <h1 className="hero-in d2 max-w-4xl font-display text-6xl leading-[1.02] sm:text-8xl lg:text-9xl">

          Fire, <em className="text-ember">fused.</em>
        </h1>
        <p className="hero-in d3 mt-6 max-w-md text-lg text-cream/80">
          Contemporary Asian cooking, finished over live coals in the heart of the city.
        </p>
        <div className="hero-in d4 mt-10 flex flex-col gap-4 sm:flex-row">
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