import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from '@mui/material';
import { NavigationSearchProvider } from '../../NavigationSearch/NavigationSearch.const';
import useMockedSearchStory from '../../NavigationSearch/useMockedSearchStory';
import { desktopNavigationTheme } from './DesktopNavigationBar.const';
import DesktopNavigationBar from './index.js';

const desktopNavigationBarStory: ComponentMeta<typeof DesktopNavigationBar> = {
  title: 'Navigation/Bar/Desktop',
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

export const Default = Template.bind({});
Default.args = {};

export default desktopNavigationBarStory;
