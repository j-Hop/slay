import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';
import { Header } from './Header/Header';

const GlobalBox = styled.div`
  padding: 16px 0px 0px 32px;
  max-width: 1440px;
  max-height: 800px;
`;

export const SharedLayout = () => {
  return (
    <GlobalBox>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalBox>
  );
};
