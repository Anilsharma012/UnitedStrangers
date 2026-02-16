
export interface Location {
  id: string;
  name: string;
  city: string;
  type: 'Signature' | 'Curated';
  image: string;
}

export interface Trip {
  id: string;
  name: string;
  location: string;
  date: string;
  duration: string;
  color: string;
  image: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  bedType: string;
  sleeps: number;
  image: string;
}
