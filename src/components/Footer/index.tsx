'use client';

import { Center, Text, VStack } from '@chakra-ui/react';
import tinycolor from 'tinycolor2';
import useSessionStore from '@/stores/Session.store';
import usePomodoroStore from '@/stores/Pomodoro.store';

export const Footer = () => {
  const sessionStatus = useSessionStore((state) => state.status);
  const currentScuderia = usePomodoroStore((state) => state.currentScuderia);

  const darkenColor = tinycolor(currentScuderia?.colors?.background?.[sessionStatus])
    .darken(5)
    .toString();

  return (
    <Center bgColor={{ base: darkenColor, _dark: 'gray.950' }} paddingY={12} gap={4}>
      <VStack>
        <Text fontSize={'sm'} color={'gray.500'}>
          &copy; {new Date().getFullYear()} Pit my doro
        </Text>
        <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'}>
          Made with ❤️ by @srteerra
        </Text>
      </VStack>
    </Center>
  );
};
