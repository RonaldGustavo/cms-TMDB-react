/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      <div
        className={`container d-flex align-items-center justify-content-between`}>
        <div className="text-dark d-flex">
          <span className="text-muted fw-bold">
            <div className="d-flex align-items-center">
              <p className="fw-boldest fs-6 mb-0" style={{ marginRight: 5 }}>
                Copyright
              </p>{' '}
              <span style={{ marginRight: 5 }}> &copy; </span>
              {new Date().getFullYear()}
              <p className="fw-boldest fs-6 mb-0" style={{ marginLeft: 5 }}>
                Ronald Gustavo
              </p>{' '}
            </div>
          </span>
        </div>
        <div>
          <div className="text-dark d-flex">
            <span className="text-muted fw-bold me-2">
              <div className="d-flex align-items-center">
                <p className="fw-bold fs-6 mb-0">Version 1.0.0</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };

