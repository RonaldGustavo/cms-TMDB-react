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
  ArrowUp,
  ArrowDown,
} from '../../../utilities/ImageImport';
import { useEffect, useState } from 'react';
import { Spin, Empty, Pagination } from 'antd';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

type Props = {
  // required
  className?: string;
  columns: any;
  page: number;
  perPage: number;
  arrAction: string[];
  setFieldSort: any;
  sort: any;
  setSort: any;

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
  const [perPage, setPerPage] = useState<number>(10);
  const [pageShowCurr, setPageShowCurr] = useState<number>(0);
  const [showSelectedPage] = useState([10, 20, 30, 40, 50]);
  // const [sort, setSort] = useState<string>('desc');
  // const [fieldSort, setFieldSort] = useState<any>(
  //   props.defaultFieldSort || 'created_at'
  // );

  const startData = (page - 1) * perPage + 1;
  const endData = Math.min(
    page * perPage,
    props.data && props.data?.pagination?.total_data
  );

  const navigate = useNavigate();

  const arrActionDynamic = props.arrAction;

  const dispatch = useDispatch();

  useEffect(() => {
    setPage(props.page);
    setPerPage(props.perPage);
    if (props.data?.pagination?.total_data > 0) {
      let pageShow = Math.ceil(props.data?.pagination?.total_data / perPage);
      setPageShowCurr(pageShow);
    }
  }, [page, perPage, props.data, pageShowCurr]);

  const handleSort = (subAcc: any) => {
    props.setSort((prevSort: any) => {
      // Ubah nilai sort dari 'asc' ke 'desc' atau sebaliknya
      const newSort = prevSort === 'asc' ? 'desc' : 'asc';
      return newSort;
    });
    props.setFieldSort(subAcc);
  };

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
        <KTSVG
          path={props.sort === 'desc' ? ArrowUp : ArrowDown}
          className="svg-icon-3 svg-icon-dark"
          onClick={() => handleSort(column.accessor)}
        />
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

  const generateBody = () =>
    props.data.data.map((item: any, idx: any) => {
      return (
        <tr key={idx}>
          {props.columns.map((col: any, i: number) => {
            return (
              <td
                style={{ paddingLeft: '0.75rem' }}
                key={i}
                className={'text-center'}
              >
                {col.accessor === 'created_at' ||
                col.accessor === 'updated_at' ? (
                  <p
                    className="text-dark d-block mb-1 fs-6"
                    style={{
                      width: '125px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item[col.sub_accessor || col.accessor] || '-'}
                  </p>
                ) : col.accessor === 'status' ? (
                  <>
                    {item[col.sub_accessor || col.accessor] === 'success' ? (
                      <KTSVG
                        path={YesCircle}
                        className="svg-icon-3 svg-icon-success"
                      />
                    ) : (
                      <KTSVG
                        path={NoCircle}
                        className="svg-icon-3 svg-icon-danger"
                      />
                    )}
                  </>
                ) : col.accessor === 'file' ? (
                  <>
                    {
                      <p className="text-primary d-block mb-1 fs-6">
                        {item[col.sub_accessor || col.accessor] || '-'}
                      </p>
                    }
                  </>
                ) : (
                  <p className="text-dark d-block mb-1 fs-6">
                    {col.sub_accessor
                      ? item[col.accessor] !== null &&
                        item[col.accessor] !== undefined
                        ? item[col.accessor][col.sub_accessor]
                        : '-'
                      : item[col.accessor || col.sub_accessor] || '-'}
                  </p>
                )}
              </td>
            );
          })}
          {!props.noaction && (
            <td className="text-center ">{generateAction(item)}</td>
          )}
        </tr>
      );
    });

  return (
    <div className="card px-5">
      {!props.loading ? (
        <>
          {props.data.data && props.data.data.length > 0 ? (
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
                  <div>
                    <select
                      value={perPage}
                      className="form-select rounded w-10"
                      data-testid="selectSize"
                      onChange={(e) => {
                        props.functions.handleChangePage(
                          1,
                          Number(e.target.value)
                        );
                      }}
                      color="primary"
                    >
                      {showSelectedPage.map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p
                    style={{
                      marginBottom: 0,
                    }}
                  >{`Showing: ${startData} to ${endData} of ${
                    props.data && props.data?.pagination?.total_data
                  } records`}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end">
                  <Pagination
                    current={page}
                    className="pagination"
                    pageSize={perPage}
                    total={props.data && props.data?.pagination?.total_data}
                    showSizeChanger={false}
                    onChange={(page, pageSize) => {
                      props.functions.handleChangePage(page, pageSize);
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
