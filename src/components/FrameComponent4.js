const FrameComponent4 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[49.5px] pr-[17.8px] pl-[18px] box-border max-w-full text-left text-base text-primary-text font-b2-16-medium">
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
        <b className="relative">ESTIMATE EARNING POTENTIAL</b>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19.1px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className="relative font-medium shrink-0 [debug_commit:1de1738]">
                What kind of influencer are you?
              </div>
              <div className="self-stretch rounded-[8.87px] bg-white box-border flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full text-sm text-gray-100 border-[1.1px] border-solid border-neutral-grey">
                <div className="flex-1 flex flex-row items-start justify-start pt-[11.5px] px-[13.3px] pb-[11.4px] box-border relative gap-[60.8px] max-w-full">
                  <div className="w-52 relative font-medium inline-block shrink-0">
                    Select influencer type?
                  </div>
                  <img
                    className="h-[22.2px] w-[22.2px] absolute !m-[0] right-[19.9px] bottom-[8.8px] overflow-hidden shrink-0"
                    alt=""
                    src="/chevron1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative font-medium">
              How many followers do you have?
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13.9px]">
              <div className="h-[30px] flex-1 relative">
                <div className="absolute w-full top-[11.2px] right-[0%] left-[0%] rounded-[43.25px] bg-secondary-text h-[7.5px]" />
                <div className="absolute w-[53.93%] top-[0px] right-[46.07%] left-[0%] overflow-hidden flex flex-row items-start justify-start z-[1]">
                  <div className="h-[30px] flex-1 relative">
                    <div className="absolute top-[11.3px] left-[0px] rounded-[43.25px] bg-primary w-[150px] h-[7.5px]" />
                    <div className="absolute top-[0px] left-[141.8px] rounded-8xs bg-primary w-5 h-[30px] z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[33px]">
              <button className="cursor-pointer [border:none] pt-3 px-5 pb-[9px] bg-body rounded-mini overflow-hidden flex flex-row items-start justify-start border-b-[2px] border-solid border-primary">
                <div className="relative text-sm font-medium font-b2-16-medium text-primary-text text-left inline-block min-w-[32px]">
                  500K
                </div>
              </button>
            </div>
            <div className="relative font-medium">
              How many products do you list monthly?
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-3.5 text-sm">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch h-[30px] relative">
                <div className="absolute w-full top-[11.2px] right-[0%] left-[0%] rounded-[43.25px] bg-secondary-text h-[7.5px]" />
                <div className="absolute w-[53.93%] top-[0px] right-[46.07%] left-[0%] overflow-hidden flex flex-row items-start justify-start z-[1]">
                  <div className="h-[30px] flex-1 relative">
                    <div className="absolute top-[11.3px] left-[0px] rounded-[43.25px] bg-primary w-[150px] h-[7.5px]" />
                    <div className="absolute top-[0px] left-[141.8px] rounded-8xs bg-primary w-5 h-[30px] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="rounded-mini bg-body overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-[9px] border-b-[2px] border-solid border-primary">
                  <div className="relative font-medium inline-block min-w-[16px]">
                    25
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
            <button className="cursor-pointer [border:none] py-3 px-5 bg-primary rounded-xl overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base font-semibold font-b2-16-medium text-body text-left inline-block min-w-[68px]">
                Calculate
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
