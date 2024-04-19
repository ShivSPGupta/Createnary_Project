const Homepage = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-3xl text-primary-text font-b2-16-medium">
      <div className="w-[1024px] rounded-16xl bg-glass [backdrop-filter:blur(30px)] flex flex-row items-start justify-start py-5 pr-[45.2px] pl-[45.3px] box-border gap-[50px] min-w-[1024px] max-w-full mq725:gap-[25px] mq1025:pl-[22px] mq1025:pr-[22px] mq1025:box-border">
        <div className="w-[434px] flex flex-row items-start justify-start gap-[30px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start">
              <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[114px] whitespace-nowrap">
                Createnary
              </h3>
            </div>
          </div>
          <div className="flex-1 rounded-6xl bg-body overflow-hidden flex flex-row items-start justify-start py-[15px] px-4 gap-[10px] text-base">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[116px] whitespace-nowrap">
                Search Creators
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-center text-lg">
          <div className="self-stretch flex flex-row items-start justify-start gap-[26.5px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[36px]">
                    Cart
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[11px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[49px]">
                    About
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <div className="relative font-medium inline-block min-w-[64px]">
                    Contact
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-mini flex flex-row items-start justify-start py-2 px-6 gap-[10px] border-[1px] border-solid border-primary-text">
              <div className="relative font-medium inline-block min-w-[43px]">
                Login
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
