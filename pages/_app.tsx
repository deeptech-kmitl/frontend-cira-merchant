import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="CiRA Subscription"
        description="A subscription site for CiRA."
        openGraph={{
          title: 'CiRA Subscription',
          description: 'A subscription site for CiRA.',
          images: [
            {
              url: 'https://www.iseo.in.th/upload/image/knowledge/800x600_th_1510540531.png',
              width: 800,
              height: 600,
              alt: 'CiRA Subscription',
              type: 'image/png',
            },
          ],
          siteName: 'CiRA Subscription',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
