import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import tinycolor from 'tinycolor2';
import { TeamColors } from '@/interfaces/Teams.interface';

interface Props {
  colors: TeamColors;
}

export const ColorPreview = ({ colors }: Props) => {
  return (
    <Flex>
      <Box
        bg={colors['primary']?.default}
        filter={'brightness(50%)'}
        w={7}
        h={7}
        ml={'0px'}
        borderRadius='full'
        border={`1px solid ${tinycolor(colors['primary']?.default).darken(20).toString()}`}
      />
      <Box
        bg={colors['secondary']?.default}
        w={7}
        h={7}
        ml={'-5px'}
        borderRadius='full'
        border={`1px solid ${tinycolor(colors['secondary']?.default).darken(20).toString()}`}
      />
      <Box
        bg={colors['background']?.session}
        w={7}
        h={7}
        ml={'-5px'}
        borderRadius='full'
        border={`1px solid ${tinycolor(colors['background']?.session).darken(20).toString()}`}
      />
      <Box
        bg={colors['background']?.longBreak}
        w={7}
        h={7}
        ml={'-5px'}
        borderRadius='full'
        border={`1px solid ${tinycolor(colors['background']?.longBreak).darken(20).toString()}`}
      />
      <Box
        bg={colors['background']?.shortBreak}
        w={7}
        h={7}
        ml={'-5px'}
        borderRadius='full'
        border={`1px solid ${tinycolor(colors['background']?.shortBreak).darken(20).toString()}`}
      />
    </Flex>
  );
};
