'use client';

import { Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';
import useSessionStore from '@/stores/Session.store';
import usePomodoroStore from '@/stores/Pomodoro.store';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'use-intl';

export const Footer = () => {
  const t = useTranslations('footer');
  const sessionStatus = useSessionStore((state) => state.status);
  const currentScuderia = usePomodoroStore((state) => state.currentScuderia);

  const darkenColor = tinycolor(currentScuderia?.colors?.background?.[sessionStatus])
    .darken(5)
    .toString();

  return (
    <Flex
      as='footer'
      flexDirection='column'
      alignItems='center'
      bgColor={{ base: darkenColor, _dark: 'gray.950' }}
      paddingY={12}
      gap={4}
    >
      <VStack>
        <a
          style={{ maxWidth: 200, marginBottom: 20 }}
          href='https://www.buymeacoffee.com/srterra'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            width={200}
            height={50}
            src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
            alt='Buy Me A Coffee'
          />
        </a>

        <Text fontSize='sm' color='gray.500'>
          &copy; {new Date().getFullYear()} {t('copyright')}
        </Text>

        <Text fontSize='sm' fontWeight='bold' color='gray.500'>
          {t('madeWith')}
        </Text>
      </VStack>

      <Center>
        <Text fontSize='sm' color='gray.500'>
          {t('disclaimer')}
        </Text>
      </Center>

      <HStack gap={8} marginTop={4} fontSize='sm' color='gray.500'>
        <Link href='/about-us'>{t('links.about')}</Link>
        <Link href='/terms'>{t('links.terms')}</Link>
        <Link href='/privacy'>{t('links.privacy')}</Link>
        <Link href='/legal'>{t('links.legal')}</Link>
      </HStack>
    </Flex>
  );
};
