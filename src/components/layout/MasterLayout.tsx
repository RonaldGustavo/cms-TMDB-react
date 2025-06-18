import React from 'react';
import AsideDefault from '../GeneralComponents/Aside/AsideDefault';
import { Footer } from '../GeneralComponents/Footer';
import { HeaderWrapper } from '../GeneralComponents/Header/HeaderWrapper';
import { ScrollTop } from '../GeneralComponents/ScrollTop';
import { Content } from '../GeneralComponents/Content';
import { MasterInit } from './MasterInit';
import { PageDataProvider } from './core';
import { Outlet } from 'react-router-dom';

const MasterLayout: React.FC = () => {
  return (
    <PageDataProvider>
      <div className="page d-flex flex-row flex-column-fluid">
        <AsideDefault />
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          style={{ paddingTop: 70 }}
          id="kt_wrapper"
        >
          <HeaderWrapper />

          <div
            id="kt_content"
            className="content d-flex flex-column flex-column-fluid"
          >
            {/* <Toolbar /> */}
            <div className="post d-flex flex-column-fluid" id="kt_post">
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <MasterInit />
      <ScrollTop />
    </PageDataProvider>
  );
};

export { MasterLayout };
