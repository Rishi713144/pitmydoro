import Provider from './provider';
import React from 'react';
import './globals.css';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'react-hot-toast';
import { BottomBanner } from '@/components/BottomBanner';
import { Metadata } from 'next';
import AppCheckWrapper from '@/app/AppCheckWrapper';

export const metadata: Metadata = {
  title: 'Pit My Doro',
  description: 'Pomodoro',
  icons: './favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Provider>
            <ColorModeProvider enableSystem={false}>
              <Toaster position='top-right' />
              <AppCheckWrapper>{children}</AppCheckWrapper>
              <BottomBanner />
            </ColorModeProvider>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
