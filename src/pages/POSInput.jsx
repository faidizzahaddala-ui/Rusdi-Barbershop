import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sampel data produk
const MOCK_PRODUCTS = [
  { id: 1, name: 'Risol Mayo', price: 5000 },
  { id: 2, name: 'Dimsum', price: 15000 },
  { id: 3, name: 'Teh Tarik Jelly', price: 10000 },
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
    <div className="min-h-screen bg-gray-100 p-6 flex gap-6 relative font-sans text-gray-800">
      
      {/* Success Modal Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 italic">"Jazakallahu Khairan"</h2>
            <p className="mt-4 text-gray-600">Pembayaran telah berhasil diproses. Semoga berkah bagi semua.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition shadow-lg shadow-emerald-200 active:scale-95"
            >
              Transaksi Baru
            </button>
          </div>
        </div>
      )}

      {/* Bagian Kiri: Grid Produk */}
      <div className={`flex-1 transition-all duration-300 ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Menu Kasir</h1>
            <p className="text-sm text-gray-500">Rusdi Barbershop - POS Syariah</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Audit Syariah Aktif
            </span>
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
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
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 text-left group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-3xl -mr-8 -mt-8 group-hover:bg-emerald-100 transition-colors"></div>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-emerald-700 relative z-10">{product.name}</h3>
              <p className="text-emerald-600 font-bold mt-2 text-xl">Rp {product.price.toLocaleString('id-ID')}</p>
              <div className="mt-4 flex items-center text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-semibold">Tambah ke Struk</span>
                <span className="ml-1">→</span>
              </div>
            </button>
          ))}
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
