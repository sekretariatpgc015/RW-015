import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                <img src="https://cdn.phototourl.com/uploads/2026-03-10-04f17100-3512-43d7-af50-c2f041f40d55.png" alt="Logo RW 015" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xl font-bold text-white">RW. 015 Pesona Gading Cibitung</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed text-sm">
              <strong>TERSENYUM</strong> (Tertib, Elok, Rapi, Sehat, Nyaman untuk Masyarakat). Membangun lingkungan yang harmonis, aman, dan nyaman bagi seluruh warga Pesona Gading Cibitung melalui transparansi informasi dan partisipasi aktif.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Beranda</Link></li>
              <li><Link to="/struktur" className="hover:text-blue-400 transition-colors">Struktur Pengurus</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Jl. Cempaka Blok C2 RW. 015, Pesona Gading Cibitung</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+62 878-6547-0532</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>sekretariat.pgc015@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RW. 015 Pesona Gading Cibitung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
