interface plan {
  title: string;
  subTitle: string;
  price: string;
  feature: any;
}
const data: plan[] = [
  {
    title: 'Education',
    subTitle: 'Blablabla',
    price: '฿ 0.00',
    feature: [
      '50 Payload outputs for AI blocks AI output with watermark',
      'Unlimited flows',
      'GPU model training',
    ],
  },
  {
    title: 'Startup',
    subTitle: 'Blablabla',
    price: '฿ 599.00',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'Inference model with maximum 2 stages',
    ],
  },
  {
    title: 'Professional',
    subTitle: 'Most Popular',
    price: '฿ 4199.00',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'GPU Inference (Unlimited model)',
      'CPU Inference (Unlimited)',
    ],
  },
  {
    title: 'Enterprises',
    subTitle: 'Blablabla',
    price: 'App contact us',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'GPU Inference (Unlimited model)',
      'CPU Inference (Unlimited)',
      'Industrial commercial devices plugin',
    ],
  },
];
const CardPlan = () => {
  return (
    <div className="h-4/6 grid grid-cols-6 justify-self-center	justify-items-center">
      <div></div>
      {data.map((item: plan, i: number) => (
        <div key={i} className={'flex items-center'}>
          {i == 2 ? (
            <div
              key={i}
              className="w-[273px] max-h-3/5 h-5/6 bg-[#FFFFFF] ml-6 pt-5 shadow-lg"
            >
              <div className="flex justify-between h-1/5">
                <div className="w-[3px] bg-[#FFF2DE]" />
                <div className="px-6 pt-6 w-full">
                  <h1 className="font-bold text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#73522C] via-[#FCB040] to-[#FFE79A]">
                    {item.title}
                  </h1>
                  <div className="border-[#E5BD82] border-2 w-1/2">
                    <p className="text-[15px] text-[#D48A3A] text-center">
                      {item.subTitle}
                    </p>
                  </div>

                  <div className="mt-[16px] h-[0.5px] bg-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex h-4/5">
                <div className="flex flex-col justify-between px-6 border-l-2 border-l-[#E5BD82]">
                  <div className="pt-2 ">
                    <h1 className="font-bold text-[24px] text-[#D4953A]">
                      {item.price}
                    </h1>
                    <p className="text-[11px] text-[#C4C4C4]">
                      Per user per month
                    </p>
                    <div className="pt-5 font-medium text-[12px] text-[#D4953A]">
                      {item.feature.map((feat: any) => (
                        <div key={i} className="flex">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="15px"
                              height="15px"
                              fill="#D4953A"
                            >
                              <path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z" />
                            </svg>
                          </div>
                          <div className="pl-1">
                            <p>{feat}</p>
                          </div>
                        </div>
                      ))}

                      <div className="flex">
                        <div className="w-[15px]"></div>
                        <div className="pl-1">
                          <a
                            href="#"
                            className="text-[13px] text-[#CFCFCF] underline"
                          >
                            more detail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mb-6 bg-transparent bg-[#FCB040] hover:bg-[#FFFFFF] group text-white font-semibold hover:text-[#FCB040] py-2 px-4 border border-transparent hover:border-[#FCB040] rounded">
                    <div className="flex justify-between">
                      <p className="text-[16px]">Choose plan</p>

                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-white group-hover:fill-[#FCB040]"
                      >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="w-[273px] h-3/4 bg-[#FFFFFF] ml-6 pt-5 shadow-lg"
            >
              <div className="flex justify-between h-1/5">
                <div className="w-[3px] bg-[#FFF2DE]" />
                <div className="px-6 pt-6 w-full">
                  <h1 className="font-bold text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#73522C] via-[#FCB040] to-[#FFE79A]">
                    {item.title}
                  </h1>
                  <p className="text-[15px] text-[#C4C4C4]">{item.subTitle}</p>
                  <div className="mt-[16px] h-[0.5px] bg-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex h-4/5">
                <div className="flex flex-col justify-between px-6 pt-2 border-l-2 border-l-[#E5BD82]">
                  <div className="pt-2 ">
                    <h1 className="font-bold text-[24px] text-[#D4953A]">
                      {item.price}
                    </h1>
                    <p className="text-[11px] text-[#C4C4C4]">
                      Per user per month
                    </p>
                    <div className="pt-5 font-medium text-[12px] text-[#D4953A]">
                      {item.feature.map((feat: any) => (
                        <div key={i} className="flex">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="15px"
                              height="15px"
                              fill="#D4953A"
                            >
                              <path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z" />
                            </svg>
                          </div>
                          <div className="pl-1">
                            <p>{feat}</p>
                          </div>
                        </div>
                      ))}

                      <div className="flex">
                        <div className="w-[15px]"></div>
                        <div className="pl-1">
                          <a
                            href="#"
                            className="text-[13px] text-[#CFCFCF] underline"
                          >
                            more detail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mb-6 bg-transparent hover:bg-[#FCB040] group text-[#FCB040] hover:fill-[#FFFFFF] font-semibold hover:text-white py-2 px-4 border border-[#FCB040] hover:border-transparent rounded">
                    <div className="flex justify-between">
                      <p className="text-[16px]">Choose plan</p>

                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#FCB040] group-hover:fill-white"
                      >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardPlan;
