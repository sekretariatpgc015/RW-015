import { BoardMember, NewsItem, DemographicData } from './types';

export const BOARD_MEMBERS: BoardMember[] = [
  { id: '1', name: 'Wardiyanto', role: 'Ketua RW 015', image: 'https://drive.google.com/thumbnail?id=1L9XsTr1Tub0ysWqErSC68PaMidUh0ueS', address: 'BLOK K1 NO. 10', phone: '081386914310' },
  { id: '2', name: 'Usep Suyandi', role: 'Bendahara', image: 'https://drive.google.com/thumbnail?id=1FRlwW6CbV27LsENm1SfnAcOr08f0u14V', address: 'BLOK I.7 NO. 2', phone: '081386616174' },
  { id: '3', name: 'Aji Arja Yuda', role: 'Sekretaris', image: 'https://drive.google.com/thumbnail?id=1DPrcRRcvziYFaIWy5i7pRoktXx4-qifP', address: 'BLOK C1 NO. 5', phone: '085219252160' },
  { id: '4', name: 'Sigit Budi Prasetyo', role: 'Sekretariat', image: 'https://drive.google.com/thumbnail?id=12eU2jza6BOk9d8kalTieVcSrjuWd62Fo', address: 'BLOK B1 NO. 8', phone: '081383777193' },
  { id: '5', name: 'Yayan Permana', role: 'Sekretariat', image: 'https://drive.google.com/thumbnail?id=1-hj733b2JJhGjLJonypbXVJkjsTkpjfS', address: 'BLOK I.7 NO. 10', phone: '087865470532' },
  { id: '6', name: 'Tri Wahyudi', role: 'Humas', image: 'https://drive.google.com/thumbnail?id=1YOsLCB2jl3fTvdiefTwfQLQ4BbtndU7N', address: 'BLOK I.4 NO. 17', phone: '082111277884' },
  { id: '7', name: 'Suparman', role: 'Humas', image: 'https://drive.google.com/thumbnail?id=1JdabPAh1DKqol5alCBJdfjQey0GmC2bg', address: 'BLOK D3 NO. 21', phone: '081384094999' },
  { id: '8', name: 'Tukardi Eko', role: 'Rohani', image: 'https://drive.google.com/thumbnail?id=1pR4tL_cRmUNtFKoUjYmlhQntA6XJPRmQ', address: 'BLOK J4 NO. 28', phone: '081314158629' },
  { id: '9', name: 'Harwiyanto', role: 'Rohani', image: 'https://drive.google.com/thumbnail?id=1hCJc2w-m4f4top7XYa1sI0FAnLjO2Bmi', address: 'BLOK C2 NO. 38', phone: '081343176363' },
  { id: '10', name: 'Berlin Wahyu Hardinta', role: 'Pemuda & Olah Raga', image: 'https://drive.google.com/thumbnail?id=1U1SbW0r2R0Tfrz-GqCgkCKyDS9DsKEdu', address: 'BLOK J4 NO 60', phone: '087804308572' },
  { id: '11', name: 'Joni', role: 'Pemuda & Olah Raga', image: 'https://drive.google.com/thumbnail?id=10GmKVWgo1YKSwS4HM7V-UnYDWkblRF9U', address: 'BLOK I.2 NO. 15', phone: '081316620080' },
  { id: '12', name: 'Yayan Permana', role: 'Pemuda & Olah Raga', image: 'https://drive.google.com/thumbnail?id=1ctiylCcP2b0DHEvV9F5L9P5tvA5Bbs_t', address: 'BLOK I.7 NO. 10', phone: '087865470532' },
  { id: '13', name: 'Supardi', role: 'Pemberdayaan Masyarakat', image: 'https://drive.google.com/thumbnail?id=1nle67tx6P7n65ZamjewGHUgtgFwymaOs', address: 'BLOK I.2 NO. 12', phone: '085318632180' },
  { id: '14', name: 'Usman Jarwanto', role: 'Perlengkapan', image: 'https://drive.google.com/thumbnail?id=1gEfhWB1zBIDQDerFcEzN6h6SK0ta7utz', address: 'BLOK I.1 NO 16', phone: '081317601103' },
  { id: '15', name: 'Rusdianto', role: 'Perlengkapan', image: 'https://drive.google.com/thumbnail?id=1PUcdf3iuZoZTAyrd39oVN9bt3psMuZOO', address: 'BLOK I.2 NO. 22', phone: '08568080850' },
  { id: '16', name: 'Hendra Somantri', role: 'Keamanan', image: 'https://drive.google.com/thumbnail?id=1g7bg_Kh9LfMKCwlT-tZ3AMMfpqtPuuZO', address: 'BLOK C1 NO. 12', phone: '081212291621' },
  { id: '17', name: 'Sojo', role: 'Keamanan', image: 'https://drive.google.com/thumbnail?id=1ZS7ZvnsquN5aofqg5mgtXk0iUNOztJV3', address: '-', phone: '081297093508' },
  { id: '18', name: 'Yayan Permana', role: 'Keamanan', image: 'https://drive.google.com/thumbnail?id=12sSldqNPHvtI5uAcZVfXDN8eE6KFDq16', address: 'BLOK I.7 NO. 10', phone: '087865470532' },
  { id: '19', name: 'Triyono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://drive.google.com/thumbnail?id=1aioZTJdZBsBzuG7RjdC4pdgZm9MLm48y', address: 'BLOK I.2 NO. 17', phone: '082117640303' },
  { id: '20', name: 'Ali Rachmadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://drive.google.com/thumbnail?id=1N0IaZvoVfMIU5YV858egrprzss_Chsks', address: 'BLOK I.3 NO. 32', phone: '08888062518' },
  { id: '21', name: 'Andi Sulasmono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://drive.google.com/thumbnail?id=18op4pzgY4XciB3qgLyFwDBisOZ2h2s9C', address: 'BLOK D1 NO. 21', phone: '081381331789' },
  { id: '22', name: 'Saptadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://drive.google.com/thumbnail?id=1DLL8_HHe-8DBTeqMLwfEncMErdBXmoAK', address: 'BLOK I.6 NO. 11A', phone: '081908169891' },
  { id: '23', name: 'Supriadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://drive.google.com/thumbnail?id=1e1ibCdZ2BRgrgzzmc7mC9jBbWV9FZgB_', address: 'BLOK J10 NO. 17', phone: '087778396653' },
];

export const RT_LEADERS: BoardMember[] = [
  { id: 'rt1', name: 'Harwiyanto', role: 'Ketua RT 001', image: 'https://drive.google.com/thumbnail?id=1ZxWbJeUAREEuoRm8LAwhAuGS6FG7TAgb', address: 'BLOK C2 NO. 38', phone: '081343176363' },
  { id: 'rt2', name: 'Andi Sulasmono', role: 'Ketua RT 002', image: 'https://drive.google.com/thumbnail?id=1OwlY2okm1-rkbRgEyhpePjsq4uNqUiph', address: 'BLOK D1 NO. 21', phone: '081381331789' },
  { id: 'rt3', name: 'Suparman', role: 'Ketua RT 003', image: 'https://drive.google.com/thumbnail?id=1oHTMXWg__cbWRiKRA65sQpcOIRYhI6KE', address: 'BLOK D3 NO. 21', phone: '081384094999' },
  { id: 'rt4', name: 'Ali Rachmadi', role: 'Ketua RT 004', image: 'https://drive.google.com/thumbnail?id=1iYbSDVMTB-2r2NINetl_CfdZpHT2sJWB', address: 'BLOK I.3 NO. 32', phone: '08888062518' },
  { id: 'rt5', name: 'Berlin Wahyu Hardinta', role: 'Ketua RT 005', image: 'https://drive.google.com/thumbnail?id=1_meIZWQdgiPXX7A4NXJKqPiQ61_AwGaH', address: 'BLOK J4 NO. 60', phone: '087804308572' },
  { id: 'rt6', name: 'Benny Utomo', role: 'Plt Ketua RT 006', image: 'https://drive.google.com/thumbnail?id=1jgj32ibcwDJN3tDDyXDrj-KDeZfUKRyk', address: 'BLOK J4 NO. 16', phone: '082113543205' },
  { id: 'rt7', name: 'Tri Wahyudi', role: 'Ketua RT 007', image: 'https://drive.google.com/thumbnail?id=1RyT8_ZVDzLJr8Va5wgPvLf2xJ5ZxPUBP', address: 'BLOK I.4 NO. 17', phone: '082111277884' },
  { id: 'rt8', name: 'Saptadi', role: 'Ketua RT 008', image: 'https://drive.google.com/thumbnail?id=1kwquY1syyzkHEg-HPB-So7ckR-RdwGOQ', address: 'BLOK I.6 NO. 11A', phone: '081908169891' },
  { id: 'rt9', name: 'Bayu Hendri Priyono', role: 'Ketua RT 009', image: 'https://drive.google.com/thumbnail?id=1q4RqkW-O43IwxBIfDGv8mnjLJWBlyb5V', address: 'BLOK J7 NO. 30', phone: '0877046300024' },
];

export const NEWS: NewsItem[] = [
  {
    id: 'halal-bihalal-1447',
    title: 'Halal bi Halal 1447 H',
    date: '2026-04-05',
    excerpt: 'Langkah baru, Hari Baru, Silaturahmi tetap Nomor Satu',
    images: [
      'https://i.ibb.co.com/KcRGM0v9/IMG-001.jpg',
      'https://i.ibb.co.com/39HjVX6v/IMG-002.jpg',
      'https://i.ibb.co.com/QFVddyV4/IMG-003.jpg',
      'https://i.ibb.co.com/s96BQ4bq/IMG-004.jpg',
      'https://i.ibb.co.com/tw51QppC/IMG-005.jpg',
      'https://i.ibb.co.com/4RWcTCrj/IMG-006.jpg',
      'https://i.ibb.co.com/Dg49yQzw/IMG-007.jpg',
      'https://i.ibb.co.com/j9SMRxz7/IMG-008.jpg',
      'https://i.ibb.co.com/QvM5thj5/IMG-009.jpg',
      'https://i.ibb.co.com/GfLjFCPk/IMG-010.jpg',
      'https://i.ibb.co.com/qYrhS4zG/IMG-011.jpg',
      'https://i.ibb.co.com/xS59qC89/IMG-012.jpg'
    ]
  },
  {
    id: 'rapat-sie-keamanan',
    title: 'Rapat Sie Keamanan',
    date: '2026-03-07',
    excerpt: 'Koordinasi pengamanan libur idul fitri 1447 H',
    images: [
      'https://cdn.phototourl.com/member/2026-04-13-2dea7316-2d2c-4d83-b417-a68a1c50ce21.jpg',
      'https://cdn.phototourl.com/member/2026-04-13-7a9b3b07-c278-4a86-93f8-dbbd80ca51dc.jpg',
      'https://cdn.phototourl.com/member/2026-04-13-2f2109cb-e952-466f-9248-ed07c6b1c43a.jpg',
      'https://cdn.phototourl.com/member/2026-04-13-b2177536-d4ab-4f0a-95e7-49f777b9a544.jpg'
    ]
  },
  {
    id: 'perapihan-dahan',
    title: 'Perapihan dahan & Repair Lampu',
    date: '2026-03-03',
    excerpt: 'Perpaihan dahan dan repair lampu penerangan jalan utama',
    images: [
      'https://i.ibb.co/3mH4mWZH/Whats-App-Image-2026-03-03-at-07-42-15.jpg',
      'https://i.ibb.co/C5qg2Z2s/Whats-App-Image-2026-03-03-at-09-20-46.jpg',
      'https://i.ibb.co/WWdYFSy2/Whats-App-Image-2026-03-03-at-10-17-13.jpg',
      'https://i.ibb.co/5W4hmvTj/Whats-App-Image-2026-03-03-at-12-02-26.jpg',
      'https://i.ibb.co/PZyY9fK6/Whats-App-Image-2026-03-09-at-21-42-56-1.jpg',
      'https://i.ibb.co/jZyrCd6S/Whats-App-Image-2026-03-09-at-21-42-56.jpg',
      'https://i.ibb.co/JRH6W8Hq/Whats-App-Image-2026-03-10-at-20-41-41.jpg',
      'https://i.ibb.co/tPN6XnWM/Whats-App-Image-2026-03-10-at-21-21-22.jpg'
    ]
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
