export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cream/10 bg-coal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            Ember <span className="text-ember">&amp;</span> Co.
          </p>
          <p className="mt-3 max-w-xs text-sm text-cream/60">
            Contemporary Asian-fusion, cooked over live fire.
          </p>
        </div>
        <div className="text-sm text-cream/70">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Visit</p>
          <p>42 Galle Road, Colombo 03</p>
          <p className="mt-1">+94 11 234 5678</p>
          <p className="mt-1">hello@emberandco.lk</p>
        </div>
        <div className="text-sm text-cream/70">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Hours</p>
          <p>Tue – Fri · 6pm – 11pm</p>
          <p className="mt-1">Sat – Sun · 12pm – 11pm</p>
          <div className="mt-5 flex gap-5">
            <a href="#" className="transition hover:text-cream">Instagram</a>
            <a href="#" className="transition hover:text-cream">Facebook</a>
          </div>
        </div>
      </div>
      <p className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Ember &amp; Co. Fictional restaurant for demonstration.
      </p>
    </footer>
  );
}