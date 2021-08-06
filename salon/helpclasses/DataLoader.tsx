import React, { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';

interface Props {
  setMe: any;
}

const DataLoader = ({ setMe }: Props) => {
  const { data, loading } = useMeQuery();
  // if (!loading) {
  //   console.log('dane', data?.me);
  // }

  useEffect(() => {
    setMe(data?.me);
  }, [data, loading]);
  return <></>;
};

export default DataLoader;
