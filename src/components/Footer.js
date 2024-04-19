const Footer = () => {
  return (
    <footer className="self-stretch bg-primary flex flex-col items-start justify-start pt-10 px-0 pb-5 box-border gap-[19.5px] max-w-full text-left text-base text-body font-b2-16-medium mq450:pt-[26px] mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[59px] max-w-full mq800:gap-[29px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1080px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[102px] px-0 pb-0 text-5xl font-monoton">
              <h3 className="m-0 relative text-inherit leading-[29px] font-normal font-inherit mq450:text-lgi mq450:leading-[23px]">
                Createnary
              </h3>
            </div>
            <div className="w-[179px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px]">
              <div className="relative font-semibold inline-block min-w-[78px]">
                Navigation
              </div>
              <div className="relative font-medium inline-block min-w-[128px]">
                About Createnary
              </div>
              <div className="relative font-medium inline-block min-w-[79px]">
                Contact Us
              </div>
              <div className="relative font-medium inline-block min-w-[50px]">
                Refund
              </div>
              <div className="relative font-medium inline-block min-w-[77px]">
                Newsletter
              </div>
              <div className="relative font-medium">{`Terms & Conditions`}</div>
              <div className="relative font-medium inline-block min-w-[110px]">{`Privacy & Policy`}</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[15.5px]">
              <div className="w-[83px] relative font-semibold inline-block">
                Contacts
              </div>
              <div className="w-[126px] flex flex-row items-start justify-start gap-[15px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/frame-5.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="self-stretch relative font-medium">
                    Delhi, India
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[7px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-[35px]">
                  <div className="relative font-medium inline-block min-w-[113px] whitespace-nowrap">
                    +91 98765 43210
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[15px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/frame-6.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[116px] whitespace-nowrap">
                      +91 99999 99999
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-body" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-sm">
        <div className="relative font-medium inline-block min-w-[122px]">
          © Createnary 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
