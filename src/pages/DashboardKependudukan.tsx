import { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { motion } from 'motion/react';
import { Users, UserPlus, UserMinus, Home, TrendingUp, Info, Loader2 } from 'lucide-react';
import { fetchDemographicData, DemographicStats } from '../services/dataService';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1'];

export default function DashboardKependudukan() {
  const [stats, setStats] = useState<DemographicStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDemographicData();
      if (result) {
        setStats(result);
      } else {
        setError('Gagal mengambil data kependudukan.');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const chartRtData = useMemo(() => {
    if (!stats) return [];
    return stats.rtData.map(item => ({
      category: `RT ${item.rt}`,
      value: item.jiwa
    }));
  }, [stats]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Memuat data kependudukan...</p>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-[40px] shadow-sm border border-gray-100 max-w-md">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Info size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Terjadi Kesalahan</h2>
          <p className="text-gray-600 mb-8">{error || 'Data tidak tersedia.'}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"
          >
            <TrendingUp size={16} />
            <span>Update Real-time dari Google Sheets</span>
          </motion.div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Dashboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Visualisasi data kependudukan yang diambil langsung dari database warga untuk transparansi dan perencanaan yang akurat.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Warga', value: stats.totalResidents, icon: Users, color: 'bg-blue-600', text: 'text-blue-600' },
            { label: 'Total KK', value: stats.totalKK, icon: Home, color: 'bg-blue-500', text: 'text-blue-500' },
            { label: 'Laki-laki', value: stats.totalMale, icon: UserPlus, color: 'bg-amber-500', text: 'text-amber-600' },
            { label: 'Perempuan', value: stats.totalFemale, icon: UserMinus, color: 'bg-rose-500', text: 'text-rose-600' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex items-center gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center text-white shadow-lg shadow-${stat.color.split('-')[1]}-200`}>
                <stat.icon size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <p className={`text-3xl font-black ${stat.text}`}>{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Generation Distribution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Distribusi Generasi</h3>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                <Info size={18} />
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <Pie
                    data={stats.generationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={130}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="generation"
                    label={({ name, percent }) => percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : ''}
                    labelLine={false}
                  >
                    {stats.generationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                    formatter={(value: number, name: string, props: any) => [
                      `${value} Jiwa (L: ${props.payload.male}, P: ${props.payload.female})`, 
                      name
                    ]}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Age Distribution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Distribusi Kelompok Usia</h3>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                <Info size={18} />
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.ageData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }} 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                    formatter={(value: number, name: string) => [value, name === 'male' ? 'Laki-laki' : (name === 'female' ? 'Perempuan' : name)]}
                  />
                  <Legend verticalAlign="top" height={36} formatter={(value) => value === 'male' ? 'Laki-laki' : 'Perempuan'} iconType="circle" />
                  <Bar dataKey="male" fill="#0078c2" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="female" fill="#f93896" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* RT Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Distribusi Warga per RT</h3>
              <p className="text-gray-500 text-sm mt-1">Perbandingan jumlah penduduk di setiap unit RT.</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
              <Info size={18} />
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartRtData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip cursor={{ stroke: '#e2e8f0', strokeWidth: 2 }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={4} activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }} dot={{ r: 5, fill: '#3b82f6', strokeWidth: 0 }} name="Jumlah Warga" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Data Disclaimer */}
        <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <Info size={20} />
          </div>
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Catatan:</strong> Data ini disinkronkan langsung dari Google Sheets RW. 015. Data agregat ditampilkan untuk keperluan informasi publik. Data detail kependudukan bersifat rahasia dan hanya dapat diakses oleh pengurus RW yang berwenang.
          </p>
        </div>
      </div>
    </div>
  );
}
