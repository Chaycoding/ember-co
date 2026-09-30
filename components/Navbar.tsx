import MobileMenu from "./MobileMenu";

const links = [
  { label: "About", href: "#about" },
  { label: "Dishes", href: "#dishes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="nav-bg fixed inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-xl tracking-wide">
          Ember <span className="text-ember">&amp;</span> Co.
        </a>
        <ul className="hidden gap-10 text-xs uppercase tracking-[0.2em] text-cream/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-cream">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="rounded-full border border-cream/40 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-cream hover:text-charcoal"
          >
            Reserve
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}