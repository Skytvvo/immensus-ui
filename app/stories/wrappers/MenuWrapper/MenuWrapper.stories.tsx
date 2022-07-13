import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Rectangle } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import MenuWrapper from '@stories/wrappers/MenuWrapper/MenuWrapper';

const MenuBarStory: ComponentMeta<typeof MenuWrapper> = {
  title: 'Wrappers/MenuWrapper',
  component: MenuWrapper,
};

export const Default: ComponentStory<typeof MenuWrapper> = (props) => (
  <MenuWrapper {...props} menuIcon={<Avatar />}>
    <Rectangle
      sx={{
        height: '300px',
        width: '300px',
      }}
    />
  </MenuWrapper>
);

Default.args = {
  isNotificationVisible: false,
};

export default MenuBarStory;
