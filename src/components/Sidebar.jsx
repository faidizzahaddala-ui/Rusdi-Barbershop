import React from 'react';
import { useNavigate } from 'react-router-dom';

// ... (keep Icons)
const Icons = {
  LayoutDashboard: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
  Users: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg>,
  ShoppingCart: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.71a2 2 0 002-1.61l1.71-8.59H5.05"/></svg>,
  FileText: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  Package: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v1.5"/><path d="M21 7.5H3l9 4.5 9-4.5z"/><path d="M3 7.5L12 12l9-4.5"/><path d="M12 12v9"/><path d="M3 7.5V18a2 2 0 002 2h14a2 2 0 002-2V7.5"/></svg>,
  Contact: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  Scissors: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
  Settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  LogOut: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 01-2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  Store: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
};

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Icons.LayoutDashboard, text: 'Dashboard', active: false },
    { icon: Icons.Users, text: 'Pelanggan', active: false },
    { icon: Icons.ShoppingCart, text: 'Kasir', active: true, path: '/pos' },
    { icon: Icons.FileText, text: 'Laporan Kas', active: false },
    { icon: Icons.Package, text: 'Inventaris', active: false },
    { icon: Icons.Contact, text: 'Karyawan', active: false },
    { icon: Icons.Scissors, text: 'Manajemen Layanan', active: false },
    { icon: Icons.Settings, text: 'Pengaturan', active: false },
  ];

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else {
      alert(`Fitur \${item.text} masih dalam tahap pengembangan.`);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin keluar dari sistem?')) {
      navigate('/login');
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-white/5 flex flex-col z-50 font-sans shadow-2xl">
      {/* Header (Brand) */}
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="p-2 bg-amber-600 rounded-lg">
          <Icons.Store />
        </div>
        <span className="text-xl font-black text-white uppercase tracking-tighter italic">
          Rusdi <span className="text-amber-500">Barbershop</span>
        </span>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group \${
              item.active 
                ? 'bg-slate-800 text-white shadow-lg shadow-black/20' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <item.icon className="transition-colors" />
            <span className={`text-sm font-bold tracking-tight \${
              item.active ? 'font-black' : 'font-semibold'
            }`}>
              {item.text}
            </span>
            {item.active && (
              <div className="ml-auto w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-4 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-2xl transition-all group"
        >
          <Icons.LogOut />
          <span className="text-sm font-black uppercase tracking-widest">Logout System</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
