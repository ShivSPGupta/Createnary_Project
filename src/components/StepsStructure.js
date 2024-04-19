const StepsStructure = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[457px] text-left text-17xl text-body font-b2-16-medium mq450:hidden">
      <div className="rounded-lg bg-primary overflow-hidden flex flex-row items-start justify-start pt-2 pb-[9px] pr-[23.8px] pl-6 z-[1]">
        <div className="h-[60px] w-[60.9px] relative rounded-lg bg-primary hidden" />
        <b className="relative inline-block min-w-[12.2px] z-[1] mq450:text-3xl mq975:text-10xl">
          1
        </b>
      </div>
      <div className="flex flex-row items-start justify-start relative">
        <div className="h-[1948px] w-0.5 absolute !m-[0] right-[28px] bottom-[-1373px] box-border border-r-[2px] border-solid border-secondary-text" />
        <div className="rounded-lg bg-primary overflow-hidden flex flex-row items-start justify-start pt-2 pb-[9px] pr-[19px] pl-5 z-[1]">
          <div className="h-[60px] w-[60.9px] relative rounded-lg bg-primary hidden" />
          <b className="relative inline-block min-w-[21.3px] z-[1] mq450:text-3xl mq975:text-10xl">
            2
          </b>
        </div>
      </div>
      <div className="rounded-lg bg-primary overflow-hidden flex flex-row items-start justify-start pt-2 pb-[9px] pr-5 pl-[21px] z-[1]">
        <div className="h-[60px] w-[60.9px] relative rounded-lg bg-primary hidden" />
        <b className="relative inline-block min-w-[19.3px] z-[1] mq450:text-3xl mq975:text-10xl">
          3
        </b>
      </div>
      <div className="rounded-lg bg-primary overflow-hidden flex flex-row items-start justify-start pt-2 pb-[9px] pr-[19px] pl-5 z-[1]">
        <div className="h-[60px] w-[60.9px] relative rounded-lg bg-primary hidden" />
        <b className="relative inline-block min-w-[21.3px] z-[1] mq450:text-3xl mq975:text-10xl">
          4
        </b>
      </div>
    </div>
  );
};

export default StepsStructure;
