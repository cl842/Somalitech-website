
import React from 'react';
import { 
  TrendingUp, Users, Briefcase, DollarSign, 
  ArrowUpRight, Clock, CheckCircle2, AlertCircle,
  FileText, Download, PieChart, Activity
} from 'lucide-react';

interface DashboardProps {
  onClose: () => void;
  userTier: string;
}

const Dashboard: React.FC<DashboardProps> = ({ onClose, userTier }) => {
  const transactions = [
    { id: 'TX-9021', client: 'Global Logistics', amount: 450, status: 'Paid', date: 'Feb 24, 2025' },
    { id: 'TX-8842', client: 'Fintech Som', amount: 150, status: 'Pending', date: 'Feb 22, 2025' },
    { id: 'TX-8711', client: 'City University', amount: 999, status: 'Paid', date: 'Feb 15, 2025' },
  ];

  return (
    <div className="fixed inset-0 z-[150] bg-slate-50 flex flex-col md:flex-row animate-in fade-in duration-500">
      {/* Sidebar */}
      <div className="w-full md:w-72 bg-[#0F172A] p-8 text-white flex flex-shrink-0 flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
            <Activity size={20} />
          </div>
          <h2 className="text-xl font-black italic tracking-tighter">Studio Hub</h2>
        </div>

        <nav className="space-y-2 flex-grow">
          <button className="w-full flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl font-bold text-sm">
            <PieChart size={18} /> Overview
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-slate-400">
            <DollarSign size={18} /> Earnings
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-slate-400">
            <Briefcase size={18} /> Projects
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-slate-400">
            <FileText size={18} /> Invoices
          </button>
        </nav>

        <button 
          onClick={onClose}
          className="mt-auto w-full py-4 bg-rose-500/10 text-rose-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
        >
          Back to Site
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-12 overflow-y-auto custom-scrollbar">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-2">Account Portal</p>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Maamulka Studio-ga</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">User Status</p>
               <p className="text-sm font-black text-slate-900">{userTier.toUpperCase()} Member</p>
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Earnings', value: '$12,450', icon: <DollarSign />, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Active Projects', value: '14', icon: <Briefcase />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Pending Payouts', value: '$840', icon: <Clock />, color: 'text-orange-600', bg: 'bg-orange-50' },
            { label: 'Happy Clients', value: '128', icon: <Users />, color: 'text-purple-600', bg: 'bg-purple-50' }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-3xl font-black text-slate-900">{stat.value}</h4>
            </div>
          ))}
        </div>

        {/* Recent Activities and Transactions */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-900">Lacagihii ugu dambeeyey</h3>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {transactions.map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{tx.client}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.date} • {tx.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-slate-900 text-lg">${tx.amount}</p>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${tx.status === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-[3rem] p-10 text-white relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-xl font-black mb-2">Account Balance</h3>
               <p className="text-4xl font-black mb-8 italic">$5,240.50</p>
               
               <div className="space-y-6 mb-10">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-slate-400 text-sm">Main Wallet</span>
                    <span className="font-bold">$4,100</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-slate-400 text-sm">Savings</span>
                    <span className="font-bold">$1,140</span>
                  </div>
               </div>

               <button className="w-full py-5 gradient-bg text-white rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                 Lacagta La Bax (Withdraw)
               </button>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <DollarSign size={180} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
