import GroupComponent from "./GroupComponent";

const FrameComponent12 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start relative max-w-full">
      <div className="h-[1198px] !m-[0] absolute top-[-1048.7px] left-[22px] flex flex-row items-start justify-start">
        <div className="self-stretch w-0.5 relative box-border border-r-[2px] border-solid border-silver" />
        <div className="h-[503px] w-0.5 relative box-border z-[1] ml-[-2px] border-r-[2px] border-solid border-primary" />
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[15.7px] max-w-full">
        <div className="w-[343px] h-[133.6px] flex flex-row items-start justify-end py-0 pr-[58.3px] pl-[58px] box-border max-w-full">
          <div className="h-[133.6px] flex-1 relative rounded-xl max-w-full flex items-center justify-center">
            <img
              className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[4px] w-full [transform:scale(1.15)]"
              loading="lazy"
              alt=""
              src="/image-81@2x.png"
            />
          </div>
        </div>
        <GroupComponent />
      </div>
    </section>
  );
};

export default FrameComponent12;
