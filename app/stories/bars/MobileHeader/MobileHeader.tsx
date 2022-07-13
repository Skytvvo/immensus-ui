import type { FC } from 'react';
import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { LC_MH } from '@stories/bars/MobileHeader/MobileHeader.const';
import { navigationRoutes } from '@collections/navigation.enum';

const MobileHeader: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Grid item container justifyContent="flex-start" alignItems="center">
            <Link to={navigationRoutes.HOME}>
              <Typography variant="h5">{LC_MH.LOGO}</Typography>
            </Link>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton>
              <SearchRoundedIcon />
            </IconButton>
            <IconButton>
              <NotificationsRoundedIcon />
            </IconButton>
            <IconButton>
              <SendRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
