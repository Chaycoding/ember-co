import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full">
          <Image
            src="/about.jpg"
            alt="Inside the Ember & Co. dining room"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Our story</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Cooked over fire, <em className="text-ember">plated with care.</em>
          </h2>
          <p className="mt-6 text-cream/75">
            Ember &amp; Co. brings the smoke and spice of Asian street kitchens to a warm,
            low-lit room in Colombo. We cook on charcoal, use island produce, and keep the
            menu small so every plate gets our full attention.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8 text-sm">
            <div>
              <dt className="text-cream/50">Kitchen</dt>
              <dd className="mt-1 font-display text-lg">Live charcoal</dd>
            </div>
            <div>
              <dt className="text-cream/50">Open</dt>
              <dd className="mt-1 font-display text-lg">Tue – Sun</dd>
            </div>
            <div>
              <dt className="text-cream/50">Seats</dt>
              <dd className="mt-1 font-display text-lg">48 guests</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}