import React, { useState } from 'react';
import { BOARD_MEMBERS, RT_LEADERS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Mail, Phone, Heart, Activity, ShieldCheck, Map, MapPin, X } from 'lucide-react';
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
  onClick?: (member: BoardMember) => void;
}

const MemberCard = ({ member, idx, onClick }: MemberCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: idx * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    onClick={() => onClick && onClick(member)}
    className={cn(
      "w-full mx-auto rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white hover:shadow-xl transition-all group flex items-center justify-center p-1",
      onClick && "cursor-pointer"
    )}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.03]"
      referrerPolicy="no-referrer"
    />
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
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  const handleMemberClick = (member: BoardMember) => {
    if (member.address || member.phone) {
      setSelectedMember(member);
    }
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen relative">
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
              <img src="https://cdn.phototourl.com/member/2026-03-29-34b1efb2-3ee8-40c8-816d-54bed75eee00.png" alt="Logo RW 015" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Pengurus RW 015</h2>
          </div>

          {/* Row 1: Ketua */}
          <div className="flex justify-center mb-8">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
              <MemberCard member={BOARD_MEMBERS[0]} idx={0} onClick={handleMemberClick} />
            </div>
          </div>

          {/* Row 2: Bendahara, Sekretaris & Sekretariat (All in one row) */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {BOARD_MEMBERS.slice(1, 5).map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx + 1} onClick={handleMemberClick} />
              </div>
            ))}
          </div>

          {/* Row 3: Humas & Rohani (All in one row) */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {BOARD_MEMBERS.slice(5, 9).map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx + 5} onClick={handleMemberClick} />
              </div>
            ))}
          </div>

          {/* Row 4: Pemuda & Olah Raga & Pemberdayaan Masyarakat (All in one row) */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {BOARD_MEMBERS.slice(9, 13).map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx + 9} onClick={handleMemberClick} />
              </div>
            ))}
          </div>

          {/* Row 5: Perlengkapan & Keamanan (All in one row on desktop) */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {BOARD_MEMBERS.slice(13, 18).map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx + 13} onClick={handleMemberClick} />
              </div>
            ))}
          </div>

          {/* Row 6: Sie K3 (Keindahan, Kebersihan, Ketertiban) (All in one row on desktop) */}
          <div className="flex flex-wrap justify-center gap-8">
            {BOARD_MEMBERS.slice(18, 23).map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx + 18} onClick={handleMemberClick} />
              </div>
            ))}
          </div>
        </div>

        {/* RT Leaders Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 overflow-hidden p-2">
              <img src="https://drive.google.com/thumbnail?id=17G7evIeHShfqn7aSm7L1mfgjlb1hStya" alt="Logo RT" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Ketua RT (001 - 009)</h2>
          </div>
          
          {/* All RT Leaders (001 - 009) centered using flex wrap */}
          <div className="flex flex-wrap justify-center gap-8">
            {RT_LEADERS.map((member, idx) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-sm">
                <MemberCard member={member} idx={idx} onClick={handleMemberClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex flex-col items-center mb-6 mt-4">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-100 border-4 border-white shadow-lg mb-4">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center uppercase">{selectedMember.name}</h3>
                  <p className="text-blue-600 font-medium text-center">{selectedMember.role}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
                  {selectedMember.address && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-0.5">ALAMAT</p>
                        <p className="text-gray-900 font-semibold uppercase">{selectedMember.address}</p>
                      </div>
                    </div>
                  )}
                  {selectedMember.phone && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-0.5">NO. TELP.</p>
                        <a href={`tel:${selectedMember.phone}`} className="text-gray-900 font-semibold hover:text-green-600 transition-colors">
                          {selectedMember.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
