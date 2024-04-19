import { useMemo } from "react";

const InputFields = ({ howManyFollowersDoYouHave, propWidth }) => {
  const howManyFollowersStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="w-[524.1px] flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-lg text-primary-text font-b2-16-medium">
      <div
        className="w-[370.1px] relative font-medium inline-block max-w-full"
        style={howManyFollowersStyle}
      >
        {howManyFollowersDoYouHave}
      </div>
      <div className="self-stretch [filter:drop-shadow(0px_4px_20px_rgba(0,_0,_0,_0.15))] flex flex-row items-start justify-start max-w-full">
        <div className="h-10 flex-1 relative max-w-full">
          <div className="absolute top-[14px] left-[0px] rounded-[43.25px] bg-secondary-text1 w-[524.1px] h-2.5" />
          <div className="absolute top-[0px] left-[0px] w-[277.1px] h-10 z-[1]">
            <div className="absolute w-[calc(100%_-_15px)] top-[15px] right-[15px] left-[0px] rounded-25xl bg-primary h-2.5" />
            <div className="absolute w-[calc(100%_-_247.1px)] top-[0px] right-[0px] left-[247.1px] rounded-8xs bg-primary h-10 z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
