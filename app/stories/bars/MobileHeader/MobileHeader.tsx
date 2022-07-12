import type { FC } from 'react';
import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const mockedHomePageRoute = '/';

const LC_MH = {
  LOGO: 'immensus',
};

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
            <Link to={mockedHomePageRoute}>
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
