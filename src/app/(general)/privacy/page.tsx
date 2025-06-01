'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

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
          {t('effectiveDate')}
        </Text>

        <Text as='p'>
          {t.rich('intro', {
            strong: (c) => <strong>{c}</strong>,
          })}
        </Text>

        <Text as='p'>{t('disclaimer')}</Text>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.dataCollection.title')}
          </Text>

          <Text as='p'>{t('sections.dataCollection.description')}</Text>

          <Text as='h3' fontWeight='bold'>
            {t('sections.dataCollection.personal.title')}
          </Text>
          <Text as='p'>{t('sections.dataCollection.personal.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.dataCollection.personal.email')}</li>
            <li>{t('sections.dataCollection.personal.tokens')}</li>
          </Box>

          <Text as='p'>{t('sections.dataCollection.personal.note')}</Text>

          <Text as='h3' fontWeight='bold'>
            {t('sections.dataCollection.usage.title')}
          </Text>
          <Text as='p'>{t('sections.dataCollection.usage.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.dataCollection.usage.ip')}</li>
            <li>{t('sections.dataCollection.usage.device')}</li>
            <li>{t('sections.dataCollection.usage.time')}</li>
            <li>{t('sections.dataCollection.usage.pages')}</li>
          </Box>

          <Text as='p'>{t('sections.dataCollection.usage.note')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.cookies.title')}
          </Text>

          <Text as='p'>{t('sections.cookies.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>
              {t.rich('sections.cookies.session', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.cookies.preference', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.cookies.security', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
          </Box>

          <Text as='p'>{t('sections.cookies.warning')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.usagePurpose.title')}
          </Text>

          <Text as='p'>{t('sections.usagePurpose.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.usagePurpose.operate')}</li>
            <li>{t('sections.usagePurpose.analyze')}</li>
            <li>{t('sections.usagePurpose.notify')}</li>
            <li>{t('sections.usagePurpose.customize')}</li>
            <li>{t('sections.usagePurpose.prevent')}</li>
          </Box>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.transfer.title')}
          </Text>
          <Text as='p'>{t('sections.transfer.description')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.disclosure.title')}
          </Text>
          <Text as='p'>{t('sections.disclosure.description')}</Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>{t('sections.disclosure.legal')}</li>
            <li>{t('sections.disclosure.authority')}</li>
            <li>{t('sections.disclosure.fraud')}</li>
            <li>{t('sections.disclosure.protection')}</li>
          </Box>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.security.title')}
          </Text>
          <Text as='p'>{t('sections.security.description')}</Text>
          <Text as='p'>{t('sections.security.warning')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.providers.title')}
          </Text>
          <Text as='p'>{t('sections.providers.description')}</Text>
          <Text as='p'>{t('sections.providers.restriction')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.changes.title')}
          </Text>
          <Text as='p'>{t('sections.changes.description')}</Text>
        </Flex>

        <Flex as='section' flexDirection='column' gap={2} alignItems='flex-start'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.contact.title')}
          </Text>
          <Text as='p'>{t('sections.contact.description')}</Text>
          <Text as='p'>{t('sections.contact.email')}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}
