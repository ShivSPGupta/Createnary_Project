import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/page-2-mobile");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[18px] box-border max-w-full text-center text-5xl text-body font-b2-16-medium">
      <div className="flex-1 bg-primary overflow-hidden flex flex-row items-start justify-start max-w-full z-[1]">
        <div className="h-[571px] flex-1 flex flex-row flex-wrap items-center justify-center relative gap-[32px_83px] max-w-full">
          <div className="w-full !m-[0] absolute top-[56px] left-[1.5px] flex flex-col items-start justify-start py-0 px-[27px] box-border gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.5px]">
                <h2 className="m-0 w-[280px] relative text-inherit font-bold font-inherit inline-block">
                  Your audience wants links
                </h2>
              </div>
              <div className="self-stretch h-[57px] relative text-base font-medium inline-block">
                <p className="m-0">
                  Make it easy for them by linking products to every post and
                  video
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <button
                className="cursor-pointer [border:none] py-3 px-5 bg-body rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap"
                onClick={onButtonClick}
              >
                <div className="relative text-base font-semibold font-b2-16-medium text-primary-text text-left inline-block min-w-[81px]">
                  Try for free
                </div>
              </button>
            </div>
          </div>
          <div className="h-[250px] w-[360px] absolute !m-[0] top-[265px] left-[0px]">
            <div className="absolute w-[88.89%] top-[0px] right-[5.56%] left-[5.56%] rounded-mini max-w-full h-60 flex items-center justify-center">
              <img
                className="w-full overflow-hidden h-full object-contain absolute left-[0px] top-[6px] [transform:scale(1.167)]"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
