import React from 'react';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pit My Doro',
  description: 'Pomodoro',
  icons: './favicon.ico',
};

export default function NoFoundLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
