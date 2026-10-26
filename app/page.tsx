import Section from "./(site)/components/ui/Section";
import Button from "./(site)/components/ui/Button";
import Image from "next/image";
import Accordion from "./(site)/components/ui/Accordion";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Search/Contact Banner - Homepage Only */}
      <div className="bg-[--color-navy] text-white py-2 px-6 flex justify-between items-center text-sm md:text-base border-b border-white/10 royal-shadow">
        <div className="flex items-center gap-2">
          <span className="hidden md:inline font-medium opacity-90">Direct Inquiry:</span>
          <a href="tel:+919910070102" className="flex items-center gap-2 font-bold hover:text-[--color-gold] transition-colors">
            <span className="p-1 bg-white/10 rounded-full">📞</span>
            9910070102
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/919910070102?text=Hi%2C%20I%20saw%20propertyspecialist.in%20and%20want%20to%20talk%20about%20plots" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[--color-gold] transition-colors border-l border-white/20 pl-4">
             WhatsApp Connect
          </a>
        </div>
      </div>

      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/DelhiNCRSkyline.jpg" alt="Delhi NCR Skyline" fill priority className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[--color-navy]/20" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-2 flex justify-center lg:justify-start">
              <Image 
                src="/images/logo-no-bg.png" 
                alt="Property Specialist Logo" 
                width={320} 
                height={160} 
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[--color-navy] font-serif mb-3 leading-tight">
              Residential Plots & Farmland in Vrindavan, Sonipat & Gurgaon
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl lg:max-w-none leading-relaxed">
              Straight answers on price, approvals and what&apos;s actually worth buying. We check the paperwork and visit the site with you. Just call or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact" className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Button className="px-10 py-4 text-lg royal-shadow hover:royal-shadow-lg transform hover:scale-105 transition-all duration-300 royal-gold-bg border-2 royal-gold-border">
                  Start Your Journey
                </Button>
              </a>
              <a href="#sections" className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <Button variant="secondary" className="px-10 py-4 text-lg shadow-md hover:royal-shadow-lg transform hover:scale-105 transition-all duration-300 border-2 royal-gold-border hover:royal-gold-bg hover:text-white">
                  Explore Opportunities
                </Button>
              </a>
            </div>

            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4 opacity-100" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Quick Inquiry by Location:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="#sonipat" className="px-6 py-2 rounded-full border-2 border-[--color-gold] text-white font-bold hover:bg-[--color-gold] hover:text-[--color-navy] transition-all duration-300 text-sm shadow-lg backdrop-blur-sm bg-black/10">
                   Sonipat
                </a>
                <a href="#gurgaon" className="px-6 py-2 rounded-full border-2 border-[--color-gold] text-white font-bold hover:bg-[--color-gold] hover:text-[--color-navy] transition-all duration-300 text-sm shadow-lg backdrop-blur-sm bg-black/10">
                   Gurgaon
                </a>
                <a href="#vrindavan" className="px-6 py-2 rounded-full border-2 border-[--color-gold] text-white font-bold hover:bg-[--color-gold] hover:text-[--color-navy] transition-all duration-300 text-sm shadow-lg backdrop-blur-sm bg-black/10">
                   Vrindavan
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative blueprint-overlay">
              <Image 
                src="/images/ResidentialProperties.jpg" 
                alt="Premium Residential Properties" 
                width={500} 
                height={400} 
                className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-navy]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Meet Manoj Sethi Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--color-navy] mb-0 font-serif leading-tight">
              Meet <span className="text-[--color-gold]">Manoj Sethi</span>
            </h2>
            
            {/* Profile Image */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                <Image 
                  src="/images/manoj-sethi.jpg" 
                  alt="Manoj Sethi - Property Specialist" 
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-[#d4af37] text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xl border-4 border-white" style={{backgroundColor: '#d4af37', color: 'white', zIndex: 20}}>
                  28 Years
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                <span className="font-bold text-[--color-navy] bg-[--color-gold]/10 px-2 py-1 rounded">28 years</span> in property and <span className="font-bold text-[--color-gold] bg-[--color-navy]/5 px-2 py-1 rounded">₹250+ crore</span> in deals closed. Manoj works across Delhi NCR and Vrindavan, and his job is to tell you the truth about a plot before you buy it.
              </p>
              
              <div className="flex justify-center">
                <a href="/about">
                  <Button className="px-10 py-4 text-lg royal-shadow hover:royal-shadow-lg transform hover:scale-105 transition-all duration-300 bg-[--color-navy] text-white hover:bg-[--color-gold] border-2 border-[--color-navy] hover:border-[--color-gold] font-bold">
                    Learn About Manoj →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sonipat Section */}
      <Section id="sonipat" className="bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/sonipat-farmhouse.png" alt="Sonipat" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold font-serif">Sonipat</h3>
                <p className="text-lg opacity-90">Plots & farmland</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[--color-navy] font-serif mb-6">Plots & farmland in Sonipat</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Most buyers here are weighing plots around Kundli, NH-44, the KMP Expressway and the new university belt. Tell us your budget and how you want to use it, and we&apos;ll show you which pockets are worth it and which to avoid. We check DTCP approval and clear title before recommending anything, and we take you to the site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:+919910070102">
                  <Button className="px-10 py-4 royal-gold-bg text-white font-bold rounded-xl shadow-lg">Call For Details</Button>
                </a>
                <a href="https://wa.me/919910070102?text=I'm interested in properties in Sonipat" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="px-10 py-4 border-2 border-[--color-navy] text-[--color-navy] font-bold rounded-xl">WhatsApp Inquiry</Button>
                </a>
              </div>
              <a href="/plots-in-sonipat" className="inline-block mt-5 font-semibold text-[--color-navy] hover:text-[--color-gold]">View all plots in Sonipat →</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Gurgaon Section */}
      <Section id="gurgaon" className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[--color-navy] font-serif mb-6">Plots & farmhouse land in Gurgaon</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We work the plot and farmhouse side of Gurgaon. Think New Gurgaon sectors, the Dwarka Expressway belt, and farmhouse land towards Sohna and Pataudi. Tell us how you want to use it and we&apos;ll give you an honest read on what your budget gets, and what to check before you pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:+919910070102">
                  <Button className="px-10 py-4 royal-gold-bg text-white font-bold rounded-xl shadow-lg">Inquire Now</Button>
                </a>
                <a href="https://wa.me/919910070102?text=I'm interested in properties in Gurgaon" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="px-10 py-4 border-2 border-[--color-navy] text-[--color-navy] font-bold rounded-xl">WhatsApp Connect</Button>
                </a>
              </div>
              <a href="/plots-in-gurgaon" className="inline-block mt-5 font-semibold text-[--color-navy] hover:text-[--color-gold]">View all plots in Gurgaon →</a>
            </div>
            <div className="order-1 md:order-2 relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/gurgaon-skyline.png" alt="Gurgaon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold font-serif">Gurgaon</h3>
                <p className="text-lg opacity-90">Plots & farmhouse land</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vrindavan Section */}
      <Section id="vrindavan" className="bg-[#fdfbf7] border-t border-gray-100 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/vrindavan-luxury.png" alt="Vrindavan" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold font-serif">Vrindavan</h3>
                <p className="text-lg opacity-90">Plots & farmland</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[--color-navy] font-serif mb-6">Plots & farmland near Vrindavan</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Plots and farmland around Vrindavan and Mathura, close to the temples, Parikrama Marg and the Yamuna Expressway. A lot of land here changes hands without clean approvals, so we check MVDA approval and title first, and walk the site with you before you decide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:+919910070102">
                  <Button className="px-10 py-4 royal-gold-bg text-white font-bold rounded-xl shadow-lg">Get Information</Button>
                </a>
                <a href="https://wa.me/919910070102?text=I'm interested in properties in Vrindavan" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="px-10 py-4 border-2 border-[--color-navy] text-[--color-navy] font-bold rounded-xl">Inquire on WhatsApp</Button>
                </a>
              </div>
              <a href="/farmland-near-vrindavan" className="inline-block mt-5 font-semibold text-[--color-navy] hover:text-[--color-gold]">View farmland near Vrindavan →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="sections" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3 font-serif">Our Services</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            What we help with, whether you&apos;re buying land to live on, to invest, or to build
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <a href="/developers" className="group premium-card rounded-xl hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image src="/images/developers.jpg" alt="For Developers" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">For Developers</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Sales and marketing help for developers launching plotted and housing projects.</p>
              <div className="flex items-center text-[--color-navy] font-semibold group-hover:text-[--color-gold] transition-colors">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
          
          <a href="/investors" className="group premium-card rounded-xl hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image src="/images/investors.jpg" alt="For Investors" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Investors & HNIs</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Land picked for investors, with approvals and title checked first.</p>
              <div className="flex items-center text-[--color-navy] font-semibold group-hover:text-[--color-gold] transition-colors">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
          
          <a href="/buyers" className="group premium-card rounded-xl hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image src="/images/hero-buyers.jpg" alt="For Home Buyers" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Home Buyers</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Help finding and buying a plot or home across Delhi NCR and Vrindavan.</p>
              <div className="flex items-center text-[--color-navy] font-semibold group-hover:text-[--color-gold] transition-colors">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
          
          <a href="/finance" className="group premium-card rounded-xl hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image src="/images/Finance.jpg" alt="Finance & Loans" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Finance & Loans</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Home loans, loan against property, and project funding.</p>
              <div className="flex items-center text-[--color-navy] font-semibold group-hover:text-[--color-gold] transition-colors">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
          
          <a href="/podcast" className="group premium-card rounded-xl hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image src="/images/Podcast.jpg" alt="Podcast & Insights" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Podcast & Insights</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">Industry trends, market insights: The Real Estate Edge podcast.</p>
              <div className="flex items-center text-[--color-navy] font-semibold group-hover:text-[--color-gold] transition-colors">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
          
          <a href="/about" className="group premium-card rounded-xl border-2 border-[--color-navy] hover:border-[--color-gold] transition-all duration-300 overflow-hidden h-full flex flex-col" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #c5a880 100%)'}}>
            <div className="p-6 flex-1 flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">About Manoj Sethi</h3>
              <p className="text-white/90 text-sm mb-4 flex-1">Meet Manoj Sethi, 28 years in real estate.</p>
              <div className="flex items-center text-white font-semibold group-hover:text-white/90 transition-colors">
                <span>Meet The Founder</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        </div>
      </Section>

      {/* Property Showcase Section */}
      <Section className="border-t border-gray-200 bg-[--color-muted] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/NoidaDevelopment.jpg" alt="" fill className="object-cover opacity-3" />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-4 font-serif">Property Portfolio</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The kinds of property we handle across Delhi NCR and Vrindavan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group premium-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/images/ResidentialProperties.jpg" alt="Residential Properties" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4" style={{color: 'white'}}>
                  <h3 className="text-xl font-bold font-serif mb-1" style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Residential</h3>
                  <p className="text-sm font-medium" style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Premium Apartments & Villas</p>
                </div>
              </div>
            </div>
            
            <div className="group premium-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/images/CommercialSpaces.jpg" alt="Commercial Spaces" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4" style={{color: 'white'}}>
                  <h3 className="text-xl font-bold font-serif mb-1" style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Commercial</h3>
                  <p className="text-sm font-medium" style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Office Spaces & Retail</p>
                </div>
              </div>
            </div>
            
            <div className="group premium-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/images/LuxuryFarmhouses.jpg" alt="Luxury Farmhouses" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4" style={{color: 'white'}}>
                  <h3 className="text-xl font-bold font-serif mb-1" style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Farmhouses</h3>
                  <p className="text-sm font-medium" style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Luxury Rural Retreats</p>
                </div>
              </div>
            </div>
            
            <div className="group premium-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/images/IndustrialLand.jpg" alt="Industrial Land" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4" style={{color: 'white'}}>
                  <h3 className="text-xl font-bold font-serif mb-1" style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Industrial</h3>
                  <p className="text-sm font-medium" style={{color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Land & Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Excellence Section */}

      <Section className="border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3 font-serif">Why Choose Property Specialist</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            28 years in the Delhi NCR, Sonipat and Vrindavan land market, and straight with you at every step
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">28</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Years in land</h3>
              <p className="text-gray-600 text-sm">Buying and selling plots and farmland across Delhi NCR, Sonipat and Vrindavan.</p>
            </div>
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">3</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Markets we know</h3>
              <p className="text-gray-600 text-sm">Vrindavan, Sonipat and Gurgaon. We stick to the areas we know well instead of claiming everywhere.</p>
            </div>
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">✓</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Checked first</h3>
              <p className="text-gray-600 text-sm">We verify approvals and clear title before recommending a plot, and we visit the site with you.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3 font-serif">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            Get answers to common questions about our real estate services
          </p>
          <div className="text-left max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Accordion
              items={[
                {
                  id: "areas",
                  question: "Which areas do you serve?",
                  answer: "We specialize in Delhi NCR (Noida, Gurgaon, Delhi) and Vrindavan, plus nearby industrial corridors and emerging growth areas.",
                },
                {
                  id: "invest",
                  question: "What types of investments do you cover?",
                  answer: "Our portfolio includes residential properties, commercial spaces, luxury farmhouses, industrial land, and agriculture-linked investment opportunities.",
                },
                {
                  id: "process",
                  question: "How do you ensure due diligence?",
                  answer: "We conduct thorough verification of titles, developer credentials, legal approvals, and market analysis to align investments with your specific objectives.",
                },
                {
                  id: "experience",
                  question: "What makes Property Specialist different?",
                  answer: "28 years in these markets, and we check the approvals and title before we recommend a plot. No pressure, and no surprises later.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-navy] text-[--color-navy] px-6 py-3 rounded-full text-base font-semibold mb-8">
            <span className="w-3 h-3 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Get Started?
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy] font-serif">Want to see some plots?</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Call or WhatsApp and tell us what you&apos;re looking for. We&apos;ll get back to you quickly.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-12">
            <a href="tel:+919910070102" className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Button className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                📞 Call Now
              </Button>
          </a>
          <a
              href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20discuss%20premium%20real%20estate%20opportunities"
            target="_blank"
            rel="noopener noreferrer"
              className="animate-fade-in-up" 
              style={{animationDelay: '0.3s'}}
            >
              <Button variant="secondary" className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                💬 WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </Section>
      </main>
  );
}
