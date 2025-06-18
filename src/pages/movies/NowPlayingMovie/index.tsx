import { getListMoviePlaying, getListMoviePopular } from 'app/services/tmdb.service';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useCallback, useEffect, useState } from 'react';
import TableNowPlaying from './components/tableNowPlaying';

const NowPlayingMovie: React.FC = () => {
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
      Header: 'Overview',
      accessor: 'overview',
    },
    {
      Header: 'Adult',
      accessor: 'adult',
    },
    {
      Header: 'Release Date',
      accessor: 'release_date',
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
    getListMoviePlaying(page).then((data: any)=> {
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
      <PageTitle breadcrumbs={breadCumbs}>Now Playing</PageTitle>
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

export default NowPlayingMovie;
