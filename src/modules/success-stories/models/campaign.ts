import { ReactNode } from "react";

export interface Brand {
  name: ReactNode;
  logo: ReactNode;
}

export interface Campaign {
  name: string;
  slug: string;
  summary: string;
  socialNetworks: ("tiktok" | "instagram")[];
  bannersUrls: {
    wide: string;
    square: string;
  };
  brand: Brand;
  challenge: ReactNode;
  solution: ReactNode;
  cover: {
    image: string;
    video?: string;
  };
  contents: {
    type: "tiktok" | "instagram";
    id: string;
  }[];
  results: {
    description: ReactNode;
    views: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    averageEngagementRate: number;
  };
  testimonials: ReactNode;
}
