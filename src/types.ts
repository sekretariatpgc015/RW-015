export interface BoardMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  address?: string;
  phone?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  images?: string[];
}

export interface DemographicData {
  category: string;
  value: number;
}
