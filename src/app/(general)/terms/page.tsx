'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <Flex flexDirection='column' my={32} as='main'>
      <Box>
        <Text as='p'>{t('agreement')}</Text>
      </Box>

      <Box>
        <Text as='h1' fontSize='4xl' fontWeight='bold'>
          {t('title')}
        </Text>
      </Box>

      <VStack alignItems='flex-start' gap={8}>
        <Text as='p' fontSize='md' opacity={0.5} marginBottom={4}>
          {t('lastUpdated')}
        </Text>

        <Text as='p'>{t('intro')}</Text>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.definitions.title')}
          </Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>
              {t.rich('sections.definitions.items.app', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.definitions.items.user', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.definitions.items.content', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.definitions.items.account', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.usage.title')}
          </Text>

          <Text as='p'>{t('sections.usage.commitments')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usage.legalUse')}</li>
            <li>{t('sections.usage.noCopy')}</li>
            <li>{t('sections.usage.noAbuse')}</li>
          </Box>

          <Text as='p'>{t('sections.usage.prohibited')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usage.fraudulentUse')}</li>
            <li>{t('sections.usage.unauthorizedAccess')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.accounts.title')}
          </Text>
          <Text as='p'>{t('sections.accounts.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.thirdParties.title')}
          </Text>
          <Text as='p'>{t('sections.thirdParties.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.changes.title')}
          </Text>
          <Text as='p'>{t('sections.changes.modify')}</Text>
          <Text as='p'>{t('sections.changes.notice')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.limitation.title')}
          </Text>
          <Text as='p'>{t('sections.limitation.intro')}</Text>
          <Text as='p'>{t('sections.limitation.notResponsible')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.limitation.damage')}</li>
            <li>{t('sections.limitation.loss')}</li>
          </Box>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.termination.title')}
          </Text>
          <Text as='p'>{t('sections.termination.content')}</Text>
        </Flex>

        <Flex gap={2} alignItems='flex-start' flexDirection='column' as='section'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.contact.title')}
          </Text>
          <Text as='p'>{t('sections.contact.info')}</Text>
          <Text as='p'>{t('sections.contact.email')}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}
