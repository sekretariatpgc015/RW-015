import React from 'react';
import { BOARD_MEMBERS, RT_LEADERS } from '../constants';
import { motion } from 'motion/react';
import { Users, Mail, Phone, Heart, Activity, ShieldCheck, Map } from 'lucide-react';
import { BoardMember } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MemberCardProps {
  member: BoardMember;
  idx: number;
  key?: string;
}

const MemberCard = ({ member, idx }: MemberCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
  >
    <div className="relative mb-6">
      <div className="w-24 h-32 mx-auto rounded-[20px] overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-colors">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-0.5">{member.name}</h3>
      <p className="text-blue-600 font-semibold text-xs">{member.role}</p>
    </div>
  </motion.div>
);

interface MemberSectionProps {
  title: string;
  members: BoardMember[];
  icon: React.ElementType;
  iconBg: string;
  iconShadow: string;
}

const MemberSection = ({ title, members, icon: Icon, iconBg, iconShadow }: MemberSectionProps) => {
  const [leader, ...others] = members;
  
  return (
    <div className="mb-24">
      <div className="flex items-center gap-3 mb-12">
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", iconBg, iconShadow)}>
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Leader - Centered at top */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-sm">
          <MemberCard member={leader} idx={0} />
        </div>
      </div>

      {/* Others - Centered Flex */}
      <div className="flex flex-wrap justify-center gap-8">
        {others.map((member, idx) => (
          <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm">
            <MemberCard member={member} idx={idx + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function StrukturPengurus() {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"
          >
            <Users size={16} />
            <span>Kepengurusan 2026 - 2031</span>
          </motion.div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Struktur Pengurus RW. 015</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Mengenal lebih dekat para pengurus yang berdedikasi melayani warga RW 015 Pesona Gading Cibitung.
          </p>
        </div>

        {/* RW Board Section - Custom Layout */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 overflow-hidden p-2">
              <img src="https://iili.io/qBjaRcl.png" alt="Logo RW 015" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Pengurus RW 015</h2>
          </div>

          {/* Row 1: Ketua */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-sm">
              <MemberCard member={BOARD_MEMBERS[0]} idx={0} />
            </div>
          </div>

          {/* Row 2: Bendahara, Sekretaris & Sekretariat (All in one row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {BOARD_MEMBERS.slice(1, 5).map((member, idx) => (
              <div key={member.id} className="w-full max-w-sm mx-auto">
                <MemberCard member={member} idx={idx + 1} />
              </div>
            ))}
          </div>

          {/* Row 3: Humas & Rohani (All in one row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {BOARD_MEMBERS.slice(5, 9).map((member, idx) => (
              <div key={member.id} className="w-full max-w-sm mx-auto">
                <MemberCard member={member} idx={idx + 5} />
              </div>
            ))}
          </div>

          {/* Row 4: Pemuda & Olah Raga & Pemberdayaan Masyarakat (All in one row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {BOARD_MEMBERS.slice(9, 13).map((member, idx) => (
              <div key={member.id} className="w-full max-w-sm mx-auto">
                <MemberCard member={member} idx={idx + 9} />
              </div>
            ))}
          </div>

          {/* Row 5: Perlengkapan & Keamanan (All in one row on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {BOARD_MEMBERS.slice(13, 18).map((member, idx) => (
              <div key={member.id} className="w-full max-w-sm mx-auto">
                <MemberCard member={member} idx={idx + 13} />
              </div>
            ))}
          </div>

          {/* Row 6: Sie K3 (Keindahan, Kebersihan, Ketertiban) (All in one row on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {BOARD_MEMBERS.slice(18, 23).map((member, idx) => (
              <div key={member.id} className="w-full max-w-sm mx-auto">
                <MemberCard member={member} idx={idx + 18} />
              </div>
            ))}
          </div>
        </div>

        {/* RT Leaders Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Map size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Ketua RT (001 - 009)</h2>
          </div>
          
          {/* All RT Leaders (001 - 009) centered using flex wrap */}
          <div className="flex flex-wrap justify-center gap-8">
            {RT_LEADERS.map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-[40px] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
            <p className="text-blue-100/80 text-lg leading-relaxed italic">
              "Mewujudkan lingkungan RW 015 Pesona Gading Cibitung yang Tertib, Elok, Rapi, Sehat, dan Nyaman (TERSENYUM) melalui transparansi informasi dan partisipasi aktif."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
            <ul className="space-y-4">
              {[
                'Meningkatkan pelayanan administrasi warga yang cepat dan efisien.',
                'Membangun komunikasi aktif antar warga melalui media digital.',
                'Menjaga keamanan dan ketertiban lingkungan secara kolaboratif.',
                'Mengelola fasilitas umum demi kenyamanan bersama.',
              ].map((misi, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-gray-600 leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
