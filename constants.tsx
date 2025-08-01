import type { ReactNode } from 'react';
import type { SocialLink } from './types';
import { Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

export const PROFILE_DATA = {
    name: 'África Smart',
    location: 'Marketing Digital & Gestão Comercial',
    bio: '"Transformando ideias em resultados digitais."',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Website', url: 'https://www.africasmart.ao', hoverColor: 'hover:bg-cyan-500', Icon: Globe },
  { name: 'Facebook', url: 'https://www.facebook.com/AfricaSmartAcademy', hoverColor: 'hover:bg-blue-600', Icon: Facebook },
  { name: 'Instagram', url: 'https://www.instagram.com/africasmart_marketingdigital/', hoverColor: 'hover:bg-fuchsia-600', Icon: Instagram },
  { name: 'LinkedIn', url: '#', hoverColor: 'hover:bg-sky-700', Icon: Linkedin },
];

export const SunIcon: ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon: ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);