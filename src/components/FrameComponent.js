const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-8xl text-primary-text font-b2-16-medium">
      <div className="w-[730px] flex flex-col items-end justify-start gap-[60px] max-w-full mq800:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[55px] pl-14 box-border max-w-full mq800:pl-7 mq800:pr-[27px] mq800:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-3xl">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <div className="self-stretch relative text-lg font-medium text-center text-secondary-text-alt">
              <p className="m-0">
                Quick answers to questions you may have. Can’t find what you're
                looking for?
              </p>
              <p className="m-0 text-primary">
                Check out our full documentation
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              How much does it cost to set up a store?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              What kind of digital products can I sell?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-col items-start justify-start py-3.5 px-5 box-border gap-[14px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
              <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
                Do I need technical skills to use the platform?
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/icon-2.svg"
              />
            </div>
            <div className="self-stretch h-px relative bg-gray-300" />
            <div className="self-stretch relative font-medium text-secondary-text-alt">
              No, not at all! Our platform is designed with user-friendliness in
              mind. You can easily navigate and set up your store without any
              technical expertise. It's as simple as a few clicks to get
              started!
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              Is there a limit to the number of products I can list?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              How do I receive payments for my sales?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              Can I sell internationally on this marketplace?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              What support and resources are available for sellers?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-secondary-text flex flex-row items-start justify-start py-3.5 px-5 box-border gap-[20px] max-w-full">
            <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_40px)]">
              Is there a review process for uploaded products?
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
