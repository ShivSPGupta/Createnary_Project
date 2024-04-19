const EarningsSummary = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[83px] pr-[31px] pl-[34px] text-center text-lg text-black font-b2-16-medium">
      <div className="flex-1 flex flex-col items-end justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[48.5px]">
          <b className="flex-1 relative">Monthly Earning</b>
          <b className="w-[113.5px] relative inline-block shrink-0">
            Yearly Earning
          </b>
        </div>
        <div className="w-[276.6px] flex flex-row items-start justify-between gap-[20px] mt-[-2.5px] text-5xl text-primary">
          <b className="w-[91.8px] relative inline-block shrink-0 min-w-[91.8px] whitespace-nowrap z-[1]">
            ₹12,000
          </b>
          <b className="relative inline-block min-w-[113.5px] whitespace-nowrap z-[1]">
            ₹1,44,000
          </b>
        </div>
      </div>
    </section>
  );
};

export default EarningsSummary;
