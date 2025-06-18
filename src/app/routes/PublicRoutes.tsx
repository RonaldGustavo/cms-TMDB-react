import { Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from '../../pages/Auth/Login';
import AuthLayout from 'pages/Auth';

export default function PublicRoutes(): React.JSX.Element {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
