import { useState } from 'react';
import { uniqueId } from 'lodash';
import type { AutocompleteOption } from '../../../globals/interfaces/input.type';
import { mockedResponseTime } from '../../../globals/consts/asyncValues.const';

const useMockedSearchStory = () => {
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [isOptionsLoading, setIsOptionsLoading] = useState<boolean>(false);

  const onLoadOptionsByKeyWord = (value: string) => {
    if (value === '') {
      setOptions([]);
      return;
    }

    setIsOptionsLoading(true);

    const mockedResponse: AutocompleteOption[] = [
      {
        label: value,
        id: uniqueId(value),
      },
      {
        label: value,
        id: uniqueId(value),
      },
      {
        label: value,
        id: uniqueId(value),
      },
    ];

    setTimeout(() => {
      setOptions(mockedResponse);
      setIsOptionsLoading(false);
    }, mockedResponseTime);
  };

  const onSelectOptionById = () => {};

  return {
    options,
    isLoading: isOptionsLoading,
    onLoadOptionsByKeyWord,
    onSelectOptionById,
  };
};

export default useMockedSearchStory;
