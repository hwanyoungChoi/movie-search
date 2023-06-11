import styled from '@emotion/styled';
import {
  MAX_PAGE_WIDTH,
  MIN_PAGE_WIDTH,
  TAB_BAR_HEIGHT,
} from '../../lib/constants.ts';

export const Container = styled.div`
  position: relative;
  max-width: ${MAX_PAGE_WIDTH}px;
  min-width: ${MIN_PAGE_WIDTH}px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;

  > main {
    margin-bottom: ${TAB_BAR_HEIGHT}px;
  }
`;
