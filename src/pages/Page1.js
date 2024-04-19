import Homepage from "../components/Homepage";
import StepsStructure from "../components/StepsStructure";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";

const Page1 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[10px] leading-[normal] tracking-[normal]">
      <Homepage />
      <main className="self-stretch bg-body overflow-hidden flex flex-row flex-wrap items-start justify-center py-0 px-[180px] box-border max-w-full [row-gap:20px] text-left text-8xl text-primary-text font-b2-16-medium mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[90px] mq725:pr-[90px] mq725:box-border">
        <div className="flex-1 bg-body overflow-hidden flex flex-col items-center justify-start py-[180px] px-0 box-border min-w-[250px] max-w-[450px] mq450:max-w-full mq725:pt-[117px] mq725:pb-[117px] mq725:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] mq450:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
              <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-3xl">
                GetSetYo handholds you at every step of the way
              </h2>
              <div className="self-stretch relative text-lg font-medium text-secondary-text-alt">
                You focus on helping your friends and family, we take care of
                everything else.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-6 bg-primary rounded-lg overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue">
              <div className="relative text-lg font-semibold font-b2-16-medium text-body text-left inline-block min-w-[96px]">
                Get Started
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[50px] min-w-[320px] max-w-[630px] mq725:gap-[25px] mq725:max-w-full">
          <StepsStructure />
          <div className="flex-1 flex flex-col items-start justify-start gap-[120px] max-w-[calc(100%_-_110px)] mq450:gap-[30px] mq450:max-w-full mq725:gap-[60px]">
            <FrameComponent3 />
            <FrameComponent3 propHeight="59px" propDisplay="inline-block" />
            <FrameComponent3 propHeight="unset" propDisplay="unset" />
            <FrameComponent3 propHeight="unset" propDisplay="unset" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page1;
