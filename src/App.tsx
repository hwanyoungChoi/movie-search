import { Suspense } from 'react';
import AppRoutes from './AppRoutes.tsx';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'lib/queryClient.ts';
import Loader from 'components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppRoutes />
        </RecoilRoot>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
