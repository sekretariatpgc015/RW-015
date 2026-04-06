import { ArrowRight, Info, Shield, Users, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { fetchRTDistribution, RTDistribution } from '../services/dataService';

const NewsCard: React.FC<{ item: any }> = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = item.images && item.images.length > 1;
  const images = item.images || [item.image];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
    >
      <div className="h-48 overflow-hidden relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={images[currentImage]}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {hasMultipleImages && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-700 shadow-sm">
          {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">{item.excerpt}</p>
      </div>
    </motion.article>
  );
};

export default function Home() {
  const [rtData, setRtData] = useState<RTDistribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchRTDistribution();
      setRtData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const totalKK = rtData.reduce((acc, curr) => acc + curr.kk, 0);

  const RT_LOGOS: Record<string, string> = {
    '001': 'https://cdn.phototourl.com/uploads/2026-03-13-e2a06ef3-6b0c-41b6-9b50-cb1b385603e1.png',
    '002': 'https://cdn.phototourl.com/uploads/2026-03-13-1eeeea3a-9f54-4ef9-88fc-94aff76f6695.png',
    '003': 'https://cdn.phototourl.com/uploads/2026-03-13-2eb63114-c484-491a-b779-6261a9560e32.png',
    '004': 'https://cdn.phototourl.com/uploads/2026-03-13-482ca33a-a1ca-4337-81a2-2f81a472f080.png',
    '005': 'https://cdn.phototourl.com/uploads/2026-03-13-ae434279-a029-4eb9-8e87-03cf283c473d.png',
    '006': 'https://cdn.phototourl.com/uploads/2026-03-13-3ddda754-b604-429a-b79e-08197fef5d2b.png',
    '007': 'https://cdn.phototourl.com/uploads/2026-03-13-ce7c2601-9fce-42a5-8205-8ad644c2b02a.png',
    '008': 'https://cdn.phototourl.com/free/2026-04-05-e7288f37-e768-400d-9ee2-ad0af6e59468.png',
    '009': 'https://cdn.phototourl.com/uploads/2026-03-13-8427ff87-cba5-4f52-bcb2-cb2396527cd7.png',
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/housing/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm"
          >
            <Info size={16} />
            <span>Selamat Datang di Website Resmi</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-10"
          >
            <motion.img 
              src="https://cdn.phototourl.com/member/2026-03-29-34b1efb2-3ee8-40c8-816d-54bed75eee00.png" 
              alt="Logo RW 015" 
              className="w-40 h-40 sm:w-64 sm:h-64 object-contain drop-shadow-2xl mb-2 cursor-pointer"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-none tracking-tighter mb-4">
              RW. 015
            </h1>
            <h2 className="text-lg sm:text-2xl font-bold text-blue-400 uppercase tracking-[0.15em] sm:tracking-[0.3em]">
              Pesona Gading Cibitung
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8"
          >
            <p className="text-2xl font-black text-white tracking-[0.3em] mb-2">TERSENYUM</p>
            <p className="text-sm text-blue-300 font-bold uppercase tracking-widest">
              Tertib • Elok • Rapi • Sehat • Nyaman untuk Masyarakat
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-blue-50/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Pusat informasi dan layanan digital untuk warga RW 015. Bersama-sama membangun lingkungan yang harmonis, aman, dan modern.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              Lihat Dashboard Warga
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/struktur"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              Kenali Pengurus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan & Keunggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami berkomitmen untuk memberikan pelayanan terbaik bagi seluruh warga Pesona Gading Cibitung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Keamanan 24 Jam', desc: 'Sistem keamanan terpadu dengan patroli rutin dan koordinasi antar RT.' },
              { icon: Users, title: 'Kegiatan Warga', desc: 'Berbagai kegiatan sosial, olahraga, dan keagamaan untuk mempererat silaturahmi.' },
              { icon: Calendar, title: 'Informasi Terkini', desc: 'Akses cepat ke berita, pengumuman, dan agenda kegiatan RW secara digital.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RT Distribution Section */}
      <section className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                Statistik Wilayah
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribusi Warga per RT</h2>
              <p className="text-gray-600 max-w-xl">Data persebaran penduduk dan kepala keluarga di setiap unit Rukun Tetangga wilayah RW. 015.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{rtData.length} RT</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Total Unit</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{loading ? '...' : `~${totalKK}`}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Total KK</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              {rtData.map((item, idx) => (
                <motion.div
                  key={item.rt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-[0.03] rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className="flex items-center justify-between mb-6">
                    {RT_LOGOS[item.rt] ? (
                      <img src={RT_LOGOS[item.rt]} alt={`Logo RT ${item.rt}`} className="w-14 h-14 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
                    ) : (
                      <div className={`w-14 h-14 rounded-xl ${item.color} bg-opacity-10 flex items-center justify-center`}>
                        <span className="text-sm font-black text-gray-900">RT</span>
                      </div>
                    )}
                    <span className="text-2xl font-black text-gray-900 tracking-tighter">{item.rt}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-end mb-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kepala Keluarga</p>
                        <p className="text-lg font-bold text-gray-900">{item.kk}</p>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((item.kk / 100) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Jiwa</p>
                        <p className="text-lg font-bold text-gray-900">{item.jiwa}</p>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((item.jiwa / 300) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className={`h-full ${item.color} opacity-60 rounded-full`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Update: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</span>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h2>
              <p className="text-gray-600">Informasi terbaru seputar kegiatan di lingkungan RW 015.</p>
            </div>
            <Link to="#" className="text-blue-600 font-bold flex items-center gap-2 hover:text-blue-700 transition-colors">
              Lihat Semua Berita <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Map Image Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Peta Wilayah per RT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Denah pembagian wilayah Rukun Tetangga (RT) di lingkungan RW. 015 Pesona Gading Cibitung.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[40px] p-4 md:p-8 border border-gray-100 shadow-sm overflow-hidden">
              <img 
                src="https://cdn.phototourl.com/uploads/2026-03-13-e9b1721b-9aef-4426-9882-6ac492579ec9.png" 
                alt="Peta Wilayah per RT RW 015" 
                className="w-full h-auto object-contain rounded-2xl shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-blue-900 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <MapPin size={400} className="text-white transform translate-x-1/4 -translate-y-1/4 rotate-12" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lokasi Kami</h2>
                <p className="text-blue-100/80 mb-8 text-lg leading-relaxed">
                  RW. 015 terletak di jantung perumahan Pesona Gading Cibitung, sebuah hunian yang asri dan strategis di kawasan Cibitung, Bekasi.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <span>Sekretariat RW. 015 Jl. Cempaka Blok C2 Pesona Gading Cibitung</span>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    href="https://maps.app.goo.gl/qQBN5CEZcGw4pXXZA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
              <div className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.5267306407602!2d107.1041304!3d-6.2496395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69851ff1ce3189%3A0x91590aa16b3ebbf3!2sSekretariat%20RW%20015!5e0!3m2!1sen!2sid!4v1773474428363!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
