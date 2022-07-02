import type { FC } from 'react';
import React from 'react';
import { NavLink } from '@remix-run/react';
import classNames from 'classnames';
import type { IDesktopNavigationLink } from './DesktopNavigationLink.type';

const DesktopNavigationLink: FC<IDesktopNavigationLink> = (props) => {
  const { children, route, strictRoute } = props;

  return (
    <NavLink to={route} end={strictRoute}>
      {({ isActive }) => (
        <div
          className={classNames(
            'inline-flex align-center justify-center p-1 border-2 border-transparent',
            'transition [&>svg]:transition [&>svg]:hover:fill-fuchsia-700 hover:border-b-fuchsia-700',
            {
              'border-b-fuchsia-600 [&>svg]:fill-fuchsia-600': isActive,
            }
          )}
        >
          {children}
        </div>
      )}
    </NavLink>
  );
};

export default DesktopNavigationLink;
