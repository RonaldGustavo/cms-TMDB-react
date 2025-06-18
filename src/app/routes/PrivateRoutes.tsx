import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { FallbackView } from '../../components/layout/partials';
import { MasterLayout } from 'components/layout/MasterLayout';
import Path from 'constants/Path';
import { Error404 } from 'app/modules/errors/components/Error404';
import { Error500 } from 'app/modules/errors/components/Error500';
import { ErrorsPage } from 'app/modules/errors/ErrorsPage';

import { token } from '../../constants';
import PopularMovie from 'pages/movies/PopularMovie';
import NowPlayingMovie from 'pages/movies/NowPlayingMovie';
import UpComingMovie from 'pages/movies/UpComingMovie';
import TopRatedMovie from 'pages/movies/TopratedMovie';

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
          <Route index element={<Navigate to={'popularmovie'} />} />
          <Route path={Path.popular}>
            <Route index element={<PopularMovie />} />
          </Route>
          <Route path={Path.playingmovie}>
            <Route index element={<NowPlayingMovie />} />
          </Route>
          <Route path={Path.upcomingmovie}>
            <Route index element={<UpComingMovie />} />
          </Route>
          <Route path={Path.topratedmovie}>
            <Route index element={<TopRatedMovie />} />
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
