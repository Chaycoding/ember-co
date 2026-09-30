"use client";

import Image from "next/image";
import { useState } from "react";

const dishes = [
  {
    name: "Binchotan Black Cod",
    description: "Miso-glazed, pickled ginger, charred lime.",
    price: "LKR 4,800",
    image: "/dishes/dish-1.jpg",
    alt: "Binchotan black cod, miso-glazed",
  },
  {
    name: "Sambal Butter Prawns",
    description: "Tiger prawns, lemongrass, curry leaf butter.",
    price: "LKR 3,900",
    image: "/dishes/dish-2.jpg",
    alt: "Sambal butter prawns with curry leaf",
  },
  {
    name: "Smoked Duck Bao",
    description: "Five-spice duck, hoisin, pickled cucumber.",
    price: "LKR 2,400",
    image: "/dishes/dish-3.jpg",
    alt: "Smoked duck bao with pickled cucumber",
  },
  {
    name: "Ember Pineapple",
    description: "Coconut miso caramel, toasted rice, lime zest.",
    price: "LKR 1,600",
    image: "/dishes/dish-4.jpg",
    alt: "Charred pineapple with coconut miso caramel",
  },
];

export default function Dishes() {
  const [active, setActive] = useState(0);

  return (
    <section id="dishes" className="scroll-mt-4 bg-coal py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[5fr_6fr] lg:items-start">
  <div className="reveal lg:sticky lg:top-24">
  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal md:aspect-[16/9] lg:aspect-[4/5]">
       {dishes.map((d, i) => (
            <Image
              key={d.image}
              src={d.image}
              alt={d.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              aria-hidden={i !== active}
              className={`object-cover transition-all duration-700 ease-out ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>
        </div>

        <div>
          <div className="reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Signatures</p>
            <h2 className="font-display text-4xl md:text-5xl">
              From the <em className="text-ember">coals</em>
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-cream/10">
            {dishes.map((d, i) => {
              const on = i === active;
              return (
                <li
                  key={d.name}
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="reveal cursor-pointer py-8 outline-none"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-ember">0{i + 1}</span>
                    <h3
                      className={`font-display text-2xl transition duration-300 md:text-3xl ${
                        on ? "translate-x-1.5 text-gold" : ""
                      }`}
                    >
                      {d.name}
                    </h3>
                    <span
                      aria-hidden
                      className={`min-w-4 flex-1 self-end border-b border-dotted pb-1.5 transition-colors duration-300 ${
                        on ? "border-gold" : "border-cream/30"
                      }`}
                    />
                    <span className="whitespace-nowrap text-gold">{d.price}</span>
                  </div>
                  <p className="mt-2 pl-9 text-sm text-cream/70">{d.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}