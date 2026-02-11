import { Box, Flex, Slider, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  onChange: (value: number) => void;
  title: string;
  description?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export const SliderInput = ({
  onChange,
  title,
  description,
  value,
  min = 0,
  max = 1,
  step = 0.01,
  disabled = false,
}: Props) => {
  const handleChange = (details: { value: number[] }) => {
    onChange(details.value[0]);
  };

  const percentage = Math.round(value * 100);

  return (
    <Flex w='full' direction='column' gap={2} opacity={disabled ? 0.5 : 1}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontWeight={'medium'} textTransform={'capitalize'}>
            {title}
          </Text>
          <Text fontWeight={'light'} color={'gray.400'} fontSize={'xs'}>
            {description}
          </Text>
        </Box>
        <Text fontWeight={'medium'} fontSize={'sm'} minW={'40px'} textAlign={'right'}>
          {percentage}%
        </Text>
      </Flex>
      <Slider.Root
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={handleChange}
        disabled={disabled}
        width='full'
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
    </Flex>
  );
};
