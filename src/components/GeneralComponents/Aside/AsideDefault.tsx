/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useLayout } from '../../layout/core';
import { LogoMedia } from '../../../utilities/ImageImport';
import AsideMenu from './AsideMenu';

const AsideDefault: FC = () => {
  const { config, classes } = useLayout();
  const { aside } = config;

  return (
    <div
      id="kt_aside"
      className={clsx('aside', classes.aside.join(' '))}
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle">
      {/* begin::Brand */}
      <div className="aside-logo" id="kt_aside_logo">
        {/* begin::Logo */}
        {aside.theme === 'dark' ? (
          <div className="d-flex align-items-center">
            {/* <img
              alt="Logo"
              className="h-25px logo d-flex align-items-center"
              src="/public/favicon.ico"
              /> */}
            <h3 className="mb-0" style={{ color: 'white', marginLeft: '10px' }}>
              TMDB Ronald App
            </h3>
          </div>
        ) : (
          ''
        )}
        {aside.theme === 'light' && (
          <Link to="/dashboard">
            <img alt="Logo" className="h-25px logo" src={LogoMedia} />
          </Link>
        )}
        {/* end::Logo */}

        {/* begin::Aside toggler */}
        {/* {aside.minimize && (
          <div
            id="kt_aside_toggle"
            className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize">
            {titleCMS()}
            <KTSVG
              path={'/media/icons/duotune/arrows/arr080.svg'}
              className={'svg-icon-1 rotate-180'}
            />
          </div>
        )} */}
        {/* end::Aside toggler */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className="aside-menu flex-column-fluid">
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}
    </div>
  );
};

export default AsideDefault ;

