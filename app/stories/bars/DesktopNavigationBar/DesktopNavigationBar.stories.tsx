import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from '@mui/material';
import { NavigationSearchProvider } from '../../navigation/NavigationSearch/NavigationSearch.const';
import useMockedSearchStory from '../../navigation/NavigationSearch/useMockedSearchStory';
import { desktopNavigationTheme } from './DesktopNavigationBar.const';
import DesktopNavigationBar from './index.js';

const desktopNavigationBarStory: ComponentMeta<typeof DesktopNavigationBar> = {
  title: 'Bars/NavigationBar',
  component: DesktopNavigationBar,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof DesktopNavigationBar> = (props) => {
  const context = useMockedSearchStory();

  return (
    <ThemeProvider theme={desktopNavigationTheme}>
      <NavigationSearchProvider value={context}>
        <DesktopNavigationBar {...props} />
      </NavigationSearchProvider>
    </ThemeProvider>
  );
};

export const Desktop = Template.bind({});
Desktop.args = {};

export default desktopNavigationBarStory;
