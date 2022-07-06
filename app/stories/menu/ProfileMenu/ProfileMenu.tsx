import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { LC_PM, listOptionSx, mockedMenuOptions } from './ProfileMenu.const';

const ProfileMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isNotificationsInvisible, setNotificationsInvisible] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setNotificationsInvisible(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickCallback = useCallback(handleClick, []);
  const handleCloseCallback = useCallback(handleClose, []);

  return (
    <>
      <IconButton onClick={handleClickCallback}>
        <Badge
          color="secondary"
          variant="dot"
          invisible={isNotificationsInvisible}
        >
          <Avatar />
        </Badge>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleCloseCallback}
        onClose={handleCloseCallback}
      >
        {mockedMenuOptions.map((label) => (
          <MenuItem sx={listOptionSx} key={label}>
            {label}
          </MenuItem>
        ))}
        <Divider />
        <Button fullWidth>{LC_PM.SIGN_OUT}</Button>
      </Menu>
    </>
  );
};

export default ProfileMenu;
