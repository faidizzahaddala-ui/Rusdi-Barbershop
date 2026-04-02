import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-900/20">R</div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter uppercase">Rusdi Barbershop</span>
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.3em]">Khusus Laki-laki</span>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <Link to="/login" className="text-sm font-bold uppercase tracking-widest hover:text-amber-500 transition-colors hidden sm:block">Admin login</Link>
          <Link to="/pos" className="group px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-black font-black rounded-full text-sm transition-all transform active:scale-95 flex items-center gap-2">
            RESERVASI
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-neutral-950 z-10"></div>
          {/* Curated High-End Barbershop Hero */}
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxurious Barbershop Interior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 mx-auto transition-transform">
            Premium Syariah Experience
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
            PRIMA, GAGAH <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 animate-gradient-x underline decoration-amber-500/20 underline-offset-8">SESUAI SYARIAH</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Destinasi grooming eksklusif <strong>Khusus Pria</strong> yang menggabungkan teknik modern dengan integritas nilai-nilai Amanah.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/pos" className="group px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-2xl text-xl transition-all shadow-2xl shadow-amber-900/40 flex items-center gap-3">
              Mulai Transaksi POS
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <button className="px-10 py-5 border-2 border-white/10 hover:border-amber-600/50 hover:bg-white/5 rounded-2xl font-black text-xl transition-all backdrop-blur-md uppercase tracking-tighter">Lihat Layanan</button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">The Catalog</span>
            <h2 className="text-6xl font-black mb-0 tracking-tighter uppercase">Layanan <br /> <span className="text-neutral-500">Eksklusif</span></h2>
          </div>
          <p className="text-neutral-400 max-w-xs text-right text-lg border-r-4 border-amber-600 pr-6 py-2 uppercase font-black italic">Quality First.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 1, name: 'Gentleman Haircut', price: 'Rp 50k', img: 'https://images.unsplash.com/photo-1593702295094-aea22597af65?auto=format&fit=crop&q=80&w=800', desc: 'Cuci rambut, potong, dan styling pomade premium.' },
            { id: 2, name: 'Premium Hair Wash', price: 'Rp 15k', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', desc: 'Pembersihan rambut mendalam dengan produk premium.' },
            { id: 3, name: 'Head Massage', price: 'Rp 25k', img: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=800', desc: 'Pijat relaksasi kepala dan bahu setelah potong.' },
            { id: 4, name: 'Color Treatment', price: 'Rp 85k', img: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=800', desc: 'Pewarnaan rambut profesional (Halal/Syariah).' },
          ].map((service) => (
            <div key={service.id} className="group relative bg-neutral-900/50 border border-white/5 rounded-[2rem] overflow-hidden hover:bg-neutral-800 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-amber-600 text-black font-black px-3 py-1 rounded-lg text-sm shadow-xl">{service.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors uppercase tracking-tight">{service.name}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mas Rusdi Spotlight */}
      <section className="py-32 px-6 bg-neutral-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-10 bg-amber-600/10 rounded-full blur-[100px] opacity-100 group-hover:bg-amber-600/20 transition-all"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img 
                src="https://i.imgflip.com/7ecqf3.jpg" 
                alt="Brandon Curington - Master Barber" 
                className="w-full h-full object-cover grayscale brightness-110 shadow-inner group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-amber-500 font-black text-4xl uppercase tracking-tighter">BRANDON CURINGTON</p>
                <p className="text-neutral-400 text-sm font-bold uppercase tracking-[0.4em] mt-1">The Master Barber</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-12">
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs px-4 py-2 bg-amber-600/10 rounded-full border border-amber-600/20">The Expertise</span>
            <h2 className="text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">Keahlian <br /> Tanpa <span className="text-neutral-600">Batas.</span></h2>
            <p className="text-neutral-400 text-xl leading-relaxed font-medium">
              Brandon Curington bukan sekadar tukang cukur; ia adalah seniman yang memahami setiap lekuk dan karakter wajah. Dengan standar grooming Syariah, ia memastikan setiap pelanggan tampil prima dengan adab yang terjaga.
            </p>
            <div className="flex gap-12">
              <div className="space-y-1">
                <p className="text-5xl font-black text-amber-500 tracking-tighter">15+</p>
                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Tahun Pengalaman</p>
              </div>
              <div className="w-px h-16 bg-white/10 self-center"></div>
              <div className="space-y-1">
                <p className="text-5xl font-black text-amber-500 tracking-tighter">10k+</p>
                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syariah Values Banner */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-black">
          <div className="space-y-6 transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-1 bg-black"></div>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">NO QAZA' <br /> PRINCIPLE.</h3>
            <p className="font-bold opacity-80 text-sm leading-relaxed cursor-default">Kami menjaga sunnah dengan tidak melakukan potongan yang dilarang agama, tetap tampil modern tanpa melanggar adab.</p>
          </div>
          <div className="space-y-6 transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-1 bg-black"></div>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">BERSIH & <br /> AMANAH.</h3>
            <p className="font-bold opacity-80 text-sm leading-relaxed cursor-default">Seluruh peralatan disterilisasi sebelum digunakan. Kami menjamin kebersihan alat dan kualitas pelayanan yang jujur.</p>
          </div>
          <div className="space-y-6 transform hover:-translate-y-2 transition-transform">
            <div className="w-16 h-1 bg-black"></div>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">AUTO-ZAKAT <br /> NIAGA.</h3>
            <p className="font-bold opacity-80 text-sm leading-relaxed cursor-default">Setiap rupiah yang Anda bayarkan otomatis dialokasikan untuk zakat sebesar 2.5% guna kemaslahatan umat.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6 text-center space-y-8">
        <div className="flex justify-center gap-6">
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">FB</a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">IG</a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">TW</a>
        </div>
        <p className="text-neutral-500 font-medium italic">"Tunaikanlah amanah kepada orang yang mempercayaimu."</p>
        <div className="pt-8 border-t border-white/5">
          <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.5em]">© 2024 Rusdi Barbershop Syariah — Design Premium</p>
        </div>
      </footer>

    </div>
  );
}
