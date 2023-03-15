import { About, Cases, CTA, Footer, Hero, Navbar, Support } from '@/components';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/cira_logo.png" />
      </Head>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <Navbar />
          <Hero />
          <About />
          <Cases />
          <Support />
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  );
}
