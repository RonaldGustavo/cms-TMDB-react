import React from 'react';
import { PageLink, PageTitle } from '../../../components/layout/core';
import { Settings } from './components/settings/Settings';
import { AccountHeader } from './AccountHeader';

const accountBreadCrumbs: Array<PageLink> = [
  {
    service: 'System Admin',
    title: 'Account',
    path: '/crafted/account/overview',
    isSeparator: false,
    isActive: false,
  },
  // {
  //   title: '',
  //   path: '',
  //   isSeparator: true,
  //   isActive: false,
  // },
];

const AccountPage: React.FC = () => {
  return (
    <>
      <AccountHeader />
      <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
      <Settings />
    </>
  );
};

export default AccountPage;
