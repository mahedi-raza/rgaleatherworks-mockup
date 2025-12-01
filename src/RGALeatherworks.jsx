import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ShoppingBag, Briefcase, Shield, ArrowRight } from 'lucide-react';
import heroVideo from './assets/video.mp4';

const RGALeatherworks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      title: "Executive Collection",
      desc: "Premium leather briefcases and portfolios",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
    },
    {
      title: "Urban Lifestyle",
      desc: "Modern wallets and everyday accessories",
      img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=600&fit=crop"
    },
    {
      title: "Travel Essentials",
      desc: "Durable luggage and travel accessories",
      img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=600&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Branded Programs",
      desc: "Custom branded and private label leather goods tailored to your brand identity"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Retail Excellence",
      desc: "Supplying major retailers across North America since 1995"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Craftsmanship",
      desc: "Premium materials and expert craftsmanship in every product"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-[#113649] overflow-x-hidden">
      {/* Modern Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-[#1E928C]/30' : 'bg-white/70 backdrop-blur-xl border-b border-white/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E928C] to-[#C9A026] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-[#1E928C] via-[#1E928C] to-[#113649] p-4 rounded-2xl shadow-2xl group-hover:shadow-[#1E928C]/30 transition-all duration-500 group-hover:scale-105">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1E928C] via-[#C9A026] to-[#113649] bg-clip-text text-transparent tracking-tight">
                  RGA
                </h1>
                <p className="text-[10px] text-[#C9A026] tracking-[0.3em] font-bold uppercase">Leatherworks</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="relative text-[#113649] font-medium group">
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E928C] to-[#C9A026] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="relative text-[#113649] font-medium group">
                <span className="relative z-10">About Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E928C] to-[#C9A026] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#brands" className="relative text-[#113649] font-medium group">
                <span className="relative z-10">Brands</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E928C] to-[#C9A026] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#news" className="relative text-[#113649] font-medium group">
                <span className="relative z-10">News</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E928C] to-[#C9A026] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative overflow-hidden bg-gradient-to-r from-[#1E928C] to-[#113649] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-[#1E928C]/50 transition-all duration-500 hover:scale-105 group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A026] to-[#1E928C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#113649]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-[#1E928C]/20 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-[#113649] hover:text-[#1E928C] py-2">Home</a>
              <a href="#about" className="block text-[#113649] hover:text-[#1E928C] py-2">About Us</a>
              <a href="#brands" className="block text-[#113649] hover:text-[#1E928C] py-2">Brands</a>
              <a href="#news" className="block text-[#113649] hover:text-[#1E928C] py-2">News</a>
              <a href="#contact" className="block bg-gradient-to-r from-[#1E928C] to-[#113649] text-white text-center py-2 rounded-lg font-semibold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background - ULTRA PREMIUM */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            src={heroVideo}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          {/* Premium Overlay with Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-slate-50/94 to-white/96"></div>
          
          {/* Luxury Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-r from-[#1E928C]/15 to-[#C9A026]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-l from-[#C9A026]/15 to-[#1E928C]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "radial-gradient(circle at 1px 1px, #113649 1px, transparent 0)", backgroundSize: "50px 50px"}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 py-40">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 mb-12 group cursor-pointer">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C9A026] to-[#C9A026] group-hover:w-16 transition-all duration-500"></div>
              <span className="text-[#C9A026] text-sm font-bold tracking-[0.3em] uppercase">Since 1995</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-[#C9A026] to-[#C9A026] group-hover:w-16 transition-all duration-500"></div>
            </div>
            
            {/* Luxury Main Heading */}
            <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-12 leading-[0.85] tracking-tighter">
              <span className="block text-[#113649] mb-6 animate-fade-in">Luxury Leather</span>
              <span className="block bg-gradient-to-r from-[#1E928C] via-[#C9A026] to-[#1E928C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Crafted to Perfection
              </span>
            </h1>
            
            {/* Premium Description */}
            <p className="text-2xl sm:text-3xl text-[#113649]/70 max-w-4xl mx-auto mb-16 leading-relaxed font-light tracking-wide">
              Premium leather goods designed for discerning individuals. From executive briefcases to everyday accessories, we create timeless pieces that define elegance.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#1E928C] via-[#1E928C] to-[#113649] text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#1E928C]/60 transition-all duration-500 flex items-center justify-center gap-3 hover:scale-110 hover:-translate-y-1">
                <span className="relative z-10">Explore Collections</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A026] to-[#1E928C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button className="group relative border-2 border-[#C9A026] backdrop-blur-xl bg-white/60 text-[#113649] px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:border-[#1E928C] hover:text-[#1E928C] transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                <span className="relative z-10">Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E928C]/5 to-[#C9A026]/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Premium Stats Mini Display */}
            <div className="flex items-center justify-center gap-12 text-center">
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E928C] to-[#C9A026] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">40+</div>
                <div className="text-[#113649]/60 text-sm uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#1E928C] to-transparent"></div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E928C] to-[#C9A026] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-[#113649]/60 text-sm uppercase tracking-wider mt-1">Partners</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#C9A026] to-transparent"></div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E928C] to-[#C9A026] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100K+</div>
                <div className="text-[#113649]/60 text-sm uppercase tracking-wider mt-1">Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-Premium Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#1E928C] group-hover:w-12 transition-all duration-300"></div>
            <span className="text-[#1E928C] text-[10px] tracking-[0.4em] font-bold uppercase">Scroll</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9A026] group-hover:w-12 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <ChevronLeft className="w-6 h-6 text-[#1E928C] rotate-[-90deg] group-hover:translate-y-1 transition-transform" />
            <ChevronLeft className="w-6 h-6 text-[#C9A026] rotate-[-90deg] -mt-2 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </section>

      {/* Stats Section - ULTRA PREMIUM */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #1E928C 2px, transparent 0)", backgroundSize: "60px 60px"}}></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E928C]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A026]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A026]"></div>
              <span className="text-[#C9A026] font-bold tracking-[0.3em] text-xs uppercase">Our Legacy</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A026]"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#113649] mb-6 tracking-tight">
              Building Excellence Since 1995
            </h2>
            <p className="text-[#113649]/60 text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Three decades of craftsmanship, innovation, and trusted partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Premium Stat Card 1 */}
            <div className="group relative bg-white/80 backdrop-blur-2xl border-2 border-[#1E928C]/20 rounded-3xl p-12 hover:border-[#1E928C] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(30,146,140,0.3)] hover:-translate-y-3 hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E928C]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E928C]/10 to-transparent rounded-full blur-3xl group-hover:bg-[#1E928C]/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1E928C] via-[#1E928C] to-[#113649] rounded-3xl p-6 w-fit mb-8 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(30,146,140,0.4)] group-hover:scale-110 transition-all duration-500">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-[#1E928C] to-[#113649] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                  40+
                </div>
                <div className="text-2xl text-[#113649] font-bold mb-3">Years of Experience</div>
                <p className="text-[#113649]/60 text-base leading-relaxed">
                  Decades of expertise in premium leather craftsmanship
                </p>
              </div>
            </div>

            {/* Premium Stat Card 2 */}
            <div className="group relative bg-white/80 backdrop-blur-2xl border-2 border-[#C9A026]/20 rounded-3xl p-12 hover:border-[#C9A026] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(201,160,38,0.3)] hover:-translate-y-3 hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A026]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C9A026]/10 to-transparent rounded-full blur-3xl group-hover:bg-[#C9A026]/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#C9A026] to-[#C9A026] rounded-3xl p-6 w-fit mb-8 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(201,160,38,0.4)] group-hover:scale-110 transition-all duration-500">
                  <ShoppingBag className="w-12 h-12 text-white" />
                </div>
                <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-[#C9A026] to-[#C9A026] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                  500+
                </div>
                <div className="text-2xl text-[#113649] font-bold mb-3">Retail Partners</div>
                <p className="text-[#113649]/60 text-base leading-relaxed">
                  Trusted by major retailers across North America
                </p>
              </div>
            </div>

            {/* Premium Stat Card 3 */}
            <div className="group relative bg-white/80 backdrop-blur-2xl border-2 border-[#1E928C]/20 rounded-3xl p-12 hover:border-[#1E928C] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(30,146,140,0.3)] hover:-translate-y-3 hover:scale-105 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E928C]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E928C]/10 to-transparent rounded-full blur-3xl group-hover:bg-[#1E928C]/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1E928C] via-[#1E928C] to-[#113649] rounded-3xl p-6 w-fit mb-8 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(30,146,140,0.4)] group-hover:scale-110 transition-all duration-500">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-br from-[#1E928C] to-[#113649] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                  100K+
                </div>
                <div className="text-2xl text-[#113649] font-bold mb-3">Products Crafted</div>
                <p className="text-[#113649]/60 text-base leading-relaxed">
                  Exceptional quality in every piece we create
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#113649]">
              Featured <span className="text-[#1E928C]">Collections</span>
            </h2>
            <p className="text-[#113649]/70 text-lg max-w-2xl mx-auto">
              Discover our curated selection of premium leather goods
            </p>
          </div>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-[#1E928C]/20">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, idx) => (
                  <div key={idx} className="min-w-full">
                    <div className="relative h-[500px] group">
                      <img 
                        src={product.img} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#113649]/90 via-[#113649]/60 to-transparent flex items-end">
                        <div className="p-8 w-full">
                          <h3 className="text-3xl font-bold mb-2 text-white">{product.title}</h3>
                          <p className="text-gray-200 text-lg mb-4">{product.desc}</p>
                          <button className="bg-gradient-to-r from-[#1E928C] to-[#C9A026] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1E928C]/50 transition-all hover:scale-105">
                            View Collection
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-lg p-3 rounded-full hover:bg-[#1E928C]/10 transition-all shadow-lg text-[#113649]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-lg p-3 rounded-full hover:bg-[#1E928C]/10 transition-all shadow-lg text-[#113649]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? 'w-8 bg-[#1E928C]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Cards */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-[#C9A026] font-bold tracking-wider uppercase text-sm">Leather Luxury</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[#113649]">
                Crafting Excellence Since 1995
              </h2>
              <p className="text-[#113649]/80 text-lg leading-relaxed mb-6">
                RGA Leatherworks has been designing premium accessories for major brands and retailers across North America. Our commitment to creative development and exceptional client service has established us as a prominent and reliable supplier.
              </p>
              <p className="text-[#113649]/80 text-lg leading-relaxed">
                We place emphasis directly on the product, aiming to design compelling and unique items with a focus on value. We partner with retail counterparts to fill the whitespace with products and brands consumers cannot find elsewhere.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#1E928C]/20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop" 
                alt="Leather crafting"
                className="relative rounded-2xl shadow-2xl border-4 border-[#1E928C]/20"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-white p-8 rounded-2xl border-2 border-[#1E928C]/30 hover:border-[#1E928C] transition-all hover:shadow-xl hover:shadow-[#1E928C]/20 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-[#1E928C] to-[#113649] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#113649]">{feature.title}</h3>
                <p className="text-[#113649]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#113649]">
              Our <span className="bg-gradient-to-r from-[#1E928C] to-[#C9A026] bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-[#113649]/70 text-lg max-w-2xl mx-auto">
              Specialized in designing bags, belts, wallets, gift sets, jewelry, luggage, travel and security accessories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bags & Briefcases", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
              { title: "Premium Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop" },
              { title: "Leather Belts", img: "src/assets/leather.jpg" },
              { title: "Travel Gear", img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg border-4 border-[#1E928C]/20 hover:border-[#C9A026] transition-all"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#113649] via-[#113649]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - ULTRA PREMIUM */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        {/* Luxury Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1E928C]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#C9A026]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "radial-gradient(circle at 2px 2px, #113649 2px, transparent 0)", backgroundSize: "60px 60px"}}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A026]"></div>
              <span className="inline-block bg-gradient-to-r from-[#1E928C] to-[#C9A026] text-white px-8 py-3 rounded-full text-xs font-bold tracking-[0.3em] uppercase shadow-xl">
                Got Questions?
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A026]"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#113649] mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#113649]/60 text-xl max-w-3xl mx-auto leading-relaxed font-light">
              Find answers to common questions about our products, services, and partnerships
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What types of leather goods do you specialize in?",
                answer: "We specialize in designing and manufacturing a wide range of premium leather products including bags, briefcases, wallets, belts, gift sets, jewelry accessories, luggage, and travel accessories. Our expertise spans both branded programs and private label solutions."
              },
              {
                question: "Do you offer custom branding and private label services?",
                answer: "Yes! We excel in custom branded programs and private label leather goods tailored to your brand identity. Our team works closely with you to create unique products that align perfectly with your brand vision and target market."
              },
              {
                question: "What is your minimum order quantity?",
                answer: "Our minimum order quantities vary depending on the product type and customization requirements. We work with both major retailers and independent brands, offering flexible solutions. Contact us to discuss your specific needs and we'll find the best approach for your project."
              },
              {
                question: "How long does the production process take?",
                answer: "Production timelines depend on the complexity of the design, order quantity, and customization level. Typically, our lead times range from 4-12 weeks. We'll provide a detailed timeline during the consultation phase to ensure your deadlines are met."
              },
              {
                question: "What quality standards do you maintain?",
                answer: "We maintain the highest quality standards in the industry, using only premium materials and expert craftsmanship. With over 40 years of experience, we've established rigorous quality control processes to ensure every product meets our excellence standards."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship across North America and internationally. We have established partnerships with major retailers throughout the region and can accommodate shipping requirements for various locations. Contact us to discuss shipping options for your specific needs."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-[#1E928C]/20 hover:border-[#1E928C] transition-all duration-500 shadow-xl hover:shadow-[0_20px_70px_rgba(30,146,140,0.2)] overflow-hidden hover:-translate-y-1"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left transition-all"
                >
                  <span className="text-xl font-bold text-[#113649] pr-8 group-hover:text-[#1E928C] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#1E928C] to-[#C9A026] flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <ChevronLeft className="w-6 h-6 text-white rotate-[-90deg]" />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-8 pt-0">
                    <div className="border-t-2 border-gradient-to-r from-[#1E928C]/20 to-[#C9A026]/20 pt-6">
                      <p className="text-[#113649]/70 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Contact CTA */}
          <div className="mt-16 text-center p-12 bg-gradient-to-br from-[#1E928C]/10 via-white/50 to-[#C9A026]/10 rounded-3xl border-2 border-[#1E928C]/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E928C]/5 to-[#C9A026]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#113649] mb-4">
                Still have questions?
              </h3>
              <p className="text-[#113649]/60 mb-8 text-lg max-w-xl mx-auto">
                Our team is here to help. Get in touch and we'll answer all your queries.
              </p>
              <button className="relative overflow-hidden bg-gradient-to-r from-[#1E928C] to-[#113649] text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:shadow-[0_20px_60px_rgba(30,146,140,0.4)] transition-all duration-500 hover:scale-110 group">
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A026] to-[#1E928C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - ULTRA PREMIUM */}
      <section className="py-32 relative overflow-hidden">
        {/* Luxury Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#113649] via-[#113649] to-[#1E928C]"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 2px, transparent 0)", backgroundSize: "60px 60px"}}></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1E928C]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C9A026]/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A026]"></div>
            <span className="text-[#C9A026] text-xs font-bold tracking-[0.4em] uppercase">Let's Connect</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A026]"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
            Ready to Partner With Us?
          </h2>
          <p className="text-2xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Let's create exceptional leather products together. Contact us to discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#C9A026] to-[#C9A026] text-white px-14 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-[0_20px_80px_rgba(201,160,38,0.5)] transition-all duration-500 hover:scale-110">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E928C] to-[#C9A026] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group relative border-2 border-white/40 backdrop-blur-xl bg-white/10 text-white px-14 py-6 rounded-full font-bold text-xl hover:bg-white/20 hover:border-white/60 transition-all duration-500 hover:scale-110 shadow-xl">
              <span className="relative z-10">Schedule Call</span>
            </button>
          </div>
          
          {/* Premium Contact Info */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A026]"></div>
              <span>support@rgaleatherworks.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A026]"></div>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A026]"></div>
              <span>Available Mon-Fri, 9AM-6PM EST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - ULTRA PREMIUM */}
      <footer className="bg-[#113649] border-t-2 border-[#1E928C]/30 py-16 relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E928C]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A026]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-6 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E928C] to-[#C9A026] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-[#1E928C] to-[#C9A026] p-3 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">RGA LEATHERWORKS</h3>
                  <p className="text-[10px] text-[#C9A026] font-bold tracking-[0.3em] uppercase">Est. 1995</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-base">
                Premium leather goods supplier for major brands and independent retailers across North America.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-[#1E928C] transition-all cursor-pointer group">
                  <div className="w-5 h-5 bg-white/60 group-hover:bg-white rounded transition-colors"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-[#1E928C] transition-all cursor-pointer group">
                  <div className="w-5 h-5 bg-white/60 group-hover:bg-white rounded transition-colors"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-[#C9A026] transition-all cursor-pointer group">
                  <div className="w-5 h-5 bg-white/60 group-hover:bg-white rounded transition-colors"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#1E928C] transition-colors hover:translate-x-1 inline-block duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-[#1E928C] transition-colors hover:translate-x-1 inline-block duration-300">About Us</a></li>
                <li><a href="#brands" className="hover:text-[#1E928C] transition-colors hover:translate-x-1 inline-block duration-300">Brands</a></li>
                <li><a href="#news" className="hover:text-[#1E928C] transition-colors hover:translate-x-1 inline-block duration-300">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#contact" className="hover:text-[#C9A026] transition-colors hover:translate-x-1 inline-block duration-300">Get in Touch</a></li>
                <li><a href="#" className="hover:text-[#C9A026] transition-colors hover:translate-x-1 inline-block duration-300">Support</a></li>
                <li><a href="#" className="hover:text-[#C9A026] transition-colors hover:translate-x-1 inline-block duration-300">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1E928C]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>Copyright © 2025 RGA Leatherworks. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#C9A026] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#C9A026] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#C9A026] transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            {/* Designer Credit */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                Crafted with 
                <span className="inline-block animate-pulse text-[#C9A026]">✦</span>
                by 
                <span className="font-bold bg-gradient-to-r from-[#1E928C] to-[#C9A026] bg-clip-text text-transparent">Mahedi</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RGALeatherworks;

