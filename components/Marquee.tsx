const words = [
  "Charcoal",
  "Sambal",
  "Miso",
  "Binchotan",
  "Lemongrass",
  "Five-spice",
  "Yuzu",
];

export default function Marquee() {
  return (
    <div aria-hidden className="marquee-mask border-y border-cream/10 py-6">
      <div className="marquee flex w-max whitespace-nowrap text-xs uppercase tracking-[0.4em] text-cream/50">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8">{w}</span>
            <span className="h-1 w-1 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}