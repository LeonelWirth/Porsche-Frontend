export type Professional = {
  id: string;
  name: string;
  avatar?: string;
  skills?: string[];
  vehicle?: string;
  bio?: string;
  tools?: string[];
  rating?: number; // 0 a 5
  reviewsCount?: number;
  location?: string;
};
