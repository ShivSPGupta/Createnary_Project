const GroupComponent = () => {
  return (
    <footer className="self-stretch bg-primary flex flex-col items-start justify-start pt-6 px-4 pb-[25px] box-border gap-[31px] max-w-full text-left text-xl text-body font-b2-16-medium">
      <div className="w-[360px] h-[517px] relative bg-primary hidden max-w-full" />
      <h3 className="m-0 relative text-inherit font-normal font-monoton z-[1]">
        Createnary
      </h3>
      <nav className="m-0 flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[16px] text-left text-sm text-body font-b2-16-medium">
        <div className="relative text-base font-semibold inline-block min-w-[78px] z-[1]">
          Navigation
        </div>
        <div className="relative font-medium inline-block min-w-[112px] z-[1]">
          About Createnary
        </div>
        <div className="relative font-medium inline-block min-w-[69px] z-[1]">
          Contact Us
        </div>
        <div className="relative font-medium inline-block min-w-[44px] z-[1]">
          Refund
        </div>
        <div className="relative font-medium inline-block min-w-[67px] z-[1]">
          Newsletter
        </div>
        <div className="relative font-medium inline-block min-w-[121px] z-[1]">{`Terms & Conditions`}</div>
        <div className="relative font-medium inline-block min-w-[96px] z-[1]">{`Privacy & Policy`}</div>
      </nav>
      <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[15.5px] text-sm">
        <div className="w-[79px] relative text-base font-semibold inline-block z-[1]">
          Contacts
        </div>
        <div className="w-[126px] flex flex-row items-start justify-start gap-[15px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
            loading="lazy"
            alt=""
            src="/frame-5.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="self-stretch relative font-medium z-[1]">
              Delhi, India
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-[35px]">
            <div className="relative font-medium inline-block min-w-[99px] whitespace-nowrap z-[1]">
              +91 98765 43210
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              loading="lazy"
              alt=""
              src="/frame-6.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[101px] whitespace-nowrap z-[1]">
                +91 99999 99999
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-2xs">
        <div className="relative font-medium inline-block min-w-[96px] z-[1]">
          © Createnary 2024
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
