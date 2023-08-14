import React from 'react';
import { BackgroundWrapper } from '../../../shared/layouts/BackgroundWrapper';
import Form from '../../../modules/FillNameModule';

const HomePage = () => {
  return (
    <BackgroundWrapper style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Form />
    </BackgroundWrapper>
  );
};

export default HomePage;
