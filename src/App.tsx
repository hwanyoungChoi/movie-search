import { Suspense } from 'react';
import AppRoutes from './AppRoutes.tsx';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
