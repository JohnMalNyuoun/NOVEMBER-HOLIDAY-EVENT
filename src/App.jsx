import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Quote, 
  BookOpen, 
  Award, 
  X, 
  Menu, 
  ArrowRight, 
  Send,
  Calendar,
  CheckCircle2
} from 'lucide-react';

import unityImg from './assets/Unity.jpg';
import natoImg from './assets/Nato.jpg';
import youngMothersImg from './assets/Young Mothers.jpg';
import boysAndGirlsImg from './assets/Boys and Girls.jpg';
import milesLogo from './assets/Logo of MILES.jpeg';
import teamImg from './assets/team.PNG.jpeg';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    category: 'Teen Mother',
    phone: '',
    email: '',
    message: ''
  });

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfzZ66Bj2ti3_WLEyKS-qbOeXvHJRNzEmpkPvNxkTdrpEDljA/formResponse";
  const GOOGLE_FORM_VIEW_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfzZ66Bj2ti3_WLEyKS-qbOeXvHJRNzEmpkPvNxkTdrpEDljA/viewform";

  // Countdown timer logic to Nov 2, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-02T08:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async () => {
    // Both native form submission to hidden iframe and fetch post with no-cors ensure direct saving
    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    formBody.append('entry.1657408566', formData.fullName);
    formBody.append('entry.2071114444', formData.category);
    formBody.append('entry.2091362915', formData.phone);
    formBody.append('entry.1954087264', formData.email || '');
    formBody.append('entry.1051872381', formData.message || '');

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });
    } catch (err) {
      console.warn('Background submission note:', err);
    }

    setFormSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: '',
        category: 'Teen Mother',
        phone: '',
        email: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2B1D16] font-sans antialiased selection:bg-[#B88758] selection:text-white">
      
      {/* Top Banner - Logo Green Accent */}
      
     
        
          
      
            
           
          
        
      
      
      {/* Main Navigation - Pure Flat Light Brown Header */}
      <nav className="sticky top-0 z-40 bg-[#B88758] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Identity */}
            <a href="#" className="flex items-center space-x-3.5">
              <img 
                src={milesLogo} 
                alt="MILES Initiative Logo" 
                className="w-11 h-11 object-cover bg-white" 
              />
              <div>
                <span className="text-2xl font-black tracking-tight block text-white leading-none">MILES</span>
                <span className="text-[11px] text-[#FAF6F0]/90 font-semibold tracking-widest uppercase block mt-1">Initiative</span>
              </div>
            </a>

            {/* Flat Navigation Links - No Transitions */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
              <a href="#about" className="text-[#FAF6F0] hover:text-white">
                Our Purpose
              </a>
              <a href="#impact" className="text-[#FAF6F0] hover:text-white">
                Focus Area
              </a>
              <a href="#speakers" className="text-[#FAF6F0] hover:text-white">
                Facilitators
              </a>
              <a href="#schedule" className="text-[#FAF6F0] hover:text-white">
                Schedule
              </a>
            </div>

            {/* Flat CTA Button - No Transitions */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2B1D16] hover:bg-[#1D130E] text-[#FAF6F0] font-bold px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
               Register Seat
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF6F0] hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Flat Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#A77344] px-4 pt-3 pb-6 space-y-2">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              Our Purpose
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              Focus Area
            </a>
            <a 
              href="#speakers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              Facilitators
            </a>
            <a 
              href="#schedule" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white uppercase tracking-wider"
            >
              Schedule
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full mt-3 bg-[#2B1D16] text-white font-bold px-5 py-3 text-xs uppercase tracking-wider text-center"
            >
              Register Seat
            </button>
          </div>
        )}
      </nav>

      {/* Big Hero Image Section - Unity as the Full Hero (Zero Gradient, Flat Solid Overlay, Logo Green Accent) */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center text-white overflow-hidden">
        {/* Big Unity Background Image */}
        <img 
          src={unityImg} 
          alt="MILES Mentorship Unity and Community" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Flat solid dark overlay - zero gradients */}
        <div className="absolute inset-0 bg-[#2B1D16]/80"></div>

        {/* Content Inside the Big Hero Image */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-[#63A79C] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5">
          
            SPECIAL HOLIDAY EVENT • NOV 2 & 3
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            MILES November Holiday Mentorship
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#D8B48F]">
            "Empowering Youth, Healing Minds, Shaping Futures"
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-[#FAF6F0]/90 max-w-3xl mx-auto leading-relaxed font-normal">
            A dedicated two-day transformative retreat uniting <strong className="text-white font-bold">60 Young Mothers, Girls, and Boys</strong> for professional psychotherapy, trauma recovery, GBV awareness, and leadership building.
          </p>

          {/* Action Buttons Inside Hero - No Transitions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#B88758] hover:bg-[#A37344] text-white font-bold px-9 py-4 text-xs uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>RESERVE A SEAT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#about"
              className="w-full sm:w-auto bg-[#FAF6F0] hover:bg-[#EADBCE] text-[#2B1D16] font-bold px-9 py-4 text-xs uppercase tracking-wider text-center"
            >
              LEARN PURPOSE & IMPACT
            </a>
          </div>

        </div>
      </section>

      {/* Countdown & Quick Info Strip - Flat Land Directly Below Hero */}
      <section className="bg-[#F3EBE1] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Countdown Flat Display */}
            <div className="space-y-3">
              <span className="block text-xs uppercase tracking-wider text-[#8E5E33] font-bold">
                Mentorship Countdown • Starts November 2nd
              </span>
              <div className="grid grid-cols-4 gap-4 bg-[#FAF6F0] p-4 text-center">
                <div>
                  <span className="block text-3xl sm:text-4xl font-black text-[#2B1D16]">{timeLeft.days}</span>
                  <span className="text-[10px] uppercase font-bold text-[#8E5E33] tracking-widest">Days</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black text-[#2B1D16]">{timeLeft.hours}</span>
                  <span className="text-[10px] uppercase font-bold text-[#8E5E33] tracking-widest">Hours</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black text-[#2B1D16]">{timeLeft.minutes}</span>
                  <span className="text-[10px] uppercase font-bold text-[#8E5E33] tracking-widest">Minutes</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black text-[#2B1D16]">{timeLeft.seconds}</span>
                  <span className="text-[10px] uppercase font-bold text-[#8E5E33] tracking-widest">Seconds</span>
                </div>
              </div>
            </div>

            {/* Quick Info Points - With Logo Green Accent Icons */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#5C4535]">
              <div className="flex items-center gap-2">
              
                <span className="font-semibold text-[#2B1D16]">Nov 2 & 3, 2026</span>
              </div>
              <div className="flex items-center gap-2">
               
                <span className="font-semibold text-[#2B1D16]">60 Youth Seats</span>
              </div>
              <div className="flex items-center gap-2">
                
                <span className="font-semibold text-[#2B1D16]">Safe Space & Psychotherapy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Purpose & Impact Section - Flat Land with Real Photos (No Cards, No Box Lines) */}
      <section id="about" className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Section Introduction */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88758] block">
              Why We Are Here
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1D16] tracking-tight">
              Restoring Hope & Rebuilding Dignity
            </h2>
            <p className="text-base sm:text-lg text-[#5C4535] leading-relaxed">
              Young mothers in our community are teenagers affected by early pregnancy. They are members of society who cannot and must not be neglected or forgotten.
            </p>
          </div>

          {/* Young Mothers Showcase - Flat Land with Young Mothers Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Young Mothers Photo */}
            <div className="lg:col-span-6">
              <img 
                src={youngMothersImg} 
                alt="Young Mothers in Community" 
                className="w-full h-[360px] sm:h-[440px] object-cover" 
              />
              
            </div>

            {/* Young Mothers Content */}
            <div className="lg:col-span-6 space-y-5">
              
              <h3 className="text-2xl sm:text-3xl font-black text-[#2B1D16]">
                For Young Teen Mothers
              </h3>
              <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed">
                Many young mothers face severe stigmatization, societal discrimination, and rejection by their own families. Having faced sudden adult responsibilities, many lose hope, encounter emotional trauma, low self-esteem, and social isolation.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B88758] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">Trauma Healing:</strong> Professional mental health counseling to process trauma, release guilt, and rebuild psychological strength.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B88758] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">Overcoming Stigma:</strong> Safe space to express fears and restore personal dignity without societal judgment.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#B88758] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">Renewed Purpose:</strong> Actionable strategies to resume education, learn skills, and shape an independent tomorrow.
                  </p>
                </div>
              </div>

              <p className="text-sm italic font-serif text-[#8E5E33] pt-2">
                "We believe no young mother should walk the journey of healing alone."
              </p>
            </div>

          </div>

          {/* Girls & Boys / Teenagers Youth Showcase - Flat Land with Boys and Girls Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
            
            {/* Girls & Boys Content */}
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2B1D16]">
                For Girls & Boys (Youth Allies)
              </h3>
              <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed">
                Preventing early pregnancies and Gender-Based Violence (GBV) requires the active involvement of both boys and girls. By cultivating self-awareness, moral clarity, and peer leadership, we enable young people to make informed life choices.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#8E5E33] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">GBV Champions:</strong> Equipping youth with the courage and tools to recognize and oppose gender-based violence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#8E5E33] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">Informed Decision Making:</strong> Understanding how decisions made today shape career opportunities and life stability.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#8E5E33] mt-2 shrink-0"></span>
                  <p className="text-[#36251A]">
                    <strong className="text-[#2B1D16]">Peer Advocacy:</strong> Mobilizing youth to educate classmates and lead campaigns against teenage pregnancy.
                  </p>
                </div>
              </div>

              <p className="text-sm italic font-serif text-[#8E5E33] pt-2">
                "Since their futures are shaped by today's decisions, guidance today guarantees a stronger tomorrow."
              </p>
            </div>

            {/* Boys & Girls Photo */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="bg-[#EADBCE] p-3 text-xs text-[#5C4535] font-medium">
                Youth ambassadors participating in peer leadership and sexual & reproductive health awareness.
              </div>
              <img 
                src={boysAndGirlsImg} 
                alt="Adolescent Girls and Boys Leadership Cohort" 
                className="w-full h-[360px] sm:h-[440px] object-cover" 
              />
              
            </div>

          </div>

        </div>
      </section>

      {/* Program Focus Pillars - Open Flat Land (Zero Box Lines, Pure Layout) */}
      <section id="impact" className="py-20 bg-[#F3EBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88758] block">
              FOCUS AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B1D16] tracking-tight">
              Mentorship Curriculum
            </h2>
            <p className="text-sm sm:text-base text-[#5C4535]">
              Designed by psychological practitioners and social transformation advocates to provide complete healing and growth.
            </p>
          </div>

          {/* 4 Open Flat Columns without Card Boxes or Surrounding Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-3">
              <span className="text-3xl font-black text-[#B88758] block">01</span>
              <div className="flex items-center gap-2">
                
                <h3 className="text-lg font-bold text-[#2B1D16]">Psychotherapy</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Professional mental health counseling to address post-trauma stress, anxiety, emotional pain, and social rejection faced by young mothers.
              </p>
             
            </div>

            <div className="space-y-3">
              <span className="text-3xl font-black text-[#B88758] block">02</span>
              <div className="flex items-center gap-2">
                
                <h3 className="text-lg font-bold text-[#2B1D16]">GBV & Pregnancy Prevention</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Interactive sessions highlighting bodily autonomy, healthy boundary setting, consent, legal rights, and stopping sexual violence.
              </p>
            
            </div>

            <div className="space-y-3">
              <span className="text-3xl font-black text-[#B88758] block">03</span>
              <div className="flex items-center gap-2">
                
                <h3 className="text-lg font-bold text-[#2B1D16]">Self-Awareness</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Exercises designed to identify emotional triggers, build resilience, dismantle shame, and establish high self-worth despite past trials.
              </p>
              
            </div>

            <div className="space-y-3">
              <span className="text-3xl font-black text-[#B88758] block">04</span>
              <div className="flex items-center gap-2">
               
                <h3 className="text-lg font-bold text-[#2B1D16]">Informed Decisions</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Life skills mentoring focused on career continuity, goal setting, time management, vocational alternatives, and responsible choices.
              </p>
              
            </div>

          </div>

        </div>
      </section>

      {/* Facilitators Section - With Real Nato Photo (No Cards, Flats Land) */}
      <section id="speakers" className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88758] block">
              Expert Mentors
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B1D16] tracking-tight">
              Invited Professional Speakers
            </h2>
            <p className="text-sm sm:text-base text-[#5C4535]">
              We are honored to host dedicated clinical psychotherapy and grassroots community advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Jacob Profile */}
            <div className="space-y-5">
              <div className="w-24 h-24 bg-[#B88758] text-white font-black text-3xl flex items-center justify-center">
                J
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#2B1D16]">Jacob</h3>
                <p className="text-xs font-bold text-[#B88758] uppercase tracking-wider">
                  Mental Health & Psychotherapy Specialist
                </p>
                <p className="text-xs text-[#5C4535] flex items-center gap-1.5 font-semibold">
                   Jesuit Refugee Service (JRS)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Jacob brings extensive hands-on experience in trauma counselling, psychological rehabilitation, and restorative mental well-being support for vulnerable populations and young trauma survivors.
              </p>

              <div className="bg-[#F3EBE1] p-4 text-xs space-y-1 text-[#2B1D16]">
                <strong className="block uppercase tracking-wider text-[#8E5E33]">Session Focus:</strong>
                <p>• Dealing with trauma, guilt, and emotional stress in early motherhood</p>
                <p>• Practical coping tools and emotional recovery techniques</p>
              </div>

             
            </div>

            {/* Nato Logiel Profile with Photo */}
            <div className="space-y-5">
              <img 
                src={natoImg} 
                alt="Nato Logiel - Executive Director AAST" 
                className="w-24 h-24 object-cover object-top" 
              />
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#2B1D16]">Nato Logiel</h3>
                <p className="text-xs font-bold text-[#8E5E33] uppercase tracking-wider">
                  Founder & Executive Director
                </p>
                <p className="text-xs text-[#5C4535] flex items-center gap-1.5 font-semibold">
                  <Award className="w-4 h-4 text-[#8E5E33]" /> Apex Action For Social Transformation (AAST)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                Nato Logiel is a passionate social activist and community builder leading initiatives to combat Gender-Based Violence, champion youth rights, and inspire self-leadership among young generations.
              </p>

              <div className="bg-[#F3EBE1] p-4 text-xs space-y-1 text-[#2B1D16]">
                <strong className="block uppercase tracking-wider text-[#8E5E33]">Session Focus:</strong>
                <p>• Youth advocacy against GBV and teenage pregnancy</p>
                <p>• Empowering young leaders for informed life decisions</p>
              </div>

            
            </div>

          </div>

        </div>
      </section>

      {/* Program Schedule / Agenda - Flat Land Layout (No Box Borders) */}
      <section id="schedule" className="py-20 bg-[#F3EBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88758] block">
              Detailed Agenda
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B1D16] tracking-tight">
              Event Schedule Outline
            </h2>
            <p className="text-sm sm:text-base text-[#5C4535]">
              Two focused days of transformation, healing, and skill-building.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Day 1 */}
            <div className="space-y-6">
              <div className="bg-[#B88758] text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FAF6F0] block">Day 1 — November 2</span>
                  <h3 className="text-lg sm:text-xl font-bold">Healing, Trauma Recovery & Psychotherapy</h3>
                </div>
                <span className="bg-[#FAF6F0] text-[#8E5E33] text-xs font-bold px-3 py-1 uppercase tracking-wider self-start sm:self-center">
                  Focus: Young Mothers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FAF6F0] p-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#B88758] uppercase tracking-wider block">Morning Session</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">Welcome & Psychotherapy</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Welcome, safe space ground rules, and opening psychotherapy session with Jacob (JRS).
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#B88758] uppercase tracking-wider block">Midday Circle</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">Healing Circle</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Group sharing on overcoming stigma, family rejection, and emotional pain.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#B88758] uppercase tracking-wider block">Afternoon Workshop</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">Empowerment & Toolkits</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Personal counseling check-ins and building practical mental health coping toolkits.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-6">
              <div className="bg-[#8E5E33] text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FAF6F0] block">Day 2 — November 3</span>
                  <h3 className="text-lg sm:text-xl font-bold">Youth Leadership, GBV Prevention & Future Building</h3>
                </div>
                <span className="bg-[#FAF6F0] text-[#8E5E33] text-xs font-bold px-3 py-1 uppercase tracking-wider self-start sm:self-center">
                  Focus: Girls, Boys & Young Mothers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FAF6F0] p-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#8E5E33] uppercase tracking-wider block">Morning Session</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">GBV Prevention Workshop</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Interactive workshop on GBV prevention & peer support led by Nato Logiel (AAST).
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#8E5E33] uppercase tracking-wider block">Midday Dialogue</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">Panel & Dialogue</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Youth led dialogue on self-awareness, decision making, and community responsibility.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#8E5E33] uppercase tracking-wider block">Afternoon Closing</span>
                  <h4 className="text-sm font-bold text-[#2B1D16]">Closing & Commitments</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">
                    Action plan creation, mentorship certificates, and community support network launch.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Quote of MILES Team with Team Photo - Flat Land */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Team Photo */}
            <div className="lg:col-span-7">
              <img 
                src={teamImg} 
                alt="MILES Mentorship Team" 
                className="w-full h-auto object-cover" 
              />
              
            </div>

            {/* Quote Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#63A79C] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1">
                <Quote className="w-3.5 h-3.5" /> 
                Words From The MILES Team
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#2B1D16] leading-snug">
                "No young mother should be defined by early pregnancy, and no youth should make decisions without guidance. Our collective future depends on the care and wisdom we invest in them today."
              </blockquote>

              <div>
                <span className="block text-sm font-black uppercase tracking-wider text-[#B88758]">
                MILES  Team
                </span>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flat CTA Bar */}
      <section className="py-16 bg-[#F3EBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF6F0] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-[#63A79C]">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2D6157]">Community Action</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2B1D16]">Ready to Support or Join?</h3>
              <p className="text-sm text-[#5C4535] max-w-xl">
                Whether you are nominating a young mother, registering a youth leader, or offering sponsorship, we welcome your involvement.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2D6157] hover:bg-[#234F47] text-white font-bold px-8 py-4 text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer"
            >
              Register Participant Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Deep Roasted Walnut */}
      <footer className="bg-[#2B1D16] text-[#FAF6F0] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={milesLogo} 
                  alt="MILES Mentorship Initiative" 
                  className="w-9 h-9 object-cover bg-white" 
                />
                <div>
                  <span className="text-lg font-bold text-white block leading-none">MILES</span>
                  <span className="text-[10px] text-[#D8B48F] font-bold uppercase tracking-widest block mt-0.5">Mentorship Initiative</span>
                </div>
              </div>
              <p className="text-[#D8C7B5] leading-relaxed">
                Dedicated to empowering young mothers, combating early pregnancy, stopping GBV, and equipping young boys and girls for responsible leadership.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Event Details</h4>
              <p className="text-[#D8C7B5]"><strong>Dates:</strong> November 2 & 3, 2026</p>
              <p className="text-[#D8C7B5]"><strong>Target Audience:</strong> 60 Selected Youth & Young Mothers</p>
              <p className="text-[#D8C7B5]"><strong>Location:</strong> JAL AHEAD LIVELIHOOD</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Collaborating Organizations</h4>
              <ul className="space-y-1 text-[#D8C7B5]">
                <li>• MILES Mentorship Initiative</li>
                <li>• JAL AHEAD LIVELIHOOD</li>
                <li>• Jesuit Refugee Service (JRS)</li>
                <li>• Apex Action for Social Transformation (AAST)</li>
              </ul>
            </div>

          </div>

          <div className="pt-6 text-center text-xs text-[#A8917E]">
            © 2026 MILES November Holiday Mentorship Initiative. All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* Flat Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B1D16]/80">
          <div className="bg-[#FAF6F0] max-w-lg w-full p-6 sm:p-8 relative">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#8E5E33] hover:text-[#2B1D16] p-1.5 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#63A79C] text-white flex items-center justify-center mx-auto text-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B1D16]">Registration Received!</h3>
                <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                  Thank you! Your information has been saved directly to the official MILES Mentorship Google Form records. Our team will contact you shortly with cohort guidelines.
                </p>
                <div className="pt-2">
                  <a
                    href={GOOGLE_FORM_VIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#2D6157] underline font-semibold hover:text-[#1B4D3E]"
                  >
                    View Official Google Form
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 space-y-1">
                  <span className="text-[11px] font-bold text-[#63A79C] uppercase tracking-wider block">Participant Enrollment</span>
                  <h3 className="text-xl font-black text-[#2B1D16]">Register or Nominate a Participant</h3>
                  <p className="text-xs text-[#5C4535]">
                    Please fill in the information below to reserve a seat for November 2 & 3. Your entry is saved directly to Google Forms.
                  </p>
                </div>

                {/* Hidden iframe for native guaranteed Google Form submission without CORS blocking */}
                <iframe 
                  name="hidden_gform_iframe" 
                  id="hidden_gform_iframe" 
                  className="hidden" 
                  title="Google Form Submission Frame"
                ></iframe>

                <form 
                  action={GOOGLE_FORM_ACTION_URL} 
                  method="POST" 
                  target="hidden_gform_iframe" 
                  onSubmit={handleFormSubmit} 
                  className="space-y-4 text-xs sm:text-sm"
                >
                  <div>
                    <label className="block font-bold text-[#2B1D16] mb-1 uppercase text-[11px] tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="entry.1657408566"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="e.g. Mary Akiru"
                      className="w-full px-3.5 py-2.5 bg-white text-[#2B1D16] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#2B1D16] mb-1 uppercase text-[11px] tracking-wider">Category *</label>
                    <select
                      name="entry.2071114444"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-white text-[#2B1D16] focus:outline-none"
                    >
                      <option value="Teen Mother">Teen Mother</option>
                      <option value="Teen Girl">Teen Girl</option>
                      <option value="Teen Boy">Teen Boy</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#2B1D16] mb-1 uppercase text-[11px] tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        name="entry.2091362915"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+254 700 000000"
                        className="w-full px-3.5 py-2.5 bg-white text-[#2B1D16] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#2B1D16] mb-1 uppercase text-[11px] tracking-wider">Email (Optional)</label>
                      <input
                        type="email"
                        name="entry.1954087264"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 bg-white text-[#2B1D16] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#2B1D16] mb-1 uppercase text-[11px] tracking-wider">Special Needs or Message</label>
                    <textarea
                      name="entry.1051872381"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Let us know if childcare assistance, transport, or specific counselling needs are required..."
                      className="w-full px-3.5 py-2.5 bg-white text-[#2B1D16] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-[#2D6157] hover:bg-[#234F47] disabled:opacity-75 text-white font-bold py-3.5 px-4 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> {isSubmitting ? "Saving to Google Form..." : "Confirm Registration"}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={GOOGLE_FORM_VIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#5C4535] underline hover:text-[#2D6157]"
                    >
                      Or open directly in Google Forms
                    </a>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
