import BaseTable from 'components/GeneralComponents/BaseTable';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useCallback, useState } from 'react';


const LaporanPencapaianPage: React.FC = () => {
  const [fieldSort, setFieldSort] = useState('created_at');
  const [sort, setSort] = useState('desc');
  const [page, setPage] = useState<any>(1);
  const [perPage, setPerPage] = useState<any>(10);

  const columns = [
    {
      Header: 'Tanggal Upload',
      accessor: 'client',
      sub_accessor: 'created_at',
    },
    {
      Header: 'Email Uploader',
      accessor: 'email',
    },
    {
      Header: 'Nama File',
      accessor: 'file',
    },
    {
      Header: 'Row',
      accessor: 'row',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const data = {
    data: [
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'ronald@gmail.com',
        file: 'template file 2023.xlx',
        row: '5',
        status: 'success',
      },
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'riki@gmail.com',
        file: 'template file 2023.xlx',
        row: '2',
        status: 'failed',
      },
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'fathul@gmail.com',
        file: 'template file 2023.xlx',
        row: '5',
        status: 'failed',
      },
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'deri@gmail.com',
        file: 'template file 2023.xlx',
        row: '8',
        status: 'success',
      },
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'gege@gmail.com',
        file: 'template file 2023.xlx',
        row: '13',
        status: 'failed',
      },
      {
        client: {
          created_at: '2022-10-26T08:39:51.979Z',
        },
        email: 'haha@gmail.com',
        file: 'template file 2023.xlx',
        row: '20',
        status: 'success',
      },
    ],
  };

  const handleChangePage = useCallback(
    (page, limit) => {
      setPage(page);
      setPerPage(limit);
    },
    [page, perPage]
  );

  return (
    <>
      <PageTitle>Menu 2</PageTitle>
      <BaseTable
        columns={columns}
        data={data}
        page={page}
        perPage={perPage}
        arrAction={['Detail', 'Edit', 'Download']}
        sort={sort}
        setSort={setSort}
        setFieldSort={setFieldSort}
        functions={{ handleChangePage }}
      />
    </>
  );
};

export default LaporanPencapaianPage;
