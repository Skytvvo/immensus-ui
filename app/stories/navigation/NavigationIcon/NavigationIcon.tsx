import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { Chip } from '@mui/material';
import { Link } from '@remix-run/react';
import type { DesktopNavigationIconInterface } from './NavigationIcon.type';

const NavigationIcon: FC<DesktopNavigationIconInterface> = (props) => {
  const { children, label, highlighted, route } = props;

  return (
    <Link
      to={route}
      className={classNames({
        'border-2 md:border-0 md:border-b-2 rounded-lg md:rounded-none border-indigo-500':
          highlighted,
      })}
    >
      {label ? (
        <Chip icon={children as ReactElement} label={label} />
      ) : (
        children
      )}
    </Link>
  );
};

export default NavigationIcon;
