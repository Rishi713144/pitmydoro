'use client';

import React, { useRef } from 'react';
import { User } from 'firebase/auth';
import { Avatar, Circle, Float, Menu, Portal } from '@chakra-ui/react';

interface Props {
  user: User;
  onLogout: () => void;
}

export const UserMenu = ({ user, onLogout }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const getAnchorRect = () => ref.current!.getBoundingClientRect();

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Menu.Root positioning={{ getAnchorRect }}>
      <Menu.Trigger rounded='full' focusRing='outside'>
        <Avatar.Root
          position={'absolute'}
          right={30}
          top={30}
          borderRadius={'full'}
          size='lg'
          cursor='pointer'
          ref={ref}
        >
          <Avatar.Fallback name='Segun Adebayo' />
          <Avatar.Image
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
            alt='Avatar'
          />
          <Float placement='bottom-end' offsetX='1' offsetY='1'>
            <Circle bg='green.500' size='8px' outline='0.2em solid' outlineColor='bg' />
          </Float>
        </Avatar.Root>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item cursor='pointer' value='account'>
              Account
            </Menu.Item>
            <Menu.Item cursor='pointer' value='settings'>
              Settings
            </Menu.Item>
            <Menu.Item cursor='pointer' value='logout' onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
