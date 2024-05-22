import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PricingCardsType = {
  className?: string;
  basic?: string;
  mostPopular?: string;
  featureCheck?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const PricingCards: FunctionComponent<PricingCardsType> = ({
  className = "",
  basic,
  mostPopular,
  featureCheck,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const basicStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const mostPopularStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const featureCheckStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[312px] max-w-full text-left text-17xl text-gray-300 font-inter ${className}`}
    >
      <div className="self-stretch shadow-[0px_16px_32px_rgba(80,_80,_80,_0.08)] rounded-3xs bg-white flex flex-col items-start justify-start p-[45px] gap-[30px] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pt-[29px] mq825:pb-[29px] mq825:box-border">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[3px]">
          <h1
            className="m-0 relative text-inherit leading-[45px] font-medium font-inherit inline-block min-w-[93px] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]"
            style={basicStyle}
          >
            {basic}
          </h1>
          <div
            className="relative text-base leading-[20px] text-slategray inline-block min-w-[100.1px]"
            style={mostPopularStyle}
          >
            {mostPopular}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[21px] pr-[77px] pl-[78px] text-center text-5xl text-gray-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-end justify-start">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit inline-block min-w-[16px] shrink-0 [debug_commit:bf4bc93] mq450:text-lgi mq450:leading-[23px]">
                  $
                </h3>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 ml-[-0.1px] text-29xl text-gray-300">
                <b
                  className="ml-[-0.39999999999997726px] relative leading-[59px] inline-block min-w-[109px] shrink-0 [debug_commit:bf4bc93] mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]"
                  style={featureCheckStyle}
                >
                  {featureCheck}
                </b>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 ml-[-0.1px]">
                <h3 className="m-0 relative text-inherit leading-[29px] font-semibold font-inherit inline-block min-w-[46px] shrink-0 [debug_commit:bf4bc93] mq450:text-lgi mq450:leading-[23px]">
                  /mo
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-[22px] text-base">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[51.1px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[51.1px] shrink-0 [debug_commit:bf4bc93]">{`Yearly `}</div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <button className="ml-[-0.09999999999999432px] cursor-pointer [border:none] pt-1 pb-[5px] pr-[7px] pl-2 bg-gainsboro rounded flex flex-row items-start justify-start shrink-0 [debug_commit:bf4bc93] whitespace-nowrap">
                    <div className="relative text-base leading-[19px] font-inter text-gray-200 text-center inline-block min-w-[59px]">
                      15% Off
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg text-midnightblue">
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
          <button className="cursor-pointer py-[9px] pr-[23px] pl-[25px] bg-gray-200 w-[119.8px] rounded-md box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-gray-200">
            <div className="relative text-base leading-[24px] font-medium font-inter text-white text-center inline-block min-w-[68px]">
              Buy Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
