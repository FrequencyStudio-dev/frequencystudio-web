export interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
  accentColor: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Tool {
  title: string;
  description: string;
  status: "próximamente" | "disponible" | "beta";
  icon: string;
  featured?: boolean;
  href?: string;
}

export interface PricingFeature {
  label: string;
  sub?: string[];
}

export interface PricingTier {
  name: string;
  tagline: string;
  description: string;
  features: PricingFeature[];
  pricePrefix: string;
  priceValue: string;
  featured?: boolean;
}

export interface ExtraService {
  title: string;
  description: string;
  price?: string;
}

export interface LabPost {
  title: string;
  category: string;
 
  excerpt: string;
  readTime: string;
  slug: string;
}
