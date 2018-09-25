import React from 'react';
import ContainerWrapper from './components/common/ContainerWrapper';

import User from './screens/user';

const Router = (): Object => (
  <ContainerWrapper>
    <User />
  </ContainerWrapper>
);

export default Router;