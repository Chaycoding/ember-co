import Image from "next/image";

const dishes = [
  {
    name: "Binchotan Black Cod",
    description: "Miso-glazed, pickled ginger, charred lime.",
    price: "LKR 4,800",
  },
  {
    name: "Sambal Butter Prawns",
    description: "Tiger prawns, lemongrass, curry leaf butter.",
    price: "LKR 3,900",
  },
  {
    name: "Smoked Duck Bao",
    description: "Five-spice duck, hoisin, pickled cucumber.",
    price: "LKR 2,400",
  },
  {
    name: "Ember Pineapple",
    description: "Coconut miso caramel, toasted rice, lime zest.",
    price: "LKR 1,600",
  },
];

export default function Dishes() {
  return (
    <section id="dishes" className="scroll-mt-4 bg-coal py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[5fr_6fr] lg:items-start">
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-24">
          <Image
            src="/dishes/dish-1.jpg"
            alt="Binchotan black cod, miso-glazed"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Signatures</p>
            <h2 className="font-display text-4xl md:text-5xl">
              From the <em className="text-ember">coals</em>
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-cream/10">
            {dishes.map((d, i) => (
              <li key={d.name} className="reveal py-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-ember">0{i + 1}</span>
                  <h3 className="font-display text-2xl md:text-3xl">{d.name}</h3>
                  <span
                    aria-hidden
                    className="min-w-4 flex-1 self-end border-b border-dotted border-cream/30 pb-1.5"
                  />
                  <span className="whitespace-nowrap text-gold">{d.price}</span>
                </div>
                <p className="mt-2 pl-9 text-sm text-cream/70">{d.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}