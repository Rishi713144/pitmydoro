import React from 'react';
import '../globals.css';
import { Metadata } from 'next';
import { keywords } from '@/constants/Keywords';

export const metadata: Metadata = {
  title: 'Pit My Doro',
  description: 'Pomodoro',
  icons: './favicon.ico',
  alternates: {
    canonical: 'https://pitmydoro.com',
    languages: {
      'en-US': 'https://pitmydoro.com',
      'de-DE': 'https://pitmydoro.com',
    },
  },
  openGraph: {
    title: 'Pit My Doro',
    description:
      'Pitmydoro, una forma distinta de usar el método Pomodoro: enfócate, descansa y avanza a tu ritmo, sin presiones.',
    url: 'https://pitmydoro.com',
    siteName: 'Pit My Doro',
    images: [
      {
        url: 'https://pitmydoro.com/images/cover.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pit My Doro',
    description:
      'Pitmydoro, una forma distinta de usar el método Pomodoro: enfócate, descansa y avanza a tu ritmo, sin presiones.',
    images: ['https://pitmydoro.com/images/cover.png'],
  },
  keywords: keywords,
};

export default function NoFoundLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
