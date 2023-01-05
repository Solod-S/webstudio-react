import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="portfolio" element={<div>Portfolio</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
