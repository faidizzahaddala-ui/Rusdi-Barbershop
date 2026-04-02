import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data produk Barbershop
const MOCK_PRODUCTS = [
  { id: 1, name: 'Gentleman Haircut', price: 50000, img: 'https://images.unsplash.com/photo-1621605815971-fbc38866ad9f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Premium Hair Wash', price: 15000, img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Head & Shoulder Massage', price: 25000, img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Hair Color Treatment', price: 85000, img: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=800' },
];

export default function POSInput() {
  const [cart, setCart] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulasi proses pembayaran
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setCart([]);
    }, 2000);
  };

  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar dari sistem?')) {
      navigate('/login');
    }
  };

  const totalBelanja = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const zakat = totalBelanja * 0.025; // Zakat niaga 2.5%

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex gap-6 relative font-sans text-gray-800">
      
      {/* Success Modal Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-gray-800 italic uppercase tracking-tighter">"Jazakallahu Khairan"</h2>
            <p className="mt-4 text-gray-600 font-medium">Pembayaran telah berhasil diproses. Semoga berkah bagi semua.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full py-4 bg-amber-600 hover:bg-amber-700 text-black font-black rounded-xl transition shadow-lg shadow-amber-200 active:scale-95 uppercase tracking-widest text-sm"
            >
              Transaksi Baru
            </button>
          </div>
        </div>
      )}

      {/* Bagian Kiri: Grid Produk */}
      <div className={`flex-1 transition-all duration-300 ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-amber-900/10">R</div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Menu Kasir</h1>
              <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Rusdi Barbershop - POS Syariah</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-100">
              <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Audit Syariah Aktif
            </span>
            <button 
              onClick={handleLogout}
              className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all group"
              title="Keluar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <button
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 text-left group relative overflow-hidden flex flex-col"
            >
              <div className="h-40 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>
              <div className="p-6 pt-2">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-amber-700 transition-colors">{product.name}</h3>
                <p className="text-amber-600 font-black mt-1 text-2xl tracking-tighter">Rp {product.price.toLocaleString('id-ID')}</p>
                <div className="mt-4 flex items-center text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest">Tambah ke Struk</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* AI Audit Result Section - Modul 2 Requirement */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-24 h-24 text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-1.5 bg-amber-600 text-black text-[10px] font-black uppercase tracking-widest rounded-full">System Intelligence</div>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">AI Audit Result</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Transaction Status</p>
              <p className="text-lg font-bold text-emerald-600">Secure & Verified</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Fraud Risk Level</p>
              <p className="text-lg font-bold text-gray-800">Minimal (Low)</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Audit Trail ID</p>
              <p className="text-lg font-bold text-amber-600 tracking-tighter">RUSDI-AI-2024-X</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic leading-relaxed">
              "Sistem audit otomatis aktif mendeteksi anomali transaksi dan memastikan integritas harga sesuai database Syariah."
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan: Ringkasan Transaksi */}
      <div className="w-96 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col h-[calc(100vh-3rem)] sticky top-6 overflow-hidden">
        <div className="p-6 border-b bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-800">Struk Pesanan</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <div className="p-4 bg-gray-50 rounded-full">
                <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <p className="font-medium">Pilih menu di sebelah kiri</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center group animate-in slide-in-from-right-4 duration-200">
                <div className="flex-1">
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.qty} x Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
                <p className="font-bold text-emerald-700">Rp {(item.price * item.qty).toLocaleString('id-ID')}</p>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t space-y-4">
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Subtotal</span>
            <span className="font-medium">Rp {totalBelanja.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-emerald-700 text-sm font-bold bg-emerald-50 p-3 rounded-xl border border-emerald-100">
            <span>Zakat Niaga (2.5%)</span>
            <span>Rp {zakat.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-2xl font-black text-gray-900 pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>Rp {totalBelanja.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0 || isProcessing}
            className={`w-full py-4 px-6 mt-4 rounded-xl shadow-xl text-white font-black transition-all transform active:scale-95 ${
              cart.length === 0 || isProcessing ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200 hover:shadow-emerald-300'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses Dana...
              </span>
            ) : 'Proses Pembayaran'}
          </button>
        </div>
      </div>

    </div>
  );
}
