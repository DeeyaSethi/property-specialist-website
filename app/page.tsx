import Section from "./(site)/components/ui/Section";
import Button from "./(site)/components/ui/Button";
import Image from "next/image";
import Accordion from "./(site)/components/ui/Accordion";

export default function Home() {
  return (
    <main className="font-sans">
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
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl lg:max-w-none leading-relaxed">
              Premier real estate advisory in Delhi NCR & Vrindavan with 25+ years of proven expertise
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
                  25+ Years
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                A leading authority in real estate with <span className="font-bold text-[--color-navy] bg-[--color-gold]/10 px-2 py-1 rounded">28 years of experience</span> and <span className="font-bold text-[--color-gold] bg-[--color-navy]/5 px-2 py-1 rounded">₹250+ crores</span> in successful deals. Providing research-driven insights and strategic guidance across Delhi NCR & Vrindavan.
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

      <Section id="sections" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3 font-serif">Our Services</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored for developers, investors, and home buyers
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
              <p className="text-gray-600 text-sm mb-4 flex-1">Launch and scale projects with proven sales systems and ROI-focused execution.</p>
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
              <p className="text-gray-600 text-sm mb-4 flex-1">Curated investment opportunities with comprehensive due diligence.</p>
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
              <p className="text-gray-600 text-sm mb-4 flex-1">Find your perfect property in Delhi NCR and Vrindavan with expert guidance.</p>
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
              <p className="text-gray-600 text-sm mb-4 flex-1">Complete financing solutions including home loans and project funding.</p>
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
              <p className="text-white/90 text-sm mb-4 flex-1">Meet our founder with 25+ years of real estate expertise and proven track record.</p>
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
              Discover our comprehensive range of premium properties across Delhi NCR & Vrindavan
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
            Three decades of excellence in real estate advisory and project management
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">25+</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Years Experience</h3>
              <p className="text-gray-600 text-sm">Three decades of successful project execution with industry-leading ROI delivery.</p>
            </div>
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">500+</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Projects Completed</h3>
              <p className="text-gray-600 text-sm">Hand-selected investment opportunities with comprehensive due diligence and market analysis.</p>
            </div>
            <div className="text-center premium-card p-6 rounded-xl">
              <div className="w-16 h-16 bg-[--color-navy] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold font-serif">100%</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2 font-serif">Client Satisfaction</h3>
              <p className="text-gray-600 text-sm">Personalized guidance and transparent processes ensuring your real estate success.</p>
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
                  answer: "With 25+ years of expertise, proven systems, and a client-first approach, we deliver comprehensive real estate solutions with transparency and results.",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy] font-serif">Transform Your Real Estate Journey</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Connect with our experts today and discover premium real estate opportunities tailored for you
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
