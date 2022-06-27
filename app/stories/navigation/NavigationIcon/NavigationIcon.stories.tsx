import type { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { withRouter } from 'storybook-addon-react-router-v6';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import NavigationIcon from './NavigationIcon';

const NavigationIconStory: ComponentMeta<typeof NavigationIcon> = {
  title: 'Navigation/LinkIcon',
  component: NavigationIcon,
  decorators: [withRouter],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const Template: ComponentStory<typeof NavigationIcon> = (props) => {
  return (
    <NavigationIcon {...props}>
      <HomeRoundedIcon />
    </NavigationIcon>
  );
};

const defaultRoute = '#';

export const Desktop = Template.bind({});
Desktop.args = {
  highlighted: true,
  route: defaultRoute,
};

export const Mobile = Template.bind({});
Mobile.args = {
  highlighted: true,
  route: defaultRoute,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export default NavigationIconStory;
