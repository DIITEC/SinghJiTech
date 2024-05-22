import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivsingleServiceSingleServicType = {
  className?: string;
  divsingleServiceImgBoxY4f?: string;
  businessStrategy?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const DivsingleServiceSingleServic: FunctionComponent<
  DivsingleServiceSingleServicType
> = ({
  className = "",
  divsingleServiceImgBoxY4f,
  businessStrategy,
  propAlignSelf,
  propAlignSelf1,
  propFlex,
  propWidth,
  propDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const serviceTitlesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const businessStrategyStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      display: propDisplay,
    };
  }, [propFlex, propWidth, propDisplay]);

  return (
    <div
      className={`w-[416px] shadow-[0px_12px_24px_rgba(80,_80,_80,_0.07)] rounded-3xs bg-gray-500 flex flex-col items-end justify-start pt-[60px] pb-[60.2px] pr-[43px] pl-[42px] box-border gap-[32px] max-w-full text-center text-5xl text-gray-200 font-inter mq450:gap-[16px] mq450:py-[39px] mq450:px-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[3px]">
        <img
          className="h-[95px] w-[95px] relative rounded-28xl-5"
          loading="lazy"
          alt=""
          src={divsingleServiceImgBoxY4f}
        />
      </div>
      <div
        className="self-stretch flex flex-col items-end justify-start gap-[26.6px] shrink-0"
        style={frameDivStyle}
      >
        <div
          className="self-stretch flex flex-row items-start justify-end py-0 pr-[54px] pl-14 mq450:pl-5 mq450:pr-5 mq450:box-border"
          style={serviceTitlesStyle}
        >
          <h3
            className="m-0 flex-1 relative text-inherit tracking-[0.48px] leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]"
            style={businessStrategyStyle}
          >
            {businessStrategy}
          </h3>
        </div>
        <div className="relative text-base tracking-[0.32px] leading-[26.72px] text-dimgray">
          <p className="m-0">A business strategy is a powerful tool for</p>
          <p className="m-0">helping you reach your goals, defining the</p>
          <p className="m-0">methods and tactics</p>
        </div>
      </div>
    </div>
  );
};

export default DivsingleServiceSingleServic;
