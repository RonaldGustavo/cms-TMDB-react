/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { abbreviatedString } from 'utilities/AbbreviatedString';
import { deleteCookie } from 'utilities/cookiesHelper';

const HeaderUserMenu: FC = () => {
  const btnLogout = () => {
    deleteCookie('key_token', () => {
      localStorage.clear();
      window.location.href = `/`;
    });
  };

  const { dataUser } = useSelector((state: any) => state.Auth);

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <div className="avatar-user avatar-user-lg">
              {abbreviatedString(dataUser.user_name || 'admin')}
            </div>
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex flex-column">
              {dataUser.user_name || 'admin'}
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {dataUser.user_name || 'admin@gmail.com'}
            </a>
          </div>
        </div>
      </div>

      <div className="menu-item px-5">
        <Link onClick={() => btnLogout()} to="/" className="menu-link px-5">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
