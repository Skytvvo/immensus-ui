import type { AutocompleteOption } from '@interfaces/input.type';

export interface NavigationSearchContextInterface {
  options: AutocompleteOption[];
  isLoading: boolean;

  onLoadOptionsByKeyWord(value: string): void;
  onSelectOptionById(id: string): void;
}
