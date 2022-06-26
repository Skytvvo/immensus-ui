import type { AutocompleteOption } from '../../../globals/interfaces/input.type';

export interface NavigationSearchContextInterface {
  options: AutocompleteOption[];
  isLoading: boolean;

  onLoadOptionsByKeyWord(value: string): void;
  onSelectOptionById(id: string): void;
}
