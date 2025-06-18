/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuComponent } from '../../../assets/ts/components';
// import { KTSVG, toAbsoluteUrl } from '../../../utilities';
import { useLayout } from '../../layout/core';
// import { Header } from './Header';
import { DefaultTitle } from './page-title/DefaultTitle';
import { Topbar } from './Topbar';

export function HeaderWrapper() {
  const { pathname } = useLocation();
  const { classes, attributes } = useLayout();
  // const { config, classes, attributes } = useLayout();
  // const { header, aside } = config;

  useEffect(() => {
    MenuComponent.reinitialization();
  }, [pathname]);

  return (
    <div
      id="kt_header"
      className={clsx(
        'header',
        classes.header.join(' '),
        'align-items-stretch'
      )}
      {...attributes.headerMenu}>
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}>
        <DefaultTitle />
        <Topbar />
        {/* end::Wrapper */}
      </div>
    </div>
  );
}

