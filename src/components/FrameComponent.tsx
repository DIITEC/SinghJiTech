import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import PricingCards from "./PricingCards";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-36 box-border max-w-full shrink-0 text-left text-base text-darkgray font-inter lg:pb-[94px] lg:box-border mq825:pb-[61px] mq825:box-border ${className}`}
    >
      <div className="w-[1296px] flex flex-col items-start justify-start gap-[53.5px] max-w-full mq825:gap-[27px]">
        <div className="flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="w-[121px] flex flex-row items-end justify-start gap-[15px]">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.5px]">
              <div className="self-stretch h-0.5 relative bg-deeppink z-[1]" />
            </div>
            <div className="relative tracking-[0.32px] leading-[19px] capitalize font-medium inline-block min-w-[56px]">
              Pricing
            </div>
          </div>
          <h1 className="m-0 relative text-29xl tracking-[0.96px] leading-[58px] font-bold font-inherit text-gray-200 mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
            The Best Pricing Plan
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full text-center text-gray-200 mq825:gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
            <div className="flex flex-row items-start justify-start gap-[15.8px]">
              <div className="relative tracking-[0.32px] leading-[19px] inline-block min-w-[64px]">
                Monthly
              </div>
              <div className="h-[23.5px] w-[45px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                <img
                  className="w-[45px] h-[22px] relative rounded-13xl"
                  alt=""
                  src="/inputcustomswitch.svg"
                />
              </div>
              <div className="relative tracking-[0.32px] leading-[19px] inline-block min-w-[49px]">
                Yearly
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full text-left text-17xl text-gray-300 lg:flex-wrap">
            <PricingCards
              basic="Basic"
              mostPopular="Most Popular"
              featureCheck="2.46"
            />
            <div className="flex-[0.7837] shadow-[0px_16px_32px_rgba(80,_80,_80,_0.08)] rounded-3xs bg-deeppink flex flex-col items-start justify-start p-[45px] box-border gap-[30px] min-w-[312px] max-w-full text-white mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq825:pt-[29px] mq825:pb-[29px] mq825:box-border">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[3px]">
                <h1 className="m-0 relative text-inherit leading-[45px] font-medium font-inherit mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
                  Standard
                </h1>
                <div className="relative text-base leading-[26px] inline-block min-w-[114px]">
                  Recommended
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[21px] text-center text-5xl">
                <div className="w-[163.4px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch flex flex-row items-end justify-start">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                      <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit inline-block min-w-[16px] shrink-0 [debug_commit:bf4bc93] mq450:text-lgi mq450:leading-[23px]">
                        $
                      </h3>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 ml-[-0.1px] text-29xl">
                      <b className="ml-[-0.39999999999997726px] self-stretch relative leading-[59px] inline-block min-w-[102.1px] shrink-0 [debug_commit:bf4bc93] mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
                        5.75
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 ml-[-0.1px]">
                      <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit inline-block min-w-[46px] shrink-0 [debug_commit:bf4bc93] mq450:text-lgi mq450:leading-[23px]">
                        /mo
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px] text-base">
                    <div className="flex flex-row items-start justify-start">
                      <div className="w-[51.1px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                        <div className="self-stretch relative leading-[20px] inline-block min-w-[51.1px] shrink-0 [debug_commit:bf4bc93]">{`Yearly `}</div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 px-0">
                        <button className="ml-[-0.09999999999999432px] cursor-pointer [border:none] pt-1 pb-[5px] pr-[7px] pl-2 bg-palevioletred rounded flex flex-row items-start justify-start shrink-0 [debug_commit:bf4bc93] whitespace-nowrap">
                          <div className="relative text-base leading-[19px] font-inter text-white text-center inline-block min-w-[59px]">
                            15% Off
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                  <div className="relative leading-[22px] capitalize inline-block min-w-[18.2px]">
                    ✓
                  </div>
                  <div className="relative leading-[22px] capitalize">
                    Unlimited Products
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                  <div className="relative leading-[22px] capitalize inline-block min-w-[18.2px]">
                    ✓
                  </div>
                  <div className="relative leading-[22px] capitalize">
                    Unlimited Products
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                  <div className="relative leading-[22px] capitalize inline-block min-w-[18.2px]">
                    ✓
                  </div>
                  <div className="relative leading-[22px] capitalize">
                    Unlimited Products
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                  <div className="relative leading-[22px] capitalize inline-block min-w-[18.2px]">
                    ✓
                  </div>
                  <div className="relative leading-[22px] capitalize">
                    Unlimited Products
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[6.8px]">
                  <div className="relative leading-[22px] capitalize inline-block min-w-[18.2px]">
                    ✓
                  </div>
                  <div className="relative leading-[22px] capitalize">
                    Unlimited Products
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center">
                <Button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[119.8px] whitespace-nowrap">
                  <div className="relative text-base leading-[24px] font-medium font-inter text-white text-center inline-block min-w-[68px]">
                    Buy Now
                  </div>
                </Button>
              </div>
            </div>
            <PricingCards
              basic="Premium"
              mostPopular="Best Value"
              featureCheck="10.25"
              propDisplay="unset"
              propMinWidth="unset"
              propMinWidth1="80px"
              propMinWidth2="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
