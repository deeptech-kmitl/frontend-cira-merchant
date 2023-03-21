import { CardPlan, GridLayout, Navbar } from '@/components';

export default function pricing() {
  return (
    <GridLayout>
      <Navbar />
      <div className="h-auto bg-[url('/images/dot.png')] py-[100px]">
        <h1 className="text-center font-extrabold text-[30px] md:text-[36px] xl:text-[46px] text-transparent bg-clip-text bg-gradient-to-r from-[#865F2E] via-[#FCB040] to-[#F9D592]">
          Choose the plan that works for you
        </h1>
        <CardPlan />
      </div>
    </GridLayout>
  );
}
