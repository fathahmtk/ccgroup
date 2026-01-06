
export interface NutritionalInfo {
  servingSize: string;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  images?: string[]; // Gallery images
  description: string;
  origin: string;
  nutrition: NutritionalInfo;
  reviews: Review[];
  specs?: Record<string, string>; // Extended specs for modal
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface BuyingRequest {
  id: string;
  commodity: string;
  volume: string;
  destination: string;
  postedDate: string;
  status: 'Open' | 'Urgent' | 'Closing Soon';
}
