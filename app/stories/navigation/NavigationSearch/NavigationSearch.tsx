import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { FC, LiHTMLAttributes, SyntheticEvent } from 'react';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import type { NavigationSearchContextInterface } from '@stories/navigation/NavigationSearch/NavigationSearch.type';
import {
  LC_NS,
  NavigationSearchContext,
} from '@stories/navigation/NavigationSearch/NavigationSearch.const';
import type { AutocompleteOption } from '@interfaces/input.type';
import { userActionDelay } from '@constants/asyncValues.const';

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
      isOptionEqualToValue={toOptionEqual}
      renderOption={renderOption}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          placeholder={LC_NS.defaultPlaceholder}
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
