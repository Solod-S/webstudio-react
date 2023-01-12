import { Route, Routes, Navigate } from 'react-router-dom';

import { SharedLayout } from 'components';
import { HomePage, PortfolioPage } from 'pages';

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
