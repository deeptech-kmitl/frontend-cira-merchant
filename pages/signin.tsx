import { Footer, GridLayout, Navbar, Signin } from '@/components';

export default function signin() {
  return (
    <>
      <GridLayout>
        <Navbar />
        <Signin />
      </GridLayout>
      <Footer />
    </>
  );
}
