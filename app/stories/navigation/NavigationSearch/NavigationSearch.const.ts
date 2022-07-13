import { createContext } from 'react';
import type { NavigationSearchContextInterface } from '@stories/navigation/NavigationSearch/NavigationSearch.type';

export const LC_NS = {
  defaultPlaceholder: 'Search',
};

const defaultContext: NavigationSearchContextInterface = {
  options: [],
  isLoading: false,
  onSelectOptionById: () => {},
  onLoadOptionsByKeyWord: () => {},
};

export const NavigationSearchContext = createContext(defaultContext);
export const NavigationSearchProvider = NavigationSearchContext.Provider;
