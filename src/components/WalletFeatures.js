const WalletFeatures = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full text-left text-sm text-primary-text font-b2-16-medium">
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 relative gap-[20px]">
          <b className="h-[34px] flex-1 relative tracking-[-0.09px] inline-block">
            How do I receive payments for my sales
          </b>
          <img
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 relative gap-[20px]">
            <b className="flex-1 relative">
              Can I sell internationally on this marketplace?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 relative gap-[20px]">
            <b className="flex-1 relative">
              What support and resource re available for sellers?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-gainsboro-100 flex flex-row items-start justify-start py-3.5 px-5 relative gap-[20px]">
            <b className="flex-1 relative">
              Is there a review process for upload products?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[20px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletFeatures;
