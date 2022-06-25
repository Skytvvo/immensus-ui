import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { FC, LiHTMLAttributes, SyntheticEvent } from 'react';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import type { AutocompleteOption } from '../../../globals/interfaces/input.type';
import { userActionDelay } from '../../../globals/consts/asyncValues.const';
import { LC_NS, NavigationSearchContext } from './NavigationSearch.const';
import type { NavigationSearchContextInterface } from './NavigationSearch.type';

const NavigationSearch: FC = () => {
  const { options, onLoadOptionsByKeyWord, onSelectOptionById, isLoading } =
    useContext<NavigationSearchContextInterface>(NavigationSearchContext);

  const [searchValue, setSearchValue] = useState<string>('');

  const onTypeHandler = (_: SyntheticEvent, value: string) => {
    setSearchValue(value);
  };

  const toOptionEqual = (
    option: AutocompleteOption,
    selectedOption: AutocompleteOption
  ) => option.id === selectedOption.id;

  const onSelectOptionHandler = (
    _: SyntheticEvent,
    value: AutocompleteOption | null
  ) => {
    if (value) onSelectOptionById(value.id);
  };

  const debounceOnLoadHandler = useCallback(
    debounce(onLoadOptionsByKeyWord, userActionDelay),
    []
  );

  const renderOption = (
    params: LiHTMLAttributes<HTMLLIElement>,
    { id, label }: AutocompleteOption
  ) => (
    <li {...params} key={id}>
      {label}
    </li>
  );

  useEffect(() => {
    debounceOnLoadHandler(searchValue);
  }, [searchValue]);

  return (
    <Autocomplete
      loading={isLoading}
      onInputChange={onTypeHandler}
      onChange={onSelectOptionHandler}
      inputValue={searchValue}
      options={options}
      placeholder={LC_NS.defaultPlaceholder}
      isOptionEqualToValue={toOptionEqual}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default NavigationSearch;
