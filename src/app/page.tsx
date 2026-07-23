"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quicksand } from "next/font/google";
import {
  MapPin,
  Phone,
  Mail,
  Dumbbell,
  Utensils,
  Cat,
  Briefcase,
  BookOpen,
  Home,
  X,
  Copy,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Initialize the font to match the pubmats' bubbly yet clean look
const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function SapphirePadHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState("");

  // States for card carousels
  const [perfectForIndex, setPerfectForIndex] = useState(0);
  const [wellnessIndex, setWellnessIndex] = useState(0);

  const perfectForItems = [
    { title: "Summer Classes", desc: "Quiet sanctuary near campus.", icon: BookOpen, image: "/freefoodwed.jpg" },
    { title: "Internships", desc: "Peaceful hub after a long work day.", icon: Briefcase, image: "/freefoodwed.jpg"},
    { title: "Review Season", desc: "Distraction-free focus space.", icon: BookOpen, image: "/freefoodwed.jpg" },
    { title: "Students with Pets", desc: "Pet-friendly living spaces.", icon: Cat, image: "/roomieswithpet.jpg"},
  ];

  const wellnessItems = [
    { title: "Free Food Wednesdays", desc: "DMid-week complimentary treats.", icon: Utensils, image: "/freefoodwed.jpg" },
    { title: "Fitness & Well-being", desc: "Exclusive resident-only activities.", icon: Dumbbell, image: "/freefoodwed.jpg" },
  ];

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const testimonies = [
    { name: "Maria S., Ateneo", text: "Perfect place for my summer classes! Super quiet and the wifi is incredibly fast." },
    { name: "Juan D., UP Diliman", text: "The free food Wednesdays literally saved me during hell week. 10/10." },
    { name: "Chloe T., Ateneo", text: "Moved in before classes started. The staff is super accommodating!" },
    { name: "Mark R., UP Diliman", text: "Love that it's pet friendly. My cat and I are having a great time here." },
    { name: "Sofia L., Reviewee", text: "Very secure and safe. My parents were so relieved I found this place." },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  const handlePrevPerfect = () => {
    setPerfectForIndex((prev) => (prev === 0 ? perfectForItems.length - 1 : prev - 1));
  };

  const handleNextPerfect = () => {
    setPerfectForIndex((prev) => (prev + 1) % perfectForItems.length);
  };

  const handlePrevWellness = () => {
    setWellnessIndex((prev) => (prev === 0 ? wellnessItems.length - 1 : prev - 1));
  };

  const handleNextWellness = () => {
    setWellnessIndex((prev) => (prev + 1) % wellnessItems.length);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${quicksand.className}`}>
      {/* INQUIRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition text-slate-600"
            >
              <X size={20} />
            </button>

            {/* Modal Contact Info */}
            <div className="bg-[#2D249B] p-8 text-white md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Get in touch</h3>
                <p className="text-blue-100 text-sm mb-8">Reach out to us directly or drop a message.</p>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Phone Numbers</p>
                    <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl mb-2">
                      <span className="font-medium">0917 622 6363</span>
                      <button onClick={() => handleCopy("0917 622 6363")} className="text-yellow-400 hover:text-yellow-300">
                        {copied === "0917 622 6363" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl">
                      <span className="font-medium">0998 987 6136</span>
                      <button onClick={() => handleCopy("0998 987 6136")} className="text-yellow-400 hover:text-yellow-300">
                        {copied === "0998 987 6136" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Form */}
            <div className="p-8 md:w-3/5 bg-white">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D249B]" placeholder="Juan Dela Cruz" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D249B]" placeholder="juan@university.edu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
                  <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D249B] resize-none" placeholder="I'd like to ask about..."></textarea>
                </div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#2D249B] font-bold py-3 rounded-xl transition mt-4 shadow-sm">
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-[#2D249B] font-extrabold text-xl tracking-tight">
            <div className="bg-[#2D249B]/10 p-2 rounded-xl">
              <img src="/sapphirelogo.png" alt="" className="w-10 h-10 object-contain" />
            </div>
            THE SAPPHIRE PAD
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2D249B] hover:bg-[#211A70] text-white font-bold py-2 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            Inquire Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden bg-[#2D249B] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <motion.div variants={fadeUpVariant} className="mb-3">
              <h2 className="text-yellow-400 font-bold uppercase tracking-widest text-xs md:text-sm inline-flex items-center gap-2">
                <MapPin size={16} /> The Sapphire Pad Katipunan
              </h2>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-[1.1]">
              Welcome, <br />
              <span className="text-yellow-400">Class of 2026–2027</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-base lg:text-lg mb-8 text-blue-100 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Your calm student space near UP Diliman & Ateneo. Stay somewhere safe, cozy, and study-friendly.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex justify-center lg:justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-[#2D249B] text-lg font-black py-3.5 px-10 rounded-2xl shadow-xl transition transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Inquire Now!
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Space */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[16/11] bg-[#211A70] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay" 
                style={{ backgroundImage: "url('/placeholder-building.jpg')" }} 
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-blue-200 font-bold text-lg px-8 text-center">
                [ Insert Sapphire Pad Image Here ]
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE TESTIMONIALS */}
      <section className="py-12 bg-white overflow-hidden relative flex flex-col justify-center border-t border-slate-100">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-280px * 5 - 2rem * 5)); }
          }
          .animate-scroll {
            display: flex;
            width: calc((280px * 10) + (2rem * 10));
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="animate-scroll gap-8 px-4">
          {[...testimonies, ...testimonies].map((t, idx) => (
            <div key={idx} className="bg-[#2D249B] shadow-xl rounded-[2rem] p-6 w-[280px] flex-shrink-0 flex flex-col justify-between">
              <p className="text-white text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[#2D249B] font-bold text-xs shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="text-yellow-400 font-bold text-xs tracking-wide">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="perks" className="py-16 px-6 bg-[#2D249B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-yellow-400 mb-2">Not just a place to stay.</h2>
            <p className="text-sm lg:text-base text-blue-100 max-w-xl mx-auto font-medium">
              Cozy & safe with great amenities - Perfect for short-term school needs or staying for the long haul. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* CARD CAROUSEL 1: Perfect For */}
            <div className="flex flex-col">
              <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                <BookOpen className="text-yellow-400" size={22} /> Perfect for
              </h3>

              {/* 80:20 Aspect Ratio Card Box */}
              <div className="relative group bg-[#211A70] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] flex flex-col">
                
                {/* 80% Image Area */}
                <div className="h-[80%] relative bg-[#1A1454] flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={perfectForIndex}
                      src={perfectForItems[perfectForIndex].image}
                      alt={perfectForItems[perfectForIndex].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Left Arrow Button */}
                  <button 
                    onClick={handlePrevPerfect}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 hover:text-[#2D249B] text-white p-2 rounded-full backdrop-blur-md transition z-20 shadow-lg"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right Arrow Button */}
                  <button 
                    onClick={handleNextPerfect}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 hover:text-[#2D249B] text-white p-2 rounded-full backdrop-blur-md transition z-20 shadow-lg"
                    aria-label="Next card"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* 20% Caption Overlay */}
                <div className="h-[20%] bg-[#1A1454] px-5 py-2 flex items-center border-t border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={perfectForIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="p-1.5 bg-yellow-400 text-[#2D249B] rounded-lg flex-shrink-0">
                        {(() => {
                          const IconComp = perfectForItems[perfectForIndex].icon;
                          return <IconComp size={16} />;
                        })()}
                      </div>
                      <div className="truncate">
                        <h4 className="text-sm font-bold text-yellow-300 leading-tight truncate">
                          {perfectForItems[perfectForIndex].title}
                        </h4>
                        <p className="text-xs text-blue-100 truncate">
                          {perfectForItems[perfectForIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* CARD CAROUSEL 2: Resident Wellness Perks */}
            <div className="flex flex-col">
              <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                <Utensils className="text-yellow-400" size={22} /> Resident Wellness Perks
              </h3>

              {/* 80:20 Aspect Ratio Card Box */}
              <div className="relative group bg-[#211A70] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] flex flex-col">
                
                {/* 80% Image Area */}
                <div className="h-[80%] relative bg-[#1A1454] flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={wellnessIndex}
                      src={wellnessItems[wellnessIndex].image}
                      alt={wellnessItems[wellnessIndex].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Left Arrow Button */}
                  <button 
                    onClick={handlePrevWellness}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 hover:text-[#2D249B] text-white p-2 rounded-full backdrop-blur-md transition z-20 shadow-lg"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right Arrow Button */}
                  <button 
                    onClick={handleNextWellness}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-400 hover:text-[#2D249B] text-white p-2 rounded-full backdrop-blur-md transition z-20 shadow-lg"
                    aria-label="Next card"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* 20% Caption Overlay */}
                <div className="h-[20%] bg-[#1A1454] px-5 py-2 flex items-center border-t border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={wellnessIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="p-1.5 bg-yellow-400 text-[#2D249B] rounded-lg flex-shrink-0">
                        {(() => {
                          const IconComp = wellnessItems[wellnessIndex].icon;
                          return <IconComp size={16} />;
                        })()}
                      </div>
                      <div className="truncate">
                        <h4 className="text-sm font-bold text-yellow-300 leading-tight truncate">
                          {wellnessItems[wellnessIndex].title}
                        </h4>
                        <p className="text-xs text-blue-100 truncate">
                          {wellnessItems[wellnessIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RATES SECTION */}
      <section id="rates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#2D249B] mb-16">Comfortable Living in Katipunan</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 w-full max-w-sm hover:border-[#2D249B] transition-colors duration-300 shadow-sm">
              <h3 className="text-2xl font-black text-slate-700 mb-2">Private Unit</h3>
              <p className="text-slate-500 mb-6 font-medium">Rates begin at</p>
              <div className="text-5xl font-black text-[#2D249B] mb-8">₱15,000<span className="text-lg font-bold text-slate-400">/unit</span></div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-2xl transition shadow-md"
              >
                Inquire Space
              </button>
            </div>

            <div className="bg-[#2D249B]/5 border-2 border-[#2D249B]/20 rounded-[2.5rem] p-10 w-full max-w-sm hover:border-[#2D249B] transition-colors duration-300 relative shadow-sm">
              <div className="absolute -top-4 right-8 bg-yellow-400 text-[#2D249B] text-sm font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">Popular</div>
              <h3 className="text-2xl font-black text-slate-700 mb-2">Bedspace</h3>
              <p className="text-slate-500 mb-6 font-medium">Rates begin at</p>
              <div className="text-5xl font-black text-[#2D249B] mb-8">₱8,000<span className="text-lg font-bold text-slate-400">/pax</span></div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#2D249B] hover:bg-[#211A70] text-white font-bold py-4 rounded-2xl transition shadow-md"
              >
                Inquire Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1454] text-blue-200 py-16 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
             <div className="flex items-center gap-2 text-white font-black text-2xl tracking-tight mb-6">
              <div className="bg-[#2D249B] p-2 rounded-xl">
                <Home className="text-white" size={24} />
              </div>
              THE SAPPHIRE PAD
            </div>
            <p className="mb-6 max-w-sm text-blue-200 font-medium leading-relaxed">
              Your calm space near campus. Providing safe, cozy, and study-friendly accommodations in Quezon City.
            </p>
          </div>

          <div className="bg-[#211A70] p-8 rounded-3xl grid gap-6 border border-[#2D249B]/30">
            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-400 mt-1" size={24} />
              <div>
                <p className="font-bold text-white mb-1">Location</p>
                <p className="text-sm">#9 J Escaler Street, Quezon City,<br/> Philippines, 1108</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-yellow-400" size={24} />
              <div className="text-sm font-medium">
                <p>0917 622 6363</p>
                <p>0998 987 6136</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-yellow-400" size={24} />
              <div className="text-sm font-medium">
                <p>thesapphirepad@gmail.com</p>
                <p>hokkwell@gmail.com</p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}