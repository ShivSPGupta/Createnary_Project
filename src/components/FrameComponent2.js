import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onPreviousIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/page2");
  }, [navigate]);

  const onNextIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[55px] box-border max-w-full text-left text-21xl text-body font-b2-16-medium mq450:pb-[23px] mq450:box-border mq800:pb-9 mq800:box-border">
      <div className="flex-1 bg-primary overflow-hidden flex flex-row flex-wrap items-center justify-center p-10 box-border max-w-full [row-gap:20px] z-[1] mq800:pt-[26px] mq800:pb-[26px] mq800:box-border">
        <img
          className="h-12 w-12 relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src="/previous.svg"
          onClick={onPreviousIconClick}
        />
        <div className="flex-1 flex flex-col items-center justify-center gap-[50px] min-w-[822px] max-w-full mq1125:min-w-full mq800:gap-[25px]">
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border gap-[50px] max-w-full mq800:gap-[25px]">
            <div className="flex flex-col items-center justify-start gap-[15px] max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq800:text-13xl">
                Your audience wants links
              </h1>
              <div className="relative text-lg font-medium">
                Make it easy for them by linking products to every post and
                video
              </div>
            </div>
            <div className="w-[720px] h-[405px] relative max-w-full flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[6px] [transform:scale(1.099)]"
                loading="lazy"
                alt=""
                src="/group-300@2x.png"
                data-scroll-to="groupImage"
              />
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-4 px-6 bg-body rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200"
            onClick={onButtonClick}
          >
            <div className="relative text-lg font-semibold font-b2-16-medium text-primary-text text-left inline-block min-w-[91px]">
              Try for free
            </div>
          </button>
        </div>
        <img
          className="h-12 w-12 relative overflow-hidden shrink-0 object-contain cursor-pointer"
          loading="lazy"
          alt=""
          src="/next.svg"
          onClick={onNextIconClick}
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
