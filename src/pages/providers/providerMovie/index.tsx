import { getListProviderMovie } from 'app/services/tmdb.service';
import { PageLink, PageTitle } from 'components/layout/core';
import React, { useEffect, useState } from 'react';
import TableProviderMovie from './components/tableProviderMovie';

const ProviderMovie: React.FC = () => {
  const [region, setRegion] = useState<any>('');
  const [data, setData] = useState<any>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const breadCumbs: Array<PageLink> = [
    {
      service: 'Providers',
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
      accessor: 'provider_name',
    },
  ];

  const dataRegion = [
  { code: 'US', label: '🇺🇸 United States' },
  { code: 'ID', label: '🇮🇩 Indonesia' },
  { code: 'JP', label: '🇯🇵 Japan' },
  { code: 'KR', label: '🇰🇷 Korea' },
  { code: 'GB', label: '🇬🇧 UK' },
  { code: 'FR', label: '🇫🇷 France' },
  { code: 'DE', label: '🇩🇪 Germany' },
];

  useEffect(()=> {
    setIsLoading(true)
    getListProviderMovie(region).then((data: any)=> {
      setData(data?.data?.results);
    }).catch((e:any)=> {}).finally(()=> {
      setIsLoading(false)
    })
  },[region])


  return (
    <>
      <PageTitle breadcrumbs={breadCumbs}>Movie</PageTitle>
      <TableProviderMovie
        columns={columns}
        data={data}
        dataRegion={dataRegion}
        arrAction={['Detail']}
        loading={isLoading}
        region={region}
        setRegion={setRegion}
      />
    </>
  );
};

export default ProviderMovie;
