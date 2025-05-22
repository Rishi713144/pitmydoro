'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';

interface TiDividerProps {
  width?: string;
  height?: string;
  color?: string;
  mx?: string;
  my?: string;
}

export const TiDivider: React.FC<TiDividerProps> = ({
  width = '100%',
  height = '1px',
  color = 'gray.300',
  mx = '0',
  my = '4',
}) => {
  return <Box width={width} height={height} bg={color} mx={mx} my={my} borderRadius='full' />;
};
