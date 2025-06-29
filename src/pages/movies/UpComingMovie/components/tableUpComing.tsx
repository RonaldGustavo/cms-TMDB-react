/* eslint-disable jsx-a11y/anchor-is-valid */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { KTSVG } from '../../../../utilities';
import {
  Stars,
  Detail,
  YesCircle,
  NoCircle,
} from '../../../../utilities/ImageImport';
import { useEffect, useState } from 'react';
import { Spin, Empty, Pagination } from 'antd';

import moment from 'moment';
import { getDetailMovie } from 'app/services/tmdb.service';
import ModalDetailPopularMovie from 'pages/movies/components/modalDetail';
import { Form } from 'react-bootstrap';

type Props = {
  // required
  className?: string;
  columns: any;
  page: number;
  arrAction: string[];
  region: any;
  setRegion: any;
  dataRegion: any;

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

const TableUpComing = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(20);
  const [pageShowCurr, setPageShowCurr] = useState<number>(1);
  const [modalDetail, setModalDetail] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>({});

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
    getDetailMovie(item?.id).then((data: any) => {
      setDataDetail(data?.data);
      setModalDetail(true);
    });
  };

  const handleCloseModalDetail = () => {
    setModalDetail(false);
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
        ) : (
          <></>
        )}
      </OverlayTrigger>
    ));

  const renderCell = (col: any, item: any) => {
    const value = item[col.accessor];

    switch (col.accessor) {
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

      case 'adult':
        return (
          <>
            {value === true ? (
              <KTSVG path={YesCircle} className="svg-icon-3 svg-icon-success" />
            ) : (
              <KTSVG path={NoCircle} className="svg-icon-3 svg-icon-danger" />
            )}
          </>
        );

      case 'overview':
        return value?.length > 40 ? value.slice(0, 40) + '...' : value;

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
      <div className="d-flex gap-4 mb-4 pt-5">
        <div className="w-100">
          <label className="form-label fw-semibold">Minimum Date</label>
          <input
            type="text"
            className="form-control"
            value={moment(props?.data?.dates?.minimum).format('DD MMM YYYY')}
            disabled
          />
        </div>

        <div className="w-100">
          <label className="form-label fw-semibold">Maximum Date</label>
          <input
            type="text"
            className="form-control"
            value={moment(props?.data?.dates?.maximum).format('DD MMM YYYY')}
            disabled
          />
        </div>
      </div>
      <div className="d-flex justify-content-end pt-3">
        <Form.Select
          size="sm"
          value={props?.region}
          onChange={(e) => props?.setRegion(e.target.value)}
          style={{ maxWidth: 180 }}
        >
          {props?.dataRegion &&
            props?.dataRegion.map((region) => (
              <option key={region.code} value={region.code}>
                {region.label}
              </option>
            ))}
        </Form.Select>
      </div>
      {!props.loading ? (
        <>
          {props.data?.results && props.data?.results?.length > 0 ? (
            <>
              <div className="table-responsive">
                <table
                  className={`table table-rounded table-striped align-middle mt-4 ${props.className}`}
                  id="table"
                >
                  <thead>
                    <tr className="text-muted">{generateHeader()}</tr>
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
                      500 * perPage
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
      <ModalDetailPopularMovie
        hideModal={handleCloseModalDetail}
        modal={modalDetail}
        data={dataDetail}
      />
    </div>
  );
};

export default TableUpComing;
