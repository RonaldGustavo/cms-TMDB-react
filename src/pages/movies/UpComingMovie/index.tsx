import { getListUpComing } from 'app/services/tmdb.service';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useCallback, useEffect, useState } from 'react';
import TableNowPlaying from './components/tableUpComing';

const UpComingMovie: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const breadCumbs: Array<PageLink> = [
    {
      service: 'Movies',
      title: '',
      path: '',
      isSeparator: false,
      isActive: false,
    },
    {
      service: '',
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ];

  const columns = [
    {
      Header: 'Title',
      accessor: 'original_title',
    },
    {
      Header: 'Language',
      accessor: 'original_language',
    },
    {
      Header: 'Adult',
      accessor: 'adult',
    },
    {
      Header: 'Overview',
      accessor: 'overview',
    },
    {
      Header: 'Popularity',
      accessor: 'popularity',
    },
    {
      Header: 'Rating',
      accessor: 'vote_average',
    },
    {
      Header: 'Total Vote',
      accessor: 'vote_count',
    },
    {
      Header: 'Release Date',
      accessor: 'release_date',
    },
  ];

  useEffect(()=> {
    setIsLoading(true)
    getListUpComing(page).then((data: any)=> {
      setData(data?.data);
    }).catch((e:any)=> {}).finally(()=> {
      setIsLoading(false)
    })
  },[page])

  const handleChangePage = useCallback(
    (page) => {
      setPage(page);
    },
    [page]
  );

  return (
    <>
      <PageTitle breadcrumbs={breadCumbs}>Up Coming</PageTitle>
      <TableNowPlaying
        columns={columns}
        data={data}
        page={page}
        arrAction={['Detail']}
        functions={{ handleChangePage }}
        loading={isLoading}
      />
    </>
  );
};

export default UpComingMovie;
