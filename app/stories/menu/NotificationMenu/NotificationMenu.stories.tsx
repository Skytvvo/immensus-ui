import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NotificationMenu from './NotificationMenu';

const NotificationMenuStory: ComponentMeta<typeof NotificationMenu> = {
  title: 'Menu/NotificationMenu',
  component: NotificationMenu,
};

export const Template: ComponentStory<typeof NotificationMenu> = (props) => (
  <NotificationMenu {...props} />
);

export default NotificationMenuStory;
