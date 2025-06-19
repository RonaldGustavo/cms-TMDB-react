/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Spin, Empty, Pagination } from 'antd';

import { Form } from 'react-bootstrap';

type Props = {
  // required
  className?: string;
  columns: any;
  arrAction: string[];
  language: any;
  setLanguage: any;

  // optional
  form?: any;
  custom?: any;
  data?: any;
  loading?: boolean;
  noaction?: boolean;
  filter?: boolean;
  customStyle?: any;
};

const TableGenreMovie = (props: Props) => {
  const [page] = useState<number>(1);

  const handleToggleLanguage = () => {
    props?.setLanguage((prev: any) => (prev === 'en' ? 'id' : 'en'));
  };

  const generateHeader = () => (
    <>
      <th
        style={{
          paddingLeft: '0.75rem',
          minWidth: '60px',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          ...props.customStyle,
        }}
        className="text-center"
      >
        No
      </th>
      {props.columns &&
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
            className="text-center"
          >
            {column.Header}
          </th>
        ))}
    </>
  );

  const renderCell = (col: any, item: any) => {
    const value = item[col.accessor];

    return (
      <p className="text-dark d-block mb-1 fs-6">
        {col.sub_accessor ? value?.[col.sub_accessor] ?? '-' : value ?? '-'}
      </p>
    );
  };

  const generateBody = () =>
    props.data?.map((item: any, idx: number) => (
      <tr key={idx}>
        <td className="text-center fw-bold">{idx + 1}</td>
        {props.columns.map((col: any, i: number) => (
          <td
            key={i}
            style={{ paddingLeft: '0.75rem' }}
            className="text-center"
          >
            {renderCell(col, item)}
          </td>
        ))}
      </tr>
    ));

  return (
    <div className="card px-5">
      {!props.loading ? (
        <>
          <div className="position-absolute top-0 end-0 p-3">
            <Form.Check
              type="switch"
              id="language-switch"
              label={props?.language === 'en' ? 'English' : 'Bahasa'}
              checked={props?.language === 'en'}
              onChange={handleToggleLanguage}
            />
          </div>
          {props?.data && props.data?.length > 0 ? (
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
                  >{`Showing: ${1} to ${props?.data?.length} of ${
                    props.data && props?.data?.length
                  } records`}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end">
                  <Pagination
                    current={page}
                    pageSize={props?.data?.length || 50}
                    total={props?.data?.length}
                    showSizeChanger={false}
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

export default TableGenreMovie;
