'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';
import Link from 'next/link';

export default function CookieNoticePage() {
  const t = useTranslations('cookies');

  return (
    <Flex as='main' flexDirection='column' my={32}>
      <Box>
        <Text as='h1' fontSize='4xl' fontWeight='bold'>
          {t('title')}
        </Text>
      </Box>

      <VStack alignItems='flex-start' gap={8}>
        <Text as='p' fontSize='md' opacity={0.5}>
          {t('lastUpdated')}
        </Text>

        <Text as='p'>{t('intro')}</Text>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.whatAreCookies.title')}
          </Text>
          <Text as='p'>{t('sections.whatAreCookies.description')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.enums.title')}
          </Text>
          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.enums.technical')}</li>
            <li>{t('sections.enums.analytics')}</li>
            <li>{t('sections.enums.personalization')}</li>
            <li>{t('sections.enums.advertising')}</li>
          </Box>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.thirdParties.title')}
          </Text>
          <Text as='p'>{t('sections.thirdParties.description')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.consent.title')}
          </Text>
          <Text as='p'>{t('sections.consent.description')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.manage.title')}
          </Text>
          <Text as='p'>
            {t.rich('sections.manage.description', {
              settings: (chunks) => <strong>{chunks}</strong>,
            })}
          </Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2}>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.moreInfo.title')}
          </Text>
          <Text as='p'>
            {t.rich('sections.moreInfo.description', {
              privacy: (chunks) => (
                <Link href='/privacy'>
                  <strong>{chunks}</strong>
                </Link>
              ),
            })}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
}
