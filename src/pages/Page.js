import MainContainer from "../components/MainContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="w-full relative bg-body overflow-hidden flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border gap-[38px] leading-[normal] tracking-[normal] mq800:gap-[19px]">
      <img
        className="w-full h-[1024px] absolute !m-[0] top-[-100px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/background@2x.png"
      />
      <MainContainer />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Page;
