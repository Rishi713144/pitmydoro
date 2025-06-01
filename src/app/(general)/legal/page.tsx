'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useTranslations } from 'use-intl';

export default function TermsPage() {
  const t = useTranslations('legal');

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

        <Text as='p'>
          {t.rich('intro', {
            a: (c) => (
              <strong>
                <a href='https://pitmydoro.com' target='_blank' rel='noopener noreferrer'>
                  {c}
                </a>
              </strong>
            ),
          })}
        </Text>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.identification.title')}
          </Text>

          <Box as='ul' listStyleType='disc' listStylePosition='inside'>
            <li>
              {t.rich('sections.identification.name', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.identification.email', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
            <li>
              {t.rich('sections.identification.location', {
                strong: (c) => <strong>{c}</strong>,
              })}
            </li>
          </Box>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.service.title')}
          </Text>

          <Text as='p'>
            {t.rich('sections.service.description', {
              bmc: (c) => (
                <strong>
                  <a href='https://buymeacoffee.com/' target='_blank' rel='noopener noreferrer'>
                    {c}
                  </a>
                </strong>
              ),
            })}
          </Text>

          <Text as='p'>
            {t.rich('sections.service.notice', {
              strong: (c) => <strong>{c}</strong>,
            })}
          </Text>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.processing.title')}
          </Text>

          <Text as='p'>
            {t.rich('sections.processing.external', {
              bmc: (c) => (
                <strong>
                  <a href='https://buymeacoffee.com/' target='_blank' rel='noopener noreferrer'>
                    {c}
                  </a>
                </strong>
              ),
            })}
          </Text>

          <Text as='p'>{t('sections.processing.noData')}</Text>
          <Text as='p'>{t('sections.processing.perks')}</Text>
          <Text as='p'>{t('sections.processing.process')}</Text>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.commerce.title')}
          </Text>
          <Text as='p'>{t('sections.commerce.description')}</Text>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.jurisdiction.title')}
          </Text>
          <Text as='p'>{t('sections.jurisdiction.statement')}</Text>
          <Text as='p'>{t('sections.jurisdiction.conflict')}</Text>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
          <Text as='h2' fontSize='2xl' fontWeight='bold'>
            {t('sections.disclaimer.title')}
          </Text>
          <Text as='p'>
            {t.rich('sections.disclaimer.description', {
              f1: (chunks) => <strong>{chunks}</strong>,
              community: (chunks) => <em>{chunks}</em>,
            })}
          </Text>
        </Flex>

        <Flex as='section' gap={2} alignItems='flex-start' flexDirection='column'>
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
