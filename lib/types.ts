export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Badge {
  icon: any;
  label: string;
  color: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpen: boolean;
  isClosed?: boolean;
}

export interface SocialPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  timeAgo: string;
  isOriginal?: boolean;
  tags?: string[];
  permalink?: string;
}

export type TagColor = {
  [key: string]: string;
};