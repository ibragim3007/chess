import React from 'react';
import { useAppSelector } from '../../../../hooks/redux/reduxHooks';
import { H1 } from '../../../../shared/Typography/H';
import { Center } from '../../../../shared/layouts/Center';

const UserInfo = () => {
  const { formData } = useAppSelector(state => state.formSliceReducer);
  return (
    <Center style={{ gap: 30 }}>
      <H1>{formData.name}</H1>
      <H1>VS</H1>
      <H1>{formData.name}</H1>
    </Center>
  );
};

export default UserInfo;
