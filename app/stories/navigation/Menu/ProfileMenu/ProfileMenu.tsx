import type { FC } from 'react';
import React from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';

const ProfileMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
      >
        <MenuItem>
          <Avatar /> My profile
        </MenuItem>
        <MenuItem>Settings</MenuItem>
        <Button>Sign out</Button>
      </Menu>
    </>
  );
};

export default ProfileMenu;
