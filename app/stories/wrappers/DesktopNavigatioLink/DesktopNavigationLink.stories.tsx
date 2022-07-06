import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DesktopNavigationLink from './DesktopNavigationLink';

const activeRoute = '/active';
const notActiveRoute = '/';

const DesktopNavigationLinkStory: ComponentMeta<typeof DesktopNavigationLink> =
  {
    title: 'Wrappers/NavigationLink/Desktop',
    component: DesktopNavigationLink,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: activeRoute,
      },
    },
  };

const Template: ComponentStory<typeof DesktopNavigationLink> = (props) => (
  <DesktopNavigationLink {...props}>
    <HomeRoundedIcon />
  </DesktopNavigationLink>
);

export const Default = Template.bind({});
Default.args = {
  route: notActiveRoute,
};

export const Active = Template.bind({});
Active.args = {
  route: activeRoute,
};

export default DesktopNavigationLinkStory;
