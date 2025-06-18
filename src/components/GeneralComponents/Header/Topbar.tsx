import clsx from 'clsx';
import React, { FC } from 'react';
import { KTSVG } from '../../../utilities';
import { HeaderUserMenu } from 'components/layout/partials';
import { useLayout } from '../../layout/core';
import { Hamburger } from '../../../utilities/ImageImport';
import { abbreviatedString } from 'utilities/AbbreviatedString';
import { useSelector } from 'react-redux';

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';

const Topbar: FC = () => {
  const { config } = useLayout();

  const { dataUser } = useSelector((state: any) => state.Auth);

  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id="kt_header_user_menu_toggle"
      >
        {/* begin::Toggle */}
        {/* <DefaultTitle /> */}
        <div
          className={clsx(
            'cursor-pointer symbol',
            toolbarUserAvatarHeightClass
          )}
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <div className="avatar-user">
            {abbreviatedString(dataUser.user_name || 'admin')}
          </div>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div
          className="d-flex align-items-center d-lg-none ms-2 me-n3"
          title="Show header menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_header_menu_mobile_toggle"
          >
            <KTSVG path={Hamburger} className="svg-icon-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export { Topbar };
