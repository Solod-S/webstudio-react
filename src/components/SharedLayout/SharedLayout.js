import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import FooterBar from 'components/FooterBar/FooterBar';
// import Loader from 'components/FooterBar/Loader';

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense
      // fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
      <FooterBar />
    </>
  );
}
