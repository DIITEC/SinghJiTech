import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[84px] box-border max-w-full shrink-0 text-left text-base text-darkgray font-inter mq825:pb-9 mq825:box-border mq1425:pb-[55px] mq1425:box-border ${className}`}
    >
      <div className="w-[1296px] flex flex-col items-start justify-start gap-[30.8px] max-w-full mq825:gap-[15px]">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[22.2px] box-border gap-[25px] max-w-full">
          <div className="flex flex-row items-end justify-start gap-[15px]">
            <div className="w-[50px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.5px] box-border">
              <div className="self-stretch h-0.5 relative bg-deeppink z-[1]" />
            </div>
            <div className="relative tracking-[0.32px] leading-[19px] capitalize font-medium inline-block min-w-[69px]">
              Portfolio
            </div>
          </div>
          <h1 className="m-0 relative text-29xl tracking-[0.96px] leading-[59px] font-bold font-inherit text-gray-200 mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
            The Best Folio.
          </h1>
        </div>
        <div className="h-[73.4px] relative leading-[26.72px] text-dimgray flex items-center shrink-0 max-w-full">
          <span>
            <p className="m-0">
              Let our experts prepare a free home analysis for you! Just fill
              out our
            </p>
            <p className="m-0">
              form. Surround yourself with the luxury and quality of one of
            </p>
            <p className="m-0">Saskatoon’s premier home builder.</p>
          </span>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-center text-deeppink">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[24px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[53.7px] min-w-[413px] max-w-full mq825:gap-[27px] mq825:min-w-full">
              <div className="w-[114.1px] flex flex-row items-end justify-start gap-[8px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/svg-1.svg"
                />
                <div className="flex-1 relative tracking-[0.32px] leading-[20px] font-medium inline-block min-w-[90.1px] whitespace-nowrap">
                  Learn More
                </div>
              </div>
              <div className="self-stretch h-[664px] flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/divportfolio-singleportfolio--rup3c@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/divportfolio-singleportfolio--rup3c-1@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[413px] max-w-full mq825:min-w-full">
              <img
                className="self-stretch h-80 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/divportfolio-singleportfolio--rup3c-2@2x.png"
              />
              <img
                className="self-stretch h-80 relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/divportfolio-singleportfolio--rup3c-3@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full">
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[413px] min-h-[320px] mq825:min-w-full"
              loading="lazy"
              alt=""
              src="/divportfolio-singleportfolio--rup3c-4@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[413px] min-h-[320px] mq825:min-w-full"
              loading="lazy"
              alt=""
              src="/divportfolio-singleportfolio--rup3c-5@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
