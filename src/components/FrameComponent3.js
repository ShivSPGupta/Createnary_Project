import { useMemo } from "react";

const FrameComponent3 = ({ propHeight, propDisplay }) => {
  const shareTheHolidaysStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[22px] min-w-[260px] text-left text-3xl text-primary-text font-b2-16-medium">
      <h3
        className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lg"
        style={shareTheHolidaysStyle}
      >
        Share the holidays, stays and experiences with your friends and family
      </h3>
      <div className="self-stretch relative text-base font-medium text-secondary-text-alt">
        <p className="m-0">{`You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share`}</p>
      </div>
      <div className="self-stretch h-[264px] relative rounded-mini max-w-full shrink-0 flex items-center justify-center">
        <img
          className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[6px] w-full [transform:scale(1.152)]"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
