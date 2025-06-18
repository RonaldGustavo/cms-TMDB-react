import clsx from 'clsx';
import { FC } from 'react';
import { KTSVG } from '../../../../utilities';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PageDescription, useLayout, usePageData } from 'components/layout/core';
import { Home } from 'utilities/ImageImport';

const DefaultTitle: FC = () => {
  const { pageTitle, pageBreadcrumbs } = usePageData();
  const { config, classes } = useLayout();

  const btnLogout = () => {
    window.location.href = `/`;
  };

  return (
    <div
      // id="kt_page_title"
      // data-kt-swapper="true"
      // data-kt-swapper-mode="prepend"
      // data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
      className={clsx('page-title d-flex', classes.pageTitle.join(' '))}
    >

            {/* begin::Title */}
            {pageTitle && (
        <h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">
          {pageTitle}
          {PageDescription && config.pageTitle && config.pageTitle.description && (
            <>
              <span className="h-20px border-gray-200 border-start ms-3 mx-2"></span>
              <small className="text-muted fs-7 fw-bold my-1 ms-1">
                {pageDescription}
              </small>
            </>
          )}
        </h1>
      )}
      {/* end::Title */}

      {pageBreadcrumbs &&
        pageBreadcrumbs.length > 0 &&
        config.pageTitle &&
        config.pageTitle.breadCrumbs && (
          <>            
            <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
              <li className="breadcrumb-item text-dark">
                <div className="d-flex align-items-center">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip">Home</Tooltip>}
                  >
                    <button
                      onClick={() => btnLogout()}
                      className="btn btn-icon btn-sm"
                    >
                      <KTSVG
                        path={Home}
                        className="svg-icon-3 svg-home-hover"
                      />
                    </button>
                  </OverlayTrigger>
                  <h6 style={{ marginTop: '6px' }} className="bg-gray-200">
                    /
                  </h6>
                </div>
              </li>
              {Array.from(pageBreadcrumbs).map((item, index) => (
                <li
                  className={clsx('breadcrumb-item', {
                    'text-dark': !item.isSeparator && item.isActive,
                    'text-muted': !item.isSeparator && !item.isActive,
                  })}
                  key={index}
                >
                  {!item.isSeparator ? (
                    <h6
                      className="text-muted mb-0"                      
                    >
                      {`${item.service} ${
                        item.title !== '' ? `/ ${item.title}` : ''
                      }`}
                    </h6>
                  ) : (
                    <h6 style={{ marginTop: '6px' }} className="bg-gray-200">
                      /
                    </h6>
                  )}
                </li>
              ))}
              <li className="breadcrumb-item text-dark">
                <h6 className="mb-0">{pageTitle}</h6>
              </li>
            </ul>
          </>
        )}
    </div>
  );
};

export { DefaultTitle };
