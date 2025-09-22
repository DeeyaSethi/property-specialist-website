import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#1e3a8a'}} className="text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
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
            <div style={{color: 'white'}} className="font-medium">Premier Real Estate Advisory</div>
            <div style={{color: 'white'}} className="font-medium">Delhi NCR & Vrindavan</div>
            <a 
              style={{color: '#d4af37'}} 
              className="inline-block hover:text-white transition-colors font-semibold royal-glow" 
              href="tel:+919910070102"
            >
              📞 +91 99100 70102
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 style={{color: 'white'}} className="font-bold text-lg">Quick Links</h3>
            <div className="space-y-3">
              <a href="/developers" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">Developers</a>
              <a href="/investors" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">Investors</a>
              <a href="/buyers" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">Home Buyers</a>
              <a href="/finance" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">Finance & Loans</a>
              <a href="/podcast" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">Podcast</a>
              <a href="/about" style={{color: 'white'}} className="block hover:text-yellow-300 transition-colors font-medium">About</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 style={{color: 'white'}} className="font-bold text-lg">Contact Info</h3>
            <div className="space-y-3">
                     <div style={{color: 'white'}} className="font-medium">📧 manojsethi@propertyspecialist.in</div>
                     <div style={{color: 'white'}} className="font-medium">🕒 Every Day: 9:00 AM - 7:00 PM</div>
                     <div style={{color: 'white'}} className="font-medium">📍 Cottage No 13 A Balraj Khanna Marg, Near Shadi Pur Metro Station, Patel Nagar</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div style={{color: 'white'}} className="font-medium">© {new Date().getFullYear()} Property Specialist. All rights reserved.</div>
          <div className="mt-2 sm:mt-0" style={{color: 'white'}}>
            <span style={{color: '#d4af37'}} className="font-bold royal-glow">25+ Years</span> of Real Estate Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}


