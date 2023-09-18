import { ReactNode } from 'react';
import { NativeBaseProvider } from 'native-base';

interface IProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: IProps) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}
