import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider } from '@mui/material';
import DesktopNavigationBar from '@stories/bars/DesktopNavigationBar/DesktopNavigationBar';
import useMockedSearchStory from '@stories/navigation/NavigationSearch/useMockedSearchStory';
import { NavigationSearchProvider } from '@stories/navigation/NavigationSearch/NavigationSearch.const';
import { desktopNavigationTheme } from '@stories/bars/DesktopNavigationBar/DesktopNavigationBar.const';

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
