import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { Avatar, Button, Divider, MenuItem } from '@mui/material';
import MenuWrapper from '../../wrappers/MenuWrapper';
import { LC_PM, listOptionSx, mockedMenuOptions } from './ProfileMenu.const';

const ProfileMenu: FC = () => {
  const [isNotificationsInvisible, setNotificationsInvisible] = useState(false);

  const onSignOutHandler = () => {
    setNotificationsInvisible(true);
  };

  const onSignOutCallback = useCallback(onSignOutHandler, []);

  return (
    <MenuWrapper
      menuIcon={<Avatar />}
      isNotificationVisible={isNotificationsInvisible}
    >
      {mockedMenuOptions.map((label) => (
        <MenuItem sx={listOptionSx} key={label}>
          {label}
        </MenuItem>
      ))}
      <Divider />
      <Button fullWidth onClick={onSignOutCallback}>
        {LC_PM.SIGN_OUT}
      </Button>
    </MenuWrapper>
  );
};

export default ProfileMenu;
