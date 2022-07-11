import React from 'react';
import type { FC } from 'react';
import { AppBar, Button, Container, Stack, Typography } from '@mui/material';
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
        >
          <Stack justifyContent="center">
            <Typography variant="h6" align="center">
              <Link to={navigationRoutes.HOME}>{LC_DNB.logo}</Link>
            </Typography>
          </Stack>
          <NavigationSearch />
          <Stack direction="row">
            <Button startIcon={<AddCircleIcon />} variant="contained">
              <Typography noWrap>{LC_DNB.createNewPostButton}</Typography>
            </Button>
          </Stack>
          <Stack direction="row" alignItems="stretch" justifyContent="stretch">
            <DesktopNavigationLink route={navigationRoutes.HOME}>
              <HomeRoundedIcon />
            </DesktopNavigationLink>
            <DesktopNavigationLink route={navigationRoutes.EXPLORE}>
              <ExploreRoundedIcon />
            </DesktopNavigationLink>
            <DesktopNavigationLink route={navigationRoutes.DIRECT}>
              <SendRoundedIcon />
            </DesktopNavigationLink>
            <NotificationMenu />
            <ProfileMenu />
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default DesktopNavigationBar;
