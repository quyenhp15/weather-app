'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<AppStore>();
  storeRef.current ??= makeStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
