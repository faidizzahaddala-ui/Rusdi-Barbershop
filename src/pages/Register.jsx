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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border-t-4 border-emerald-600">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Daftar Vendor Baru</h2>
          <p className="mt-2 text-sm text-gray-600">Bergabunglah dengan ekosistem niaga yang berkah</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded-r-md text-sm animate-in slide-in-from-top-2 duration-300">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nama Usaha</label>
              <input 
                name="vendorName" 
                type="text" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50" 
                placeholder="cth: Barbershop Berkah"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50" 
                placeholder="email@usaha.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Kata Sandi</label>
              <input 
                name="password" 
                type="password" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50" 
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Konfirmasi Kata Sandi</label>
              <input 
                name="confirmPassword" 
                type="password" 
                required 
                disabled={isLoading}
                onChange={handleChange} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50" 
              />
            </div>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-2 px-4 border border-transparent rounded-md text-white font-medium transition ${
              isLoading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mendaftarkan...
              </span>
            ) : 'Daftar Sekarang'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun? <Link to="/login" className="text-emerald-600 font-medium hover:text-emerald-500">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
