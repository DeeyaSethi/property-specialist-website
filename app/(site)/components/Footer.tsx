export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="text-[--color-navy] font-semibold">Property Specialist</div>
          <div className="mt-2 text-sm">Delhi NCR & Vrindavan</div>
          <a className="mt-2 inline-block text-sm underline" href="tel:+919910070102">+91 99100 70102</a>
        </div>
        <div className="text-sm">
          <div>Quick Links</div>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href="/developers" className="hover:underline">Developers</a>
            <a href="/investors" className="hover:underline">Investors</a>
            <a href="/buyers" className="hover:underline">Buyers</a>
            <a href="/finance" className="hover:underline">Finance</a>
            <a href="/podcast" className="hover:underline">Podcast</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Property Specialist</div>
    </footer>
  );
}


