import React from 'react';
import type { FC } from 'react';
import { AppBar, Button, Grid, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { navigationRoutes } from '@collections/navigation.enum';
import { LC_DNB } from '@stories/bars/DesktopNavigationBar/DesktopNavigationBar.const';
import NavigationSearch from '@stories/navigation/NavigationSearch/NavigationSearch';
import DesktopNavigationLink from '@stories/wrappers/DesktopNavigatioLink';
import NotificationMenu from '@stories/menu/NotificationMenu/NotificationMenu';
import ProfileMenu from '@stories/menu/ProfileMenu/ProfileMenu';

const DesktopNavigationBar: FC = () => {
  return (
    <AppBar position="static">
      <Grid container direction="row" alignItems="stretch" wrap="nowrap">
        <Grid
          item
          xs={2}
          container
          justifyContent="stretch"
          alignItems="stretch"
          className="rounded-r-lg bg-stone-100 p-0 hover:bg-gradient-to-r to-purple-500 from-pink-500 transition hover:text-gray-50	"
        >
          <Link
            to={navigationRoutes.HOME}
            className="grow flex justify-center items-center"
          >
            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
              {LC_DNB.logo}
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          xs={6}
          container
          className="p-2"
          wrap="nowrap"
          justifyContent="space-around"
          alignItems="stretch"
        >
          <Grid item xs={7}>
            <NavigationSearch />
          </Grid>
          <Grid item>
            <Button
              startIcon={<AddCircleIcon />}
              variant="contained"
              size="large"
            >
              <Typography noWrap>{LC_DNB.createNewPostButton}</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={4} container alignItems="stretch" wrap="nowrap">
          <DesktopNavigationLink route={navigationRoutes.HOME}>
            <HomeRoundedIcon />
          </DesktopNavigationLink>
          <DesktopNavigationLink route={navigationRoutes.EXPLORE}>
            <ExploreRoundedIcon />
          </DesktopNavigationLink>
          <DesktopNavigationLink route={navigationRoutes.DIRECT}>
            <SendRoundedIcon />
          </DesktopNavigationLink>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            wrap="nowrap"
          >
            <NotificationMenu />
            <ProfileMenu />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default DesktopNavigationBar;
