import { CardPlan, Footer, GridLayout, Navbar } from '@/components';
export default function pricing() {
  return (
    <>
      <GridLayout>
        <Navbar />
      </GridLayout>
      <div className="h-screen bg-[url('/images/dot.png')]">
        <h1 className="pt-10 text-center font-extrabold text-[46px] text-transparent bg-clip-text bg-gradient-to-r from-[#865F2E] via-[#FCB040] to-[#F9D592]">
          Choose the plan that works for you
        </h1>
        <CardPlan />
      </div>
      <Footer />
    </>
  );
}
