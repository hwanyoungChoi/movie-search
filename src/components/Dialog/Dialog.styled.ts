import styled from '@emotion/styled';
import { Z_INDEX } from '../../lib/constants.ts';

export const Container = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  z-index: ${Z_INDEX.Dialog};
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0;
`;

export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  border-color: transparent;
`;
