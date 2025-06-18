import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { FallbackView } from '../../components/layout/partials';
import { MasterLayout } from 'components/layout/MasterLayout';
import Path from 'constants/Path';
import { Error404 } from 'app/modules/errors/components/Error404';
import { Error500 } from 'app/modules/errors/components/Error500';
import { ErrorsPage } from 'app/modules/errors/ErrorsPage';

import { token } from 'constants';
import Menu1 from 'pages/menu1';
import Menu2 from 'pages/menu2';

export function PrivateRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token) {
      window.location.href = '/';
    }

  }, [pathname]);

  return (
    <Suspense fallback={<FallbackView />}>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route index element={<Navigate to={'menu1'} />} />
          <Route path={Path.menu1}>
            <Route index element={<Menu1 />} />
          </Route>
          <Route path={Path.menu2}>
            <Route index element={<Menu2 />} />
          </Route>
        </Route>

        {/* error */}
        <Route
          path="error/" // Menyediakan parameter dinamis untuk menentukan jenis error
          element={<ErrorsPage />}
        >
          <Route index path="404" element={<Error404 />} />
          <Route path="500" element={<Error500 />} />
        </Route>

        <Route path="*" element={<Navigate to={'error/404'} />} />
      </Routes>
    </Suspense>
  );
}
