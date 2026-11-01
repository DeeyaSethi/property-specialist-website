import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#1e3a8a'}} className="text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-no-bg.png"
                alt="Property Specialist Logo"
                width={48}
                height={48}
                className="object-contain filter brightness-0 invert"
              />
              <div style={{color: 'white'}} className="font-bold text-xl font-serif">Property Specialist</div>
            </div>
            <div style={{color: 'white'}} className="text-sm opacity-90">Plots and farmland in Vrindavan, Sonipat and Gurgaon.</div>
            <a style={{color: '#d4af37'}} className="inline-block hover:text-white transition-colors font-semibold" href="tel:+919910070102">+91 99100 70102</a>
            <div style={{color: 'white'}} className="text-sm opacity-90">Cottage No 13 A, Balraj Khanna Marg, near Shadipur Metro Station, Patel Nagar, New Delhi</div>
          </div>

          {/* Explore */}
          <div className="space-y-3">
            <h3 style={{color: 'white'}} className="font-bold text-lg">Explore</h3>
            <a href="/listings" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Plots</a>
            <a href="/about" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">About</a>
            <a href="/contact" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Contact</a>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 style={{color: 'white'}} className="font-bold text-lg">Services</h3>
            <a href="/buyers" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Home Buyers</a>
            <a href="/investors" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Investors</a>
            <a href="/finance" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Finance &amp; Loans</a>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h3 style={{color: 'white'}} className="font-bold text-lg">Locations</h3>
            <a href="/plots-in-sonipat" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Plots in Sonipat</a>
            <a href="/plots-in-gurgaon" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Plots in Gurgaon</a>
            <a href="/farmland-near-vrindavan" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors text-sm">Farmland near Vrindavan</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div style={{color: 'white'}}>© {new Date().getFullYear()} Property Specialist · In real estate since 2010</div>
          <div style={{color: 'white'}}>manojsethi@propertyspecialist.in · Open every day, 9 AM to 7 PM</div>
        </div>
      </div>
    </footer>
  );
}
