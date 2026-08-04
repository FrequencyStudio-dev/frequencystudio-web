export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  accentColor: string;
  index: string;
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
}

export interface LabPost {
  title: string;
  category: string;
 
  excerpt: string;
  readTime: string;
  slug: string;
}
