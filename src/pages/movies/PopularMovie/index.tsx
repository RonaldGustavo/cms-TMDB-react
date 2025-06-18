import { getListMoviePopular } from 'app/services/tmdb.service';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useCallback, useEffect, useState } from 'react';
import TablePopular from './components/tablePopular';

const PopularMovie: React.FC = () => {
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
      Header: 'Release Date',
      accessor: 'release_date',
    },
    {
      Header: 'Adult',
      accessor: 'adult',
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
  ];

  useEffect(()=> {
    setIsLoading(true)
    getListMoviePopular(page).then((data: any)=> {
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
      <PageTitle breadcrumbs={breadCumbs}>Popular Movie</PageTitle>
      <TablePopular
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

export default PopularMovie;
