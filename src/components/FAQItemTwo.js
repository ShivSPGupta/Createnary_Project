const FAQItemTwo = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full text-left text-sm text-primary-text font-b2-16-medium">
      <div className="flex-1 rounded-2xl bg-gainsboro-100 flex flex-col items-start justify-start p-4 box-border gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-0">
          <div className="flex-1 flex flex-row items-start justify-start relative">
            <b className="flex-1 relative">
              Do I need technical skills to use the platform?
            </b>
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] right-[-16px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-px relative bg-gray-300" />
        <div className="self-stretch relative font-medium text-secondary-text-alt">
          No, not at all! Our platform is designed with user-friendliness in
          mind. You can easily navigate and set up your store without any
          technical expertise. It's as simple as a few clicks to get started!
        </div>
      </div>
    </div>
  );
};

export default FAQItemTwo;
