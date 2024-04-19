const Header = () => {
  return (
    <div className="flex-1 rounded-16xl bg-glass [backdrop-filter:blur(30px)] flex flex-col items-start justify-start p-5 gap-[18px] z-[1] text-left text-lg text-primary-text font-b2-16-medium">
      <div className="w-[250px] flex flex-row items-start justify-between gap-[20px]">
        <b className="relative inline-block min-w-[94px]">Createnary</b>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame1.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-6xl bg-body overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-[10px] text-sm text-black">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src="/frame-11.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative font-medium inline-block min-w-[101px]">
            Search Creators
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
