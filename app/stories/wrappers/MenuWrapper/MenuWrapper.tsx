import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Badge, IconButton, Menu } from '@mui/material';

import type { IMenuBar } from './MenuWrapper.type';

const MenuWrapper: FC<IMenuBar> = (props) => {
  const { isNotificationVisible, children, menuIcon } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
          invisible={isNotificationVisible}
        >
          {menuIcon}
        </Badge>
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleCloseCallback}
        onClose={handleCloseCallback}
      >
        {children}
      </Menu>
    </>
  );
};

export default MenuWrapper;
