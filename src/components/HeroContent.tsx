import { FunctionComponent } from "react";

export type HeroContentType = {
  className?: string;
};

const HeroContent: FunctionComponent<HeroContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-between max-w-full shrink-0 gap-[20px] text-left text-base text-gray-200 font-inter mq1425:flex-wrap ${className}`}
    >
      {/* <img
        className="h-[130px] w-6 relative object-contain"
        alt=""
        src="/dot1403b6c1d74decdfeb3f3fd130a8f329svg@2x.png"
      /> */}
      <div className="w-[636px] flex flex-col items-start justify-start pt-0 px-0 pb-[118px] box-border min-h-[485px] max-w-full mq825:pb-[77px] mq825:box-border">
        <div className="flex flex-col items-start justify-start gap-[20.3px] max-w-full">
          <div className="flex flex-row items-end justify-start gap-[15px]">
            <div className="w-[50px] flex flex-col items-start justify-end pt-0 px-0 pb-[7.5px] box-border">
              <div className="self-stretch h-0.5 relative bg-deeppink z-[1]" />
            </div>
            <div className="relative tracking-[0.32px] leading-[19px] capitalize font-medium">
              <span>{`Welcome to `}</span>
              <span className="text-deeppink">Ajux</span>
            </div>
          </div>
          <h1 className="m-0 h-[154px] relative text-45xl tracking-[1.28px] leading-[77px] font-bold font-inherit flex items-center max-w-full mq450:text-19xl mq450:leading-[46px] mq825:text-32xl mq825:leading-[62px]">
            <span>
              <p className="m-0">Impact the World</p>
              <p className="m-0">by Taking Action</p>
            </span>
          </h1>
          <div className="h-[78px] relative text-lg tracking-[0.36px] leading-[26px] font-medium text-dimgray flex items-center">
            <span>
              <p className="m-0">
                Objectively foster extensible scenarios and business innovation.
              </p>
              <p className="m-0">
                Energistically predominate prospective experiences with
                strategic
              </p>
              <p className="m-0">initiatives.</p>
            </span>
          </div>
          <button className="cursor-pointer py-[13px] pr-[31px] pl-[33px] bg-deeppink rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-deeppink">
            <div className="relative text-base leading-[24px] capitalize font-medium font-inter text-white text-left inline-block min-w-[89px]">
              get started
            </div>
          </button>
        </div>
      </div>
      <div className="w-[472px] flex flex-col items-start justify-start pt-0 px-0 pb-[86px] box-border min-h-[516px] max-w-full mq825:pb-14 mq825:box-border">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq825:flex-wrap">
          <div className="w-[518px] flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
            <div className="h-[430px] w-[167.3px] flex flex-col items-start justify-start gap-[16px] min-w-[167.29999999999995px] mq450:flex-1">
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/herosm1b44d554995eadfdd4dbcpng@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/herosm1b44d554995eadfdd4dbcpng@2x.png"
              />
            </div>
            <div className="h-[430px] flex-1 relative max-w-full min-w-[218px] min-h-[430px] flex items-center justify-center">
              <img
                className="h-full flex-1 overflow-hidden object-contain absolute left-[36px] top-[-37px] w-full [transform:scale(1.215)]"
                loading="lazy"
                alt=""
                src="/div.svg"
              />
            </div>
          </div>
          <div className="w-[70px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
            <img
              className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/line98315ff2175caecd157fc530475175cdsvg@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
