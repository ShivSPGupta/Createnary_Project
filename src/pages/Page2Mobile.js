import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";

const Page2Mobile = () => {
  return (
    <div className="w-full relative bg-body overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border gap-[40.7px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[14.3px] pr-1.5 pl-[11px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
          <FrameComponent6 />
          <FrameComponent7 />
        </div>
      </section>
      <FrameComponent8 />
      <FrameComponent9 />
      <section className="self-stretch h-[143.6px] flex flex-row items-start justify-end pt-0 px-[58px] pb-2.5 box-border">
        <div className="h-[133.6px] w-[226.4px] relative rounded-xl flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.15)]"
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </section>
      <FrameComponent10 />
      <section className="self-stretch h-[139.6px] flex flex-row items-start justify-end pt-0 px-[58px] pb-1.5 box-border">
        <div className="h-[133.6px] w-[226.4px] relative rounded-xl flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.15)]"
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </section>
      <FrameComponent11 />
      <FrameComponent12 />
    </div>
  );
};

export default Page2Mobile;
