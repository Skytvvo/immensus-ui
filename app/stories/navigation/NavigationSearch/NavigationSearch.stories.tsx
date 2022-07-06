import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationSearch from './NavigationSearch';
import { NavigationSearchProvider } from './NavigationSearch.const';
import useMockedSearchStory from './useMockedSearchStory';

const NavigationSearchStory: ComponentMeta<typeof NavigationSearch> = {
  title: 'Navigation/Search',
  component: NavigationSearch,
};

const Template: ComponentStory<typeof NavigationSearch> = (props) => {
  const context = useMockedSearchStory();

  return (
    <NavigationSearchProvider value={context}>
      <NavigationSearch {...props} />
    </NavigationSearchProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default NavigationSearchStory;
