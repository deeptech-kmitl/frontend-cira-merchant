import { Footer, GridLayout, Navbar, Period } from '@/components';

interface Components {
  title: string;
  component: React.ReactNode;
}

const component: Components[] = [
  {
    title: '1. Choose a period',
    component: <Period />,
  },
  {
    title: '2. Create your account',
    component: <Period />,
  },
];

const Order = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <GridLayout>
        <Navbar />
        <div className="py-14">
          <div className="py-6">
            <h4 className="text-2xl font-bold">
              You&apos;re almost there! Complete your order
            </h4>
            <p className="font-semibold text-[#D48A3A]">
              Selected plan: Professional
            </p>
          </div>
          {component.map((item: Components, i: number) => (
            <>
              <h3 className="text-[#474749] text-2xl font-bold py-6">
                {item.title}
              </h3>
              {item.component}
            </>
          ))}
        </div>
      </GridLayout>
      <Footer />
    </div>
  );
};

export default Order;
