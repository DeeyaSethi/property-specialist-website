import Section from "./(site)/components/ui/Section";
import Button from "./(site)/components/ui/Button";
import Image from "next/image";
import Accordion from "./(site)/components/ui/Accordion";

export default function Home() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-background.jpg" alt="" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-6 py-3 rounded-full text-base font-semibold mb-8 shadow-lg">
              <span className="w-3 h-3 bg-[--color-brand] rounded-full animate-pulse"></span>
              Trusted Real Estate Partner Since 1999
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">
              Property Specialist<br />
              <span className="bg-gradient-to-r from-[--color-brand] to-[--color-accent] bg-clip-text text-transparent">
                Real Estate Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl lg:max-w-none leading-relaxed">
              Premier real estate advisory in Delhi NCR & Vrindavan with 25+ years of proven expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact" className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Button className="px-10 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Journey
                </Button>
              </a>
              <a href="#sections" className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <Button variant="secondary" className="px-10 py-4 text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Explore Opportunities
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image 
                src="/images/hero-home.jpg" 
                alt="Premium Real Estate Properties" 
                width={500} 
                height={400} 
                className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold text-[--color-brand] mb-2">25+</div>
              <div className="text-base text-gray-600 font-medium">Years Excellence</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-3xl md:text-4xl font-bold text-[--color-brand] mb-2">500+</div>
              <div className="text-base text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl md:text-4xl font-bold text-[--color-brand] mb-2">1000+</div>
              <div className="text-base text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <div className="text-3xl md:text-4xl font-bold text-[--color-brand] mb-2">₹500Cr+</div>
              <div className="text-base text-gray-600 font-medium">Deals Closed</div>
            </div>
          </div>
      </Section>

      {/* Meet Manoj Sethi - Moved to prominent position */}
      <Section className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-6 py-3 rounded-full text-base font-semibold mb-6">
              <span className="w-3 h-3 bg-[--color-brand] rounded-full"></span>
              Meet Our Founder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-4">Manoj Sethi</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforming real estate dreams into reality with 25+ years of unmatched expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-brand] to-[--color-navy] rounded-3xl transform rotate-2 opacity-20"></div>
        <Image
                  src="/images/manoj-sethi.jpg"
                  alt="Manoj Sethi - Property Specialist Founder"
                  width={400}
                  height={500}
                  className="relative rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[--color-brand]">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div>
                <h3 className="text-2xl font-bold text-[--color-navy] mb-6">Visionary Leadership</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A marketing and sales professional with over 25 years of business experience, 
                  specializing in transformative real estate solutions across Delhi NCR and Vrindavan.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[--color-muted] to-white p-8 rounded-2xl shadow-sm">
                <h4 className="text-xl font-bold text-[--color-navy] mb-4">Core Expertise</h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">End-to-end business systems for developers</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Sales and marketing team development</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Strategic project positioning & branding</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  <strong>Vision:</strong> Making Property Specialist the premier brand for real estate advisory, 
                  investment, and project sales management across India.
                </p>
                <a href="/about" className="inline-block">
                  <Button variant="secondary" className="px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                    Discover Our Journey
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="sections" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Our Services</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored for developers, investors, and home buyers
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <a href="/developers" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[--color-brand] hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[--color-brand] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">For Developers</h3>
              <p className="text-gray-600 text-sm">Launch and scale projects with proven sales systems and ROI-focused execution.</p>
            </div>
            <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
          
          <a href="/investors" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[--color-brand] hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[--color-brand] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Investors & HNIs</h3>
              <p className="text-gray-600 text-sm">Curated investment opportunities with comprehensive due diligence.</p>
            </div>
            <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
          
          <a href="/buyers" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[--color-brand] hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[--color-brand] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Home Buyers</h3>
              <p className="text-gray-600 text-sm">Find your perfect property in Delhi NCR and Vrindavan with expert guidance.</p>
            </div>
            <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
          
          <a href="/finance" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[--color-brand] hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[--color-brand] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Finance & Loans</h3>
              <p className="text-gray-600 text-sm">Complete financing solutions including home loans and project funding.</p>
            </div>
            <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
          
          <a href="/podcast" className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[--color-brand] hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[--color-brand] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Podcast & Insights</h3>
              <p className="text-gray-600 text-sm">Industry trends, market insights: The Real Estate Edge podcast.</p>
            </div>
            <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors">
              <span>Learn More</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
          
          <a href="/about" className="group bg-gradient-to-br from-[--color-brand] to-[--color-navy] p-6 rounded-xl border-2 border-[--color-brand] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[--color-brand]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">About Manoj Sethi</h3>
              <p className="text-white/90 text-sm">Meet our founder with 25+ years of real estate expertise and proven track record.</p>
            </div>
            <div className="flex items-center text-white font-semibold group-hover:text-white/90 transition-colors">
              <span>Meet The Founder</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        </div>
      </Section>

      <Section className="border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Why Choose Property Specialist</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Three decades of excellence in real estate advisory and project management
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-[--color-brand] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">25+</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2">Years Experience</h3>
              <p className="text-gray-600 text-sm">Three decades of successful project execution with industry-leading ROI delivery.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-[--color-brand] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">500+</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2">Projects Completed</h3>
              <p className="text-gray-600 text-sm">Hand-selected investment opportunities with comprehensive due diligence and market analysis.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-[--color-brand] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">100%</span>
              </div>
              <h3 className="text-lg font-bold text-[--color-navy] mb-2">Client Satisfaction</h3>
              <p className="text-gray-600 text-sm">Personalized guidance and transparent processes ensuring your real estate success.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Frequently Asked Questions</h2>
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
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-6 py-3 rounded-full text-base font-semibold mb-8">
            <span className="w-3 h-3 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Get Started?
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy]">Transform Your Real Estate Journey</h2>
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
          
          <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Direct Contact</h3>
                <p className="text-gray-600">📧 manojsethi@propertyspecialist.com</p>
                <p className="text-gray-600">📱 +91 99100 70102</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Office Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      </main>
  );
}
