import React from 'react';
import { getUserLocale } from '@/services/locale';
import { getTranslations } from 'next-intl/server';
import { MainContainer } from '@/components/MainContainer';
import { Metadata } from 'next';
import { keywords } from '@/utils/constants/Keywords';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getUserLocale();
  const t = await getTranslations({ locale, namespace: 'meta.terms' });

  return {
    title: t('title'),
    description: t('description'),
    icons: './favicon.ico',
    keywords: keywords,
  };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <MainContainer customGrid='4fr 12fr 4fr'>{children}</MainContainer>;
}
