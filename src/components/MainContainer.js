import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const navigate = useNavigate();

  const onMergeContainerClick = useCallback(() => {
    //TODO: drop down search
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/page2");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-52 pb-[18px] box-border gap-[184px] max-w-full text-left text-21xl text-primary-text font-b2-16-medium mq450:gap-[23px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[46px] mq800:pl-[52px] mq800:pr-[52px] mq800:box-border mq1350:flex-wrap mq1350:gap-[92px] mq1350:pl-[104px] mq1350:pr-[104px] mq1350:box-border">
      <div className="ml-[-232px] h-[530px] flex flex-col items-start justify-start pt-[390px] px-0 pb-0 box-border mq800:pt-[253px] mq800:box-border">
        <img
          className="w-12 flex-1 relative max-h-full shrink-0 [debug_commit:1de1738] z-[1]"
          alt=""
          src="/navlinks.svg"
        />
      </div>
      <div className="w-[1440px] flex flex-col items-start justify-start gap-[19px] shrink-0 [debug_commit:1de1738] max-w-[100%]">
        <header className="w-[1440px] rounded-16xl bg-glass [backdrop-filter:blur(30px)] flex flex-row items-start justify-start py-5 pr-[45.2px] pl-[45.3px] box-border gap-[50px] min-w-[1024px] top-[0] z-[99] sticky max-w-full text-left text-3xl text-primary-text font-b2-16-medium mq1125:pl-[22px] mq1125:pr-[22px] mq1125:box-border mq800:gap-[25px]">
          <div className="w-[434px] flex flex-row items-start justify-start gap-[30px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start">
                <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[114px] whitespace-nowrap">
                  Createnary
                </h3>
              </div>
            </div>
            <div
              className="flex-1 rounded-6xl bg-body overflow-hidden flex flex-row items-start justify-start py-[15px] px-4 gap-[10px] cursor-pointer text-base"
              onClick={onMergeContainerClick}
            >
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
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[2.8px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[84.2px] max-w-full mq450:gap-[21px] mq800:gap-[42px] mq1350:flex-wrap">
            <div className="w-[555px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border min-w-[555px] max-w-full mq1125:min-w-full mq800:pt-[70px] mq800:box-border mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full z-[1] mq800:gap-[25px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq800:text-13xl">
                      <span>{`Welcome To India’s First `}</span>
                      <span className="text-transparent !bg-clip-text [background:linear-gradient(90.37deg,_#4a508e,_#674a8e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Creator’s Marketplace
                      </span>
                    </h1>
                    <h3 className="m-0 relative text-3xl font-bold font-inherit inline-block max-w-full mq450:text-lg">
                      Create your first E-Store @ Zero Cost
                    </h3>
                  </div>
                  <div className="self-stretch relative text-lg font-medium">
                    Empower your creativity with Createnary. Showcase, sell, and
                    connect with a global audience effortlessly, turn your
                    products into profits.
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-4 px-6 bg-primary rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue"
                  onClick={onButtonClick}
                >
                  <div className="relative text-lg font-semibold font-b2-16-medium text-body text-left inline-block min-w-[96px]">
                    Get Started
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[630px] flex-1 relative overflow-hidden min-w-[409px] max-w-full z-[1] mq1125:min-w-full">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_210px)] max-h-full w-[420px] flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[-20px] top-[20px] [transform:scale(1.19)]"
                  loading="lazy"
                  alt=""
                  src="/32767469-responsive-device-33-copy-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
