import { Account, Footer, Navbar, Payment, Period } from '@/components';

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
    component: <Account />,
  },
  {
    title: '3. Select payment',
    component: <Payment />,
  },
];

const Purchase = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11">
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
              <div key={i}>
                <h3 className="text-[#474749] text-2xl font-bold py-8">
                  {item.title}
                </h3>
                {item.component}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
