import { BoardMember, NewsItem, DemographicData } from './types';

export const BOARD_MEMBERS: BoardMember[] = [
  { id: '1', name: 'Wardiyanto', role: 'Ketua RW 015', image: 'https://iili.io/qBC5qjn.png' },
  { id: '2', name: 'Usep Suyandi', role: 'Bendahara', image: 'https://iili.io/qBCRbhg.png' },
  { id: '3', name: 'Aji Arja Yuda', role: 'Sekretaris', image: 'https://iili.io/qBCRagp.png' },
  { id: '4', name: 'Sigit Budi Prasetyo', role: 'Sekretariat', image: 'https://iili.io/qnH1HNe.png' },
  { id: '5', name: 'Yayan Permana', role: 'Sekretariat', image: 'https://iili.io/qBC5Ta2.png' },
  { id: '6', name: 'Tri Wahyudi', role: 'Humas', image: 'https://iili.io/qBBL90F.png' },
  { id: '7', name: 'Suparman', role: 'Humas', image: 'https://iili.io/qBBsLRj.png' },
  { id: '8', name: 'Tukardi Eko', role: 'Rohani', image: 'https://iili.io/qBCR4Bj.png' },
  { id: '9', name: 'Harwiyanto', role: 'Rohani', image: 'https://iili.io/qBBPt7j.png' },
  { id: '10', name: 'Berlin Wahyu Hardinta', role: 'Pemuda & Olah Raga', image: 'https://iili.io/qBBtNB2.png' },
  { id: '11', name: 'Joni', role: 'Pemuda & Olah Raga', image: 'https://iili.io/qBCREmX.png' },
  { id: '12', name: 'Yayan Permana', role: 'Pemuda & Olah Raga', image: 'https://iili.io/qBC5Ay7.png' },
  { id: '13', name: 'Supardi', role: 'Pemberdayaan Masyarakat', image: 'https://iili.io/qBCRwrl.png' },
  { id: '14', name: 'Usman Jarwanto', role: 'Perlengkapan', image: 'https://iili.io/qBC5x44.png' },
  { id: '15', name: 'Rusdianto', role: 'Perlengkapan', image: 'https://iili.io/qBCR1et.png' },
  { id: '16', name: 'Hendra Somantri', role: 'Keamanan', image: 'https://iili.io/qBCR7qv.png' },
  { id: '17', name: 'Sojo', role: 'Keamanan', image: 'https://iili.io/qBCRMIn.jpg' },
  { id: '18', name: 'Yayan Permana', role: 'Keamanan', image: 'https://iili.io/qBC5uvS.png' },
  { id: '19', name: 'Triyono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://iili.io/qBCRLYB.png' },
  { id: '20', name: 'Ali Rachmadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://iili.io/qBBt4hx.png' },
  { id: '21', name: 'Andi Sulasmono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://iili.io/qBBtUmb.png' },
  { id: '22', name: 'Saptadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://iili.io/qBBs99f.png' },
  { id: '23', name: 'Supriadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://iili.io/qBBsbWB.png' },
];

export const RT_LEADERS: BoardMember[] = [
  { id: 'rt1', name: 'Harwiyanto', role: 'Ketua RT 001', image: 'https://iili.io/qBBPt7j.png' },
  { id: 'rt2', name: 'Andi Sulasmono', role: 'Ketua RT 002', image: 'https://iili.io/qBBtUmb.png' },
  { id: 'rt3', name: 'Suparman', role: 'Ketua RT 003', image: 'https://iili.io/qBBsLRj.png' },
  { id: 'rt4', name: 'Ali Rachmadi', role: 'Ketua RT 004', image: 'https://iili.io/qBBt4hx.png' },
  { id: 'rt5', name: 'Berlin Wahyu Hardinta', role: 'Ketua RT 005', image: 'https://iili.io/qBBtNB2.png' },
  { id: 'rt6', name: 'Benny Utomo', role: 'Plt Ketua RT 006', image: 'https://iili.io/qBEayLN.png' },
  { id: 'rt7', name: 'Tri Wahyudi', role: 'Ketua RT 007', image: 'https://iili.io/qBBL90F.png' },
  { id: 'rt8', name: 'Saptadi', role: 'Ketua RT 008', image: 'https://iili.io/qBBs99f.png' },
  { id: 'rt9', name: 'Supriadi', role: 'Ketua RT 009', image: 'https://iili.io/qBBsbWB.png' },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Kerja Bakti Massal Minggu Ini',
    date: '2026-03-05',
    excerpt: 'Diharapkan seluruh warga RW 015 untuk berpartisipasi dalam kerja bakti membersihkan lingkungan...',
    image: 'https://picsum.photos/seed/cleanup/800/400'
  },
  {
    id: '2',
    title: 'Penyuluhan Kesehatan Lansia',
    date: '2026-03-10',
    excerpt: 'Kegiatan posyandu lansia akan dilaksanakan di balai warga RW 015 pada pukul 09.00 WIB...',
    image: 'https://picsum.photos/seed/health/800/400'
  },
  {
    id: '3',
    title: 'Pembangunan Taman Bermain Baru',
    date: '2026-02-28',
    excerpt: 'Proses pembangunan taman bermain di area RT 04 telah mencapai 80% dan segera diresmikan...',
    image: 'https://picsum.photos/seed/park/800/400'
  },
];

export const GENDER_DATA: DemographicData[] = [
  { category: 'Laki-laki', value: 450 },
  { category: 'Perempuan', value: 430 },
];

export const AGE_DATA: DemographicData[] = [
  { category: '0-12 th', value: 120 },
  { category: '13-18 th', value: 80 },
  { category: '19-35 th', value: 250 },
  { category: '36-50 th', value: 280 },
  { category: '50+ th', value: 150 },
];

export const RT_DATA: DemographicData[] = [
  { category: 'RT 01', value: 150 },
  { category: 'RT 02', value: 140 },
  { category: 'RT 03', value: 160 },
  { category: 'RT 04', value: 130 },
  { category: 'RT 05', value: 150 },
  { category: 'RT 06', value: 150 },
];
