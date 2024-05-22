import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import HeroContent from "../components/HeroContent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import BlogPost from "../components/BlogPost";
import Divnewsletter from "../components/Divnewsletter";
import DivfooterFooterAreaMeKSN from "../components/DivfooterFooterAreaMeKSN";

const SoftwareCompany = () => {
  return (
    <div className="w-full h-[8633px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0  box-border leading-[normal] tracking-[normal] mq1425:h-auto">
      <FrameComponent5 />
      {/* <div className="w-[5px] h-[5px] absolute !m-[0] top-[228.04px] left-[361px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" />
      <div className="w-[5px] h-[5px] absolute !m-[0] top-[1787.34px] left-[361px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" /> */}
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[122px] box-border max-w-full shrink-0 lg:pb-[51px] lg:box-border mq825:pb-[33px] mq825:box-border mq1425:pb-[79px] mq1425:box-border">
        <div className="w-[1620px] flex flex-col items-start justify-start gap-[16px] max-w-full mq825:gap-[30px]">
          <HeroContent />
          <FrameComponent4 />
        </div>
      </section>
      <div className="w-[5px] h-[5px] absolute !m-[0] top-[2472.84px] left-[939.9px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" />
      <FrameComponent3 />
      <div className="w-[5px] h-[5px] absolute !m-[0] top-[3494.34px] left-[361px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" />
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="w-[5px] h-[5px] absolute !m-[0] bottom-[2942.86px] left-[361px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" />
      <FrameComponent />
      <BlogPost />
      <Divnewsletter />
      <DivfooterFooterAreaMeKSN />
    </div>
  );
};

export default SoftwareCompany;
