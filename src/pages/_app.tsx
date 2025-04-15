import type { AppProps } from 'next/app';
import '@/lib/styles/global.css';
import StoreProvider from './store-provider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
