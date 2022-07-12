import React from 'react';
import type { FC } from 'react';
import { AppBar, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import NavigationSearch from '../../navigation/NavigationSearch/NavigationSearch';
import DesktopNavigationLink from '../../wrappers/DesktopNavigatioLink';
import { navigationRoutes } from '../../../globals/collections/navigation.enum';
import NotificationMenu from '../../menu/NotificationMenu';
import ProfileMenu from '../../menu/ProfileMenu';
import { LC_DNB } from './DesktopNavigationBar.const';

const DesktopNavigationBar: FC = () => {
  return (
    <AppBar position="static">
      <Container>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          columnSpacing={3}
          wrap="nowrap"
        >
          <Grid
            item
            xs={2}
            container
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link to={navigationRoutes.HOME}>
              <Typography variant="h6" align="center">
                {LC_DNB.logo}
              </Typography>
            </Link>
          </Grid>

          <Grid
            item
            xs={6}
            columnSpacing={3}
            container
            className="p-2"
            wrap="nowrap"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs>
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
      </Container>
    </AppBar>
  );
};

export default DesktopNavigationBar;
