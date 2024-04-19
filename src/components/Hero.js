import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/page-2-mobile");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 px-12 box-border max-w-full text-center text-5xl text-primary-text font-b2-16-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1]">
            <span>{`Welcome To India’s First `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90.37deg,_#4a508e,_#674a8e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Creator’s Marketplace
            </span>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[15px] text-left text-base text-black">
            <div className="relative font-semibold z-[1]">
              Create your E-store @ Zero Cost
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[70px] pl-[68px]">
          <button
            className="cursor-pointer [border:none] py-3 px-5 bg-primary rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1]"
            onClick={onButtonClick}
          >
            <div className="relative text-base font-semibold font-b2-16-medium text-body text-left inline-block min-w-[86px]">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <div className="ml-[-92px] w-[450px] h-[450px] relative overflow-hidden shrink-0 max-w-[170%] z-[2]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_150px)] max-h-full w-[300px] flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[-9px] top-[19px] [transform:scale(1.219)]"
            loading="lazy"
            alt=""
            src="/32767469-responsive-device-33-copy-21@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
