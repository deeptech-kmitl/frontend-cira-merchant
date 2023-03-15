import {
  About,
  Cases,
  CTA,
  Footer,
  GridLayout,
  Hero,
  Navbar,
  Support,
} from '@/components';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/cira_logo.png" />
      </Head>
      <GridLayout>
        <Navbar />
        <Hero />
        <About />
        <Cases />
        <Support />
        <CTA />
      </GridLayout>
      <Footer />
    </>
  );
}
