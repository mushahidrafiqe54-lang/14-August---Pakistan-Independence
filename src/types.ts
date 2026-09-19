export type PageTab = 'home' | 'quaid-e-azam' | 'allama-iqbal' | 'independence-journey';

export interface Landmark {
  id: string;
  name: string;
  location: string;
  city: string;
  province: string;
  yearBuilt: string;
  description: string;
  significance: string;
  imageUrl: string;
  fallbackGradient: string;
}

export interface Milestone {
  year: string;
  title: string;
  label: string;
  date?: string;
  location?: string;
  description: string;
  significance: string;
  imageUrl?: string;
  quote?: string;
}

export interface PoetryVerse {
  id: string;
  title: string;
  urduLines: string[];
  englishTranslation: string;
  book: string;
  theme: string;
}
