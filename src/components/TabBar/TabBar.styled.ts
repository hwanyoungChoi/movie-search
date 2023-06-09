import styled from '@emotion/styled';
import {
  MAX_PAGE_WIDTH,
  MIN_PAGE_WIDTH,
  TAB_BAR_HEIGHT,
} from '../../lib/constants.ts';

export const Container = styled.nav`
  position: fixed;
  background: white;
  max-width: ${MAX_PAGE_WIDTH}px;
  min-width: ${MIN_PAGE_WIDTH}px;
  width: 100%;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  > a {
    text-decoration: none;
  }
`;

export const Tab = styled.div<{ isActive: boolean }>`
  width: 80px;
  height: ${TAB_BAR_HEIGHT}px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: ${(props) => (props.isActive ? 'lightcoral' : 'black')};
`;
