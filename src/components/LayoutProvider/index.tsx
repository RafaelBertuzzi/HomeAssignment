import { ReactNode } from 'react';
import { NativeBaseProvider } from 'native-base';

interface IProps {
  children: ReactNode;
}

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export function LayoutProvider({ children }: IProps) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  );
}
