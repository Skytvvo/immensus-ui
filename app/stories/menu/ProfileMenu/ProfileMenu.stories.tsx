import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileMenu from '@stories/menu/ProfileMenu/ProfileMenu';

const ProfileMenuStory: ComponentMeta<typeof ProfileMenu> = {
  title: 'Menu/ProfileMenu',
  component: ProfileMenu,
};

const Template: ComponentStory<typeof ProfileMenu> = (props) => (
  <ProfileMenu {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export default ProfileMenuStory;
