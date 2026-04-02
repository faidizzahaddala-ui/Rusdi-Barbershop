import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Register() {
  const [formData, setFormData] = useState({
    vendorName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Kata sandi tidak cocok. Silakan periksa kembali.');
      return;
    }
    
    setError('');
    setIsLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            vendor_name: formData.vendorName
          }
        }
      });

      if (authError) throw authError;

      setIsLoading(false);
      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat pendaftaran.');
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg border-t-4 border-emerald-600 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Pendaftaran Berhasil!</h2>
          <p className="mt-4 text-gray-600">
            Selamat, usaha <strong>{formData.vendorName}</strong> telah terdaftar dalam sistem POS Syariah.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="mt-8 w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium transition"
          >
            Lanjut ke Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col md:flex-row relative overflow-hidden font-sans selection:bg-amber-500/30">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#451a03_0%,transparent_50%)]"></div>
      </div>

      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-950/20 to-neutral-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200" 
          alt="Barbershop Craftsmanship" 
          className="w-full h-full object-cover grayscale brightness-50 scale-110"
        />
        <div className="absolute bottom-20 left-20 z-20 animate-in slide-in-from-left-10 duration-700">
          <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-black font-black text-4xl mb-6 shadow-2xl">R</div>
          <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
            GABUNG <br /> <span className="text-amber-600">RUSDI</span>
          </h1>
          <p className="text-neutral-400 font-bold tracking-[0.3em] uppercase text-xs">Amanah & Professional Grooming</p>
        </div>
      </div>

      {/* Registration Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-20 overflow-y-auto">
        <div className="w-full max-w-md bg-neutral-900/40 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl my-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Daftar <span className="text-amber-600">Vendor</span></h2>
            <p className="text-neutral-500 mt-3 font-medium text-sm italic">"Bergabunglah dengan ekosistem niaga yang berkah."</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-2xl animate-in slide-in-from-top-2">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-black text-amber-500/70 uppercase tracking-widest ml-1">Nama Usaha</label>
              <input 
                name="vendorName" 
                type="text" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="block w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-700 font-medium"
                placeholder="cth: Rusdi Barbershop Cabang 2"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black text-amber-500/70 uppercase tracking-widest ml-1">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="block w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-700 font-medium"
                placeholder="email@usaha.com"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black text-amber-500/70 uppercase tracking-widest ml-1">Kata Sandi</label>
              <input 
                name="password" 
                type="password" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="block w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-700 font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black text-amber-500/70 uppercase tracking-widest ml-1">Konfirmasi Kata Sandi</label>
              <input 
                name="confirmPassword" 
                type="password" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="block w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-700 font-medium"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className={`group w-full py-5 px-6 rounded-2xl shadow-2xl text-black font-black transition-all transform active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-3 ${
                isLoading ? 'bg-amber-800 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500 shadow-amber-900/20'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  Daftar Sekarang
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-10 space-y-4">
            <p className="text-sm text-neutral-500 font-medium">
              Sudah punya akun? <Link to="/login" className="text-amber-500 font-black hover:text-amber-400 underline decoration-amber-500/20 underline-offset-4 font-bold">Masuk di sini</Link>
            </p>
            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.4em]">© 2024 Rusdi Barbershop — Amanah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
