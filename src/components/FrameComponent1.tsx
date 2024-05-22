import { FunctionComponent } from "react";
import DivtestimonialSingleTestimon from "./DivtestimonialSingleTestimon";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[62.1px] box-border max-w-full shrink-0 text-left text-base text-darkgray font-inter mq450:pb-[26px] mq450:box-border mq825:pb-10 mq825:box-border ${className}`}
    >
      <div className="flex-1 bg-snow flex flex-col items-start justify-start pt-[62px] px-[287px] pb-[34.9px] box-border relative gap-[53px] max-w-full lg:pl-[143px] lg:pr-[143px] lg:box-border mq825:gap-[26px] mq825:pt-10 mq825:px-[71px] mq825:pb-[23px] mq825:box-border">
        <div className="w-[5px] h-[5px] absolute !m-[0] top-[72.54px] left-[361px] bg-deeppink [transform:_rotate(-45deg)] [transform-origin:0_0]" />
        <div className="flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div className="w-[50px] flex flex-col items-start justify-end pt-0 px-0 pb-[8.5px] box-border">
                <div className="self-stretch h-0.5 relative bg-deeppink z-[1]" />
              </div>
              <div className="relative tracking-[0.32px] leading-[20px] capitalize font-medium inline-block min-w-[100.1px]">
                Testimonials
              </div>
            </div>
            <h1 className="m-0 relative text-29xl tracking-[0.96px] leading-[59px] font-bold font-inherit text-gray-200 mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
              Customers Talk About Us
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full text-dimgray">
          <div className="self-stretch flex flex-col items-start justify-start gap-[51.8px] max-w-full mq825:gap-[26px]">
            <div className="flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
              <div className="h-[46.7px] relative leading-[26.72px] flex items-center shrink-0 [debug_commit:bf4bc93]">
                <span>
                  <p className="m-0">
                    Customer support represents the resources within your
                    company that provide technical assistance
                  </p>
                  <p className="m-0">
                    to consumers after they purchase a product or service.
                  </p>
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px] shrink-0 [debug_commit:bf4bc93] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[153.2px] px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/svgslickarrow.svg"
                />
              </div>
              <div className="w-[1296px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_50px)]">
                <div className="ml-[-3456px] w-[8208px] overflow-x-auto shrink-0 flex flex-row items-start justify-center py-0 px-5 box-border gap-[20px] [debug_commit:bf4bc93] max-w-[634%]">
                  <DivtestimonialSingleTestimon divtestimonialWriterImgGO="/divtestimonial-writerimg--goqsa@2x.png" />
                  <DivtestimonialSingleTestimon divtestimonialWriterImgGO="/divtestimonial-writerimg--goqsa-1@2x.png" />
                  <DivtestimonialSingleTestimon divtestimonialWriterImgGO="/divtestimonial-writerimg--goqsa-2@2x.png" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[153.2px] px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/svgslickarrow-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-7xs text-lightgray-200">
            <div className="w-20 flex flex-row items-start justify-start gap-[9.8px]">
              <div className="flex-1 relative leading-[20px] shrink-0">•</div>
              <div className="flex-1 relative leading-[20px] shrink-0">•</div>
              <div className="flex-[0.45] rounded-3xs flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] opacity-[0.75] text-[transparent] border-[3px] border-solid border-deeppink">
                <div className="h-3.5 w-[14.2px] relative leading-[20px] flex items-center justify-center shrink-0">
                  •
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
