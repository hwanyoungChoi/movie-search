import * as S from './Dialog.styled.ts';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
}

export default function Dialog({
  isOpen,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <S.Container isOpen={isOpen}>
      <S.Dialog open={isOpen} {...props}>
        {children}
      </S.Dialog>
    </S.Container>
  );
}
