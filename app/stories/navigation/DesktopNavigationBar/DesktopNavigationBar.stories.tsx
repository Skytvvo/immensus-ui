import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import DesktopNavigationBar from './index.js';

const desktopNavigationBarStory: ComponentMeta<typeof DesktopNavigationBar> = {
  title: 'NavigationBar',
  component: DesktopNavigationBar,
};

const Template: ComponentStory<typeof DesktopNavigationBar> = (args) => (
  <DesktopNavigationBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default desktopNavigationBarStory;
