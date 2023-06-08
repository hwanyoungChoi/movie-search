import { StrictMode, Suspense } from 'react';
import AppRoutes from './AppRoutes.tsx';

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </StrictMode>
  );
}

export default App;
