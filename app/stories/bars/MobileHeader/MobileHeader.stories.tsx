import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MobileHeader from '@stories/bars/MobileHeader/MobileHeader';

const MobileHeaderStory: ComponentMeta<typeof MobileHeader> = {
  title: 'Bars/Header',
  component: MobileHeader,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof MobileHeader> = (props) => (
  <MobileHeader {...props} />
);

export const Mobile = Template.bind({});
Mobile.args = {};

export default MobileHeaderStory;
