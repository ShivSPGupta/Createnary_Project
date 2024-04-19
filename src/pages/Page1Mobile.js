import MainStructure from "../components/MainStructure";
import Hero from "../components/Hero";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import EarningsSummary from "../components/EarningsSummary";
import FAQItemTwo from "../components/FAQItemTwo";
import WalletFeatures from "../components/WalletFeatures";
import GroupComponent from "../components/GroupComponent";

const Page1Mobile = () => {
  return (
    <div className="w-full relative bg-body overflow-hidden flex flex-col items-end justify-start pt-6 px-0 pb-0 box-border gap-[2px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[800px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/function-tree@2x.png"
      />
      <MainStructure />
      <Hero />
      <FrameComponent5 />
      <FrameComponent4 />
      <EarningsSummary />
      <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-sm text-primary-text font-b2-16-medium">
        <div className="flex flex-row items-start justify-start py-0 px-[17px] text-base">
          <b className="relative">FREQUENTLY ASKED QUESTIONS</b>
        </div>
        <div className="w-[295px] flex flex-row items-start justify-start pt-0 px-[17px] pb-1 box-border text-secondary-text-alt">
          <div className="flex-1 relative font-medium">
            Quick answers to questions you may have. Can’t find what you're
            looking for?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 box-border relative gap-[20px] max-w-full">
              <b className="flex-1 relative">
                How much does it cost to set up a store?
              </b>
              <img
                className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-4 box-border max-w-full">
          <div className="flex-1 rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 box-border relative gap-[20px] max-w-full">
            <b className="h-[34px] flex-1 relative tracking-[-0.06px] inline-block">
              What kind of digital products can I sell?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <FAQItemTwo />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full">
          <div className="flex-1 rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 box-border relative gap-[20px] max-w-full">
            <b className="flex-1 relative">
              Is there a limit to the number of products I can list?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <WalletFeatures />
        <GroupComponent />
      </section>
    </div>
  );
};

export default Page1Mobile;
