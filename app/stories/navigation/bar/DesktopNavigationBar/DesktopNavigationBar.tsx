import React from 'react';
import type { FC } from 'react';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import NavigationSearch from '../../NavigationSearch/NavigationSearch';
import DesktopNavigationLink from '../../../wrappers/DesktopNavigatioLink';
import { navigationRoutes } from '../../../../globals/collections/navigation.enum';
import { LC_DNB } from './DesktopNavigationBar.const';

const DesktopNavigationBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h6" align="center">
              <Link to={navigationRoutes.HOME}>{LC_DNB.logo}</Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <NavigationSearch />
          </Grid>
          <Grid item xs={3}>
            <Button startIcon={<AddCircleIcon />} variant="contained">
              {LC_DNB.createNewPostButton}
            </Button>
          </Grid>
          <Grid item xs={3}>
            <DesktopNavigationLink route={navigationRoutes.HOME}>
              <HomeRoundedIcon />
            </DesktopNavigationLink>
            <DesktopNavigationLink route={navigationRoutes.EXPLORE}>
              <ExploreRoundedIcon />
            </DesktopNavigationLink>
            <DesktopNavigationLink route={navigationRoutes.DIRECT}>
              <SendRoundedIcon />
            </DesktopNavigationLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavigationBar;
