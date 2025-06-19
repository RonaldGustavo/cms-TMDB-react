import { Outlet } from 'react-router-dom';

import { Logo } from 'utilities/ImageImport';

export default function AuthLayout() {
  return (
    <>
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-cover bgi-attachment-fixed">
        {/* begin::Content */}
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          {/* begin::Logo */}
          <a href="#" className="mb-12">
            <div className="d-flex align-items-center">
              <img data-testid="img-logo" alt="Logo" src={Logo} className="h-45px" />
              <h1 data-testid="text-tittle-cms-salesman"  style={{ marginLeft: '10px' }}>CMS TMDB Ronald App</h1>
            </div>
          </a>

          <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Content */}
      </div>
    </>
  );
}
