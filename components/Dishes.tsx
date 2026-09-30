import DishCard from "./DishCard";

const dishes = [
  {
    name: "Binchotan Black Cod",
    description: "Miso-glazed, pickled ginger, charred lime.",
    price: "LKR 4,800",
    image: "/dishes/dish-1.jpg",
  },
  {
    name: "Sambal Butter Prawns",
    description: "Tiger prawns, lemongrass, curry leaf butter.",
    price: "LKR 3,900",
    image: "/dishes/dish-2.jpg",
  },
  {
    name: "Smoked Duck Bao",
    description: "Five-spice duck, hoisin, pickled cucumber.",
    price: "LKR 2,400",
    image: "/dishes/dish-3.jpg",
  },
  {
    name: "Ember Pineapple",
    description: "Coconut miso caramel, toasted rice, lime zest.",
    price: "LKR 1,600",
    image: "/dishes/dish-4.jpg",
  },
];

export default function Dishes() {
  return (
    <section id="dishes" className="scroll-mt-4 bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">Signatures</p>
          <h2 className="font-display text-4xl md:text-5xl">From the coals</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d) => (
            <DishCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}