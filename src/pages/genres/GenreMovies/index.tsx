import { getListGenreMovie } from 'app/services/tmdb.service';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useEffect, useState } from 'react';
import TableGenreMovie from './components/tableGenreMovie';

const GenreMovies: React.FC = () => {
  const [language, setLanguage] = useState<any>('en');
  const [data, setData] = useState<any>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const breadCumbs: Array<PageLink> = [
    {
      service: 'Genres',
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
      Header: 'Name',
      accessor: 'name',
    },
  ];

  useEffect(()=> {
    setIsLoading(true)
    getListGenreMovie(language).then((data: any)=> {
      setData(data?.data?.genres);
    }).catch((e:any)=> {}).finally(()=> {
      setIsLoading(false)
    })
  },[language])


  return (
    <>
      <PageTitle breadcrumbs={breadCumbs}>Movie</PageTitle>
      <TableGenreMovie
        columns={columns}
        data={data}
        arrAction={['Detail']}
        loading={isLoading}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  );
};

export default GenreMovies;
