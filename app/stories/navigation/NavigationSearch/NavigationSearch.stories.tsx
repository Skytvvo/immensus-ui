import type { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationSearch from '@stories/navigation/NavigationSearch/NavigationSearch';
import useMockedSearchStory from '@stories/navigation/NavigationSearch/useMockedSearchStory';
import { NavigationSearchProvider } from './NavigationSearch.const';

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
