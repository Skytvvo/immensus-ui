import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileMenu from './ProfileMenu';

const ProfileMenuStory: ComponentMeta<typeof ProfileMenu> = {
  title: 'Navigation/Components/ProfileMenu',
  component: ProfileMenu,
};

const Template: ComponentStory<typeof ProfileMenu> = (props) => (
  <ProfileMenu {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export default ProfileMenuStory;
