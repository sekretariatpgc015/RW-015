import { BoardMember, NewsItem, DemographicData } from './types';

export const BOARD_MEMBERS: BoardMember[] = [
  { id: '1', name: 'Wardiyanto', role: 'Ketua RW 015', image: 'https://cdn.phototourl.com/uploads/2026-03-14-be57fa2c-f9d8-4580-bde9-e435fb126bd3.png' },
  { id: '2', name: 'Usep Suyandi', role: 'Bendahara', image: 'https://cdn.phototourl.com/uploads/2026-03-14-76a08dc3-0be5-4b28-81fb-5ebfcd82298e.png' },
  { id: '3', name: 'Aji Arja Yuda', role: 'Sekretaris', image: 'https://cdn.phototourl.com/uploads/2026-03-14-7794bce7-3907-4c09-b8d6-d8d5a641f53a.png' },
  { id: '4', name: 'Sigit Budi Prasetyo', role: 'Sekretariat', image: 'https://cdn.phototourl.com/uploads/2026-03-14-dedbd78c-673d-4560-b093-912d39bc7654.png' },
  { id: '5', name: 'Yayan Permana', role: 'Sekretariat', image: 'https://cdn.phototourl.com/uploads/2026-03-14-67abe4f4-1347-44c4-aca5-a99c0b2f5fd9.png' },
  { id: '6', name: 'Tri Wahyudi', role: 'Humas', image: 'https://cdn.phototourl.com/uploads/2026-03-14-7435458f-9094-4db1-a0dd-e6bed7623c07.png' },
  { id: '7', name: 'Suparman', role: 'Humas', image: 'https://cdn.phototourl.com/uploads/2026-03-14-05395c3a-03e1-4f58-a237-0768d08e812b.png' },
  { id: '8', name: 'Tukardi Eko', role: 'Rohani', image: 'https://cdn.phototourl.com/uploads/2026-03-14-f5ece855-ec72-4085-9c12-814549a21834.png' },
  { id: '9', name: 'Harwiyanto', role: 'Rohani', image: 'https://cdn.phototourl.com/uploads/2026-03-14-623fe691-047d-4172-9084-e31da92758c3.png' },
  { id: '10', name: 'Berlin Wahyu Hardinta', role: 'Pemuda & Olah Raga', image: 'https://cdn.phototourl.com/uploads/2026-03-14-81ef6ee7-9fce-45fb-8698-c0c61d33889c.png' },
  { id: '11', name: 'Joni', role: 'Pemuda & Olah Raga', image: 'https://cdn.phototourl.com/uploads/2026-03-14-704c842e-05a1-4a9d-82a3-690024be3459.png' },
  { id: '12', name: 'Yayan Permana', role: 'Pemuda & Olah Raga', image: 'https://cdn.phototourl.com/uploads/2026-03-14-57d22d3d-6be4-42f5-9fbb-7a6062bd02a1.png' },
  { id: '13', name: 'Supardi', role: 'Pemberdayaan Masyarakat', image: 'https://cdn.phototourl.com/uploads/2026-03-14-21016d0c-048a-4995-9efa-f91c09ca5965.png' },
  { id: '14', name: 'Usman Jarwanto', role: 'Perlengkapan', image: 'https://cdn.phototourl.com/uploads/2026-03-14-5263c794-ef79-4282-9a84-7effc88f47a6.png' },
  { id: '15', name: 'Rusdianto', role: 'Perlengkapan', image: 'https://cdn.phototourl.com/uploads/2026-03-14-8f5c71c0-4edd-41df-a3ac-b88100fa703b.png' },
  { id: '16', name: 'Hendra Somantri', role: 'Keamanan', image: 'https://cdn.phototourl.com/uploads/2026-03-14-d40ca566-bea7-4e45-a4bf-8c1f7421352c.png' },
  { id: '17', name: 'Sojo', role: 'Keamanan', image: 'https://cdn.phototourl.com/uploads/2026-03-14-7c37d489-ddc2-4aab-8588-2fb443a777c2.png' },
  { id: '18', name: 'Yayan Permana', role: 'Keamanan', image: 'https://cdn.phototourl.com/uploads/2026-03-14-0c4e7d1c-4add-4c1f-aa40-bff83959e77b.png' },
  { id: '19', name: 'Triyono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://cdn.phototourl.com/uploads/2026-03-14-54f08601-adf3-41fc-846b-5d303975aa5b.png' },
  { id: '20', name: 'Ali Rachmadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://cdn.phototourl.com/uploads/2026-03-14-78ce9be8-121e-40dc-89c7-7706b75d549e.png' },
  { id: '21', name: 'Andi Sulasmono', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://cdn.phototourl.com/uploads/2026-03-14-796b67df-b06b-4a02-a6b3-478ab738b0c6.png' },
  { id: '22', name: 'Saptadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://cdn.phototourl.com/uploads/2026-03-14-783936eb-f412-4c58-9908-905a2f7fd215.png' },
  { id: '23', name: 'Supriadi', role: 'Sie K3 (Keindahan, Kebersihan, Ketertiban)', image: 'https://cdn.phototourl.com/uploads/2026-03-14-a370ae4c-09c5-4ed3-9d0c-02f236c33197.png' },
];

export const RT_LEADERS: BoardMember[] = [
  { id: 'rt1', name: 'Harwiyanto', role: 'Ketua RT 001', image: 'https://cdn.phototourl.com/uploads/2026-03-14-623fe691-047d-4172-9084-e31da92758c3.png' },
  { id: 'rt2', name: 'Andi Sulasmono', role: 'Ketua RT 002', image: 'https://cdn.phototourl.com/uploads/2026-03-14-796b67df-b06b-4a02-a6b3-478ab738b0c6.png' },
  { id: 'rt3', name: 'Suparman', role: 'Ketua RT 003', image: 'https://cdn.phototourl.com/uploads/2026-03-14-05395c3a-03e1-4f58-a237-0768d08e812b.png' },
  { id: 'rt4', name: 'Ali Rachmadi', role: 'Ketua RT 004', image: 'https://cdn.phototourl.com/uploads/2026-03-14-78ce9be8-121e-40dc-89c7-7706b75d549e.png' },
  { id: 'rt5', name: 'Berlin Wahyu Hardinta', role: 'Ketua RT 005', image: 'https://cdn.phototourl.com/uploads/2026-03-14-81ef6ee7-9fce-45fb-8698-c0c61d33889c.png' },
  { id: 'rt6', name: 'Benny Utomo', role: 'Plt Ketua RT 006', image: 'https://cdn.phototourl.com/uploads/2026-03-14-d0014df6-588b-42db-b3d7-92883e322d9f.png' },
  { id: 'rt7', name: 'Tri Wahyudi', role: 'Ketua RT 007', image: 'https://cdn.phototourl.com/uploads/2026-03-14-7435458f-9094-4db1-a0dd-e6bed7623c07.png' },
  { id: 'rt8', name: 'Saptadi', role: 'Ketua RT 008', image: 'https://cdn.phototourl.com/uploads/2026-03-14-783936eb-f412-4c58-9908-905a2f7fd215.png' },
  { id: 'rt9', name: 'Bayu Hendri Priyono', role: 'Ketua RT 009', image: 'https://cdn.phototourl.com/member/2026-04-08-d8513284-b016-48b0-a64d-4c19f97c0a16.png' },
];

export const NEWS: NewsItem[] = [
  {
    id: 'halal-bihalal-1447',
    title: 'Halal bi Halal 1447 H',
    date: '2026-04-05',
    excerpt: 'Langkah baru, Hari Baru, Silaturahmi tetap Nomor Satu',
    images: [
      'https://cdn.phototourl.com/member/2026-04-06-3852c881-2854-458d-a47e-11aaa1a6e615.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-f0ebc779-df0c-4d88-be57-264a89e99cbb.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-46a8a033-59b5-44b8-b648-e0bedafa750e.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-2310d878-bda5-43b4-861d-c823d250cfa2.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-15d017b1-20fb-489e-89aa-41bb27c0840f.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-92e7e2b7-93ff-4ee3-a9a1-a1fd8636d729.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-a985fadc-7028-4605-85dc-00d64fc958f5.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-e81cbe34-dff5-4cab-9a37-a74c55ef6d52.jpg',
      'https://cdn.phototourl.com/member/2026-04-06-f8f6ca80-5271-4a0f-b228-32748848609a.jpg'
    ]
  },
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
