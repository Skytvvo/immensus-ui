import type { FC } from 'react';
import React from 'react';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Divider, MenuItem, Stack, Typography } from '@mui/material';
import MenuWrapper from '../../wrappers/MenuWrapper';
import { notificationMenuMockedNotifications } from './NotificationMenu.const';

const NotificationMenu: FC = () => {
  return (
    <MenuWrapper menuIcon={<NotificationsRoundedIcon />}>
      {notificationMenuMockedNotifications.map(({ label, message }) => (
        <MenuItem key={label}>
          <Stack spacing={1}>
            <Typography variant="h6" align="left">
              {label}
            </Typography>
            <Typography align="justify">{message}</Typography>
            <Divider />
          </Stack>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default NotificationMenu;
