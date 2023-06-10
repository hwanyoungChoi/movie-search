import { Suspense } from 'react';
import AppRoutes from './AppRoutes.tsx';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/queryClient.ts';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppRoutes />
        </RecoilRoot>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
