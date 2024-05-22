import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[36px] box-border max-w-full shrink-0 ${className}`}
    >
      <header className="flex-1 bg-whitesmoke-200 flex flex-row items-start justify-center py-2 px-5 box-border gap-[3.1px] top-[0] z-[99] sticky max-w-full text-left text-base text-deeppink font-inter">
        <div className="w-[676px] flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border max-w-full text-9xl">
          <h2 className="m-0 mt-2.5 w-[355px] relative text-inherit tracking-[0.36px] leading-[26px] font-medium font-inherit flex items-center whitespace-nowrap max-w-full">
            SinghJiTech
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
          <div className="relative leading-[24px] font-medium inline-block min-w-[46px]">
            Home
          </div>
        </div>
        <div className="w-[28.5px] flex flex-col items-start justify-start pt-[24.1px] pb-0 pr-[18px] pl-0 box-border">
          <div className="w-[9.6px] h-[4.8px] relative box-border border-t-[4.8px] border-solid border-deeppink border-r-[4.8px] border-l-[4.8px]" />
        </div>
        <nav className="m-0 w-[248.5px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border lg:hidden mq825:w-0">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-dimgray font-inter mq825:hidden">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              About
            </div>
            <div className="relative leading-[24px] font-medium inline-block min-w-[67px]">
              Services
            </div>
            <div className="relative leading-[24px] font-medium inline-block min-w-[48px]">
              Pages
            </div>
          </nav>
        </nav>
        <div className="w-[50.5px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border">
          <div className="w-[9.6px] h-[4.8px] relative box-border border-t-[4.8px] border-solid border-dimgray border-r-[4.8px] border-l-[4.8px]" />
        </div>
        <div className="flex flex-col items-start justify-start pt-[15px] pb-0 pr-[18px] pl-0 text-dimgray">
          <div className="relative leading-[24px] font-medium inline-block min-w-[62px]">
            Contact
          </div>
        </div>
        <button className="cursor-pointer py-[13px] pr-[31px] pl-[33px] bg-deeppink rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-deeppink">
          <div className="relative text-base leading-[24px] capitalize font-medium font-inter text-white text-left inline-block min-w-[89px]">
            Get Started
          </div>
        </button>
      </header>
    </section>
  );
};

export default FrameComponent5;
