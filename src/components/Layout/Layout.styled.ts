import styled from '@emotion/styled';
import { MAX_PAGE_WIDTH, MIN_PAGE_WIDTH } from '../../lib/constants.ts';

export const Container = styled.div`
  position: relative;
  max-width: ${MAX_PAGE_WIDTH}px;
  min-width: ${MIN_PAGE_WIDTH}px;
  margin: 0 auto;
  background: white;
  height: 100vh;

  > main {
    padding: 18px 24px;
  }
`;
