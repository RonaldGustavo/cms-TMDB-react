/* eslint-disable jsx-a11y/anchor-is-valid */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { KTSVG } from '../../../utilities';
import {
  Edit,
  Detail,
  Delete,
  Download,
  YesCircle,
  NoCircle,
  Stars,
} from '../../../utilities/ImageImport';
import { useEffect, useState } from 'react';
import { Spin, Empty, Pagination } from 'antd';
import Swal from 'sweetalert2';

import moment from 'moment';

type Props = {
  // required
  className?: string;
  columns: any;
  page: number;
  arrAction: string[];

  // optional
  form?: any;
  custom?: any;
  data?: any;
  loading?: boolean;
  noaction?: boolean;
  filter?: boolean;
  customStyle?: any;
  functions?: any;
};

const BaseTable = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(20);
  const [pageShowCurr, setPageShowCurr] = useState<number>(1);
  const [showSelectedPage] = useState([10, 20, 30, 40, 50]);

  const startData = (page - 1) * perPage + 1;
  const endData = Math.min(
    page * perPage,
    props.data && props.data?.total_results
  );

  const arrActionDynamic = props.arrAction;

  useEffect(() => {
    setPage(props.page);
    if (props.data?.total_results > 0) {
      let pageShow = Math.ceil(props.data?.total_results / perPage);
      setPageShowCurr(pageShow);
    }
  }, [props.page, props.data, pageShowCurr]);

  const handleViewDetail = (item: any) => {
    alert(`handle detail ${item.email}`);
  };

  const handleEdit = (item: any) => {
    alert(`handle edit ${item.email}`);
  };

  const handleDownload = (item: any) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<span style="color: white">Yes</span>',
      cancelButtonText: '<span style="color: white">No</span>',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Berhasil!',
          text: `Berhasil Download ${item.email}`,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#15ACE1',
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      } else {
        Swal.fire('Gagal', 'Gagal Download', 'error');
      }
    });
  };

  const generateHeader = () =>
    props.columns &&
    props.columns.map((column: any, index: number) => (
      <th
        key={index}
        style={{
          paddingLeft: '0.75rem',
          minWidth: '100px',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          ...props.customStyle,
        }}
        className={'text-center'}
      >
        {column.Header}{' '}
      </th>
    ));

  const generateAction = (item: any) =>
    arrActionDynamic.map((placement: any) => (
      <OverlayTrigger
        key={placement}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            <strong>{placement}</strong>.
          </Tooltip>
        }
      >
        {placement === 'Detail' ? (
          <button
            className="btn btn-icon btn-light-primary btn-sm me-1"
            onClick={() => handleViewDetail(item)}
          >
            <KTSVG path={Detail} className="svg-icon-3" />
          </button>
        ) : placement === 'Edit' ? (
          <button
            className="btn btn-icon btn-light-warning btn-sm me-1"
            onClick={() => handleEdit(item)}
          >
            <KTSVG path={Edit} className="svg-icon-3" />
          </button>
        ) : placement === 'Delete' ? (
          <button
            className="btn btn-icon btn-light-danger btn-sm me-1"
            onClick={() => props.functions.handleDelete(item._id || item.id)}
          >
            <KTSVG path={Delete} className="svg-icon-3" />
          </button>
        ) : placement === 'Download' ? (
          <button
            className="btn btn-icon btn-light-success btn-sm me-1"
            onClick={() => handleDownload(item)}
          >
            <KTSVG path={Download} className="svg-icon-3" />
          </button>
        ) : (
          <></>
        )}
      </OverlayTrigger>
    ));

  const renderCell = (col: any, item: any) => {
    const value = item[col.accessor];

    switch (col.accessor) {
      case 'status':
        return (
          <>
            {item[col.sub_accessor || col.accessor] === 'success' ? (
              <KTSVG path={YesCircle} className="svg-icon-3 svg-icon-success" />
            ) : (
              <KTSVG path={NoCircle} className="svg-icon-3 svg-icon-danger" />
            )}
          </>
        );

      case 'vote_average':
        return (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1px',
            }}
          >
            {Number(value).toFixed(1)}
            <KTSVG
              path={Stars}
              className="svg-icon-3"
              useDefaultClass={false}
            />
          </p>
        );

      case 'release_date':
        return moment(value).format('DD MMM YYYY');

      default:
        const subValue = col.sub_accessor
          ? value?.[col.sub_accessor] ?? '-'
          : value ?? '-';

        return <p className="text-dark d-block mb-1 fs-6">{subValue}</p>;
    }
  };

  const generateBody = () =>
    props.data?.results?.map((item: any, idx: number) => (
      <tr key={idx}>
        {props.columns.map((col: any, i: number) => (
          <td
            key={i}
            style={{ paddingLeft: '0.75rem' }}
            className="text-center"
          >
            {renderCell(col, item)}
          </td>
        ))}

        {!props.noaction && (
          <td className="text-center">{generateAction(item)}</td>
        )}
      </tr>
    ));

  return (
    <div className="card px-5">
      {!props.loading ? (
        <>
          {props.data?.results && props.data?.results.length > 0 ? (
            <>
              <div className="table-responsive">
                <table
                  className={`table table-rounded table-striped align-middle mt-4 ${props.className}`}
                  id="table"
                >
                  <thead>
                    <tr className="text-muted">
                      {generateHeader()}
                      {!props.noaction && (
                        <th
                          className="text-center "
                          style={{
                            minWidth: '140px',
                            width: '140px',
                            paddingLeft: '0.75rem',
                            paddingTop: '1.5rem',
                            paddingBottom: '1.5rem',
                          }}
                        >
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="mx-4">{generateBody()}</tbody>
                </table>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-3">
                  <p
                    style={{
                      marginBottom: 0,
                    }}
                  >{`Showing: ${startData} to ${endData} of ${
                    props.data && props.data?.total_results
                  } records`}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end">
                  <Pagination
                    current={page}
                    pageSize={perPage}
                    total={Math.min(
                      props.data?.total_results || 0,
                      500 * perPage // karena batasnya adalah 500 page
                    )}
                    showSizeChanger={false}
                    onChange={(page) => {
                      setPage(page);
                      props.functions.handleChangePage?.(page);
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div
              className="d-flex"
              style={{
                height: '300px',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <Empty />
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className="d-flex"
          style={{
            height: '300px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <Spin />
          </div>
        </div>
      )}
    </div>
  );
};

export default BaseTable;
