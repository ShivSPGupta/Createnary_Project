import InputFields from "./InputFields";

const FrameComponent1 = () => {
  return (
    <section className="w-[1400px] flex flex-row items-start justify-center pt-0 px-5 pb-[78px] box-border max-w-full text-center text-8xl text-primary-text font-b2-16-medium mq800:pb-[51px] mq800:box-border">
      <div className="w-[866px] flex flex-col items-start justify-start gap-[60px] max-w-full mq1125:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-3xl">
            ESTIMATE EARNING POTENTIAL
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] min-w-[866px] max-w-full text-left text-lg mq450:gap-[25px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full">
            <div className="w-[572px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                <div className="w-[349.1px] relative font-medium inline-block max-w-full">
                  What kind of influencer are you?
                </div>
                <div className="self-stretch h-[43px] rounded-[8.87px] bg-white box-border flex flex-row items-start justify-start pt-0 px-0 pb-px max-w-full text-base text-gray-200 border-[1.1px] border-solid border-neutral-grey">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[8.9px] px-[13.3px] pb-[8.8px] box-border gap-[48.6px] max-w-full mq800:flex-wrap mq800:gap-[24px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0 box-border min-w-[304px] max-w-full">
                      <div className="self-stretch relative font-medium">
                        Select influencer type?
                      </div>
                    </div>
                    <img
                      className="h-[22.2px] w-[22.2px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevron.svg"
                    />
                  </div>
                </div>
              </div>
              <InputFields howManyFollowersDoYouHave="How many followers do you have?" />
              <div className="w-[524.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <button className="cursor-pointer [border:none] pt-3 px-5 pb-[9px] bg-body rounded-mini overflow-hidden flex flex-row items-start justify-start border-b-[2px] border-solid border-primary hover:bg-gainsboro-200">
                  <div className="relative text-sm font-medium font-b2-16-medium text-primary-text text-left inline-block min-w-[32px]">
                  <input type="text" name="num1" id="num1" placeholder="Enter Total Followers" />
                  </div>
                </button>
              </div>
              <InputFields
                howManyFollowersDoYouHave="How many products do you list monthly?"
                propWidth="unset"
              />
              <div className="w-[524.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm">
                <div className="rounded-mini bg-body overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-[9px] border-b-[2px] border-solid border-primary">
                  <div className="relative font-medium inline-block min-w-[16px]">
                    <input type="text" name="num2" id="num2" placeholder="Enter Total Products" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[174px] flex flex-col items-start justify-start pt-[86px] px-0 pb-0 box-border text-center text-3xl mq450:pt-14 mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[81px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[5.5px]">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[27px]">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lg">
                      Monthly Earning
                    </h3>
                    <div className="flex flex-row items-start justify-end py-0 pr-[11px] pl-3 text-21xl text-primary">
                      <b className="w-[140px] relative inline-block whitespace-nowrap mq450:text-5xl mq800:text-13xl">
                        ₹12,000
                      </b>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[27px] text-left">
                  <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.5px]">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lg">
                      Yearly Earning
                    </h3>
                  </div>
                  <b className="relative text-21xl text-primary whitespace-nowrap mq450:text-5xl mq800:text-13xl">
                    ₹1,44,000
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] py-4 px-6 bg-primary rounded-lg overflow-hidden flex flex-row items-start justify-start hover:bg-steelblue">
              <div className="relative text-lg font-semibold font-b2-16-medium text-body text-left inline-block min-w-[77px]">
                Calculate
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
