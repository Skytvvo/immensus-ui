import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const LC_PM = {
  MY_PROFILE: 'My profile',
  SETTINGS: 'Settings',
  SIGN_OUT: 'Sign out',
};

export const mockedMenuOptions = [LC_PM.MY_PROFILE, LC_PM.SETTINGS];

export const listOptionSx: SxProps<Theme> = {
  padding: '0.5rem 2rem',
};
