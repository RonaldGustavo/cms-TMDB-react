import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { token } from 'constants';

const Routes: FC = () => {
  return (
    <BrowserRouter>
      {!token ? <PublicRoutes /> : <PrivateRoutes />}
    </BrowserRouter>
  );
};

export { Routes };
