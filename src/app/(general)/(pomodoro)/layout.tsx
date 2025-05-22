import React from 'react';
import { Metadata } from 'next';
import { WrapSections } from '@/components/WrapSections';
import { MainContainer } from '@/components/MainContainer';

export const metadata: Metadata = {
  title: 'Pit My Doro',
  description: 'Pomodoro',
  icons: './favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainContainer>{children}</MainContainer>
      <WrapSections />
    </>
  );
}
