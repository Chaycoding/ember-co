import Image from "next/image";

type DishCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function DishCard({ name, description, price, image }: DishCardProps) {
  return (
    <article className="reveal group overflow-hidden rounded-2xl bg-charcoal">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl">{name}</h3>
          <span className="whitespace-nowrap text-sm text-gold">{price}</span>
        </div>
        <p className="mt-2 text-sm text-cream/70">{description}</p>
      </div>
    </article>
  );
}