import React from 'react';
import type { FC } from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import NavigationSearch from '../NavigationSearch/NavigationSearch';
import { LC_DNB } from './DesktopNavigationBar.const';

const homePageRoute = '#';

const DesktopNavigationBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h6" align="center">
              <Link to={homePageRoute}>{LC_DNB.logo}</Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <NavigationSearch />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNavigationBar;
