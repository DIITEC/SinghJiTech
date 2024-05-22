import { FunctionComponent } from "react";

export type DivfooterFooterAreaMeKSNType = {
  className?: string;
};

const DivfooterFooterAreaMeKSN: FunctionComponent<
  DivfooterFooterAreaMeKSNType
> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray-400 flex flex-col items-center justify-start pt-[79.9px] pb-[85px] pr-[22px] pl-5 box-border gap-[82px] max-w-full shrink-0 text-left text-lg text-gray-100 font-inter mq450:gap-[20px] mq825:gap-[41px] mq825:pt-[52px] mq825:pb-[55px] mq825:box-border ${className}`}
    >
      <div className="w-[1298px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1425:flex-wrap">
        <div className="w-[357px] flex flex-col items-start justify-start gap-[27px] max-w-full text-9xl text-deeppink">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.8px] box-border max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.36px] leading-[26px] font-medium font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[21px]">
              Software Company
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-lg text-gray-100">
            <div className="h-[47px] relative tracking-[0.36px] leading-[26px] font-medium flex items-center">
              <span>
                <p className="m-0">{`Creative Design & Development Agency`}</p>
                <p className="m-0">in India.</p>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-[30px] w-[30px] relative rounded-8xs min-h-[30px]"
                loading="lazy"
                alt=""
                src="/a.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-8xs min-h-[30px]"
                loading="lazy"
                alt=""
                src="/a-1.svg"
              />
              <img
                className="h-[30px] w-[30px] relative rounded-8xs min-h-[30px]"
                loading="lazy"
                alt=""
                src="/a-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[355px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border max-w-full">
          <div className="w-[309px] flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[33px]">
              <div className="relative leading-[30px] font-semibold inline-block min-w-[71px]">
                Support
              </div>
              <div className="flex flex-col items-start justify-start gap-[22px] text-base">
                <div className="relative leading-[24px] inline-block min-w-[46px]">
                  About
                </div>
                <div className="relative leading-[24px] inline-block min-w-[101px]">
                  UX/UI Design
                </div>
                <div className="relative leading-[24px] inline-block min-w-[116px]">
                  Graphic Design
                </div>
                <div className="relative leading-[24px]">Business Strategy</div>
                <div className="relative leading-[20px]">App Development</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[33px]">
              <div className="relative leading-[30px] font-semibold inline-block min-w-[76px]">
                Services
              </div>
              <div className="flex flex-col items-start justify-start gap-[22px] text-base">
                <div className="relative leading-[24px] inline-block min-w-[34px]">
                  Blog
                </div>
                <div className="relative leading-[24px] inline-block min-w-[57px]">
                  Service
                </div>
                <div className="relative leading-[24px] inline-block min-w-[65px]">
                  Portfolio
                </div>
                <div className="relative leading-[24px] inline-block min-w-[89px]">
                  Pricing Plan
                </div>
                <div className="relative leading-[20px] inline-block min-w-[85.1px]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[416px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
            <div className="relative leading-[30px] font-semibold inline-block min-w-[70px]">
              Contact
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-base text-white">
              <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/svg-2.svg"
                  />
                </div>
                <div className="relative leading-[20px]">
                  T/181 Patna Bihar 
                </div>
              </div>
              <div className="self-stretch h-6 flex flex-row items-start justify-start pt-0.5 px-0 pb-1 box-border gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/svg-3.svg"
                  />
                </div>
                <div className="relative leading-[24px]">+91 8726810072</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0.5 px-0 gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/svg-4.svg"
                  />
                </div>
                <div className="relative leading-[20px] whitespace-nowrap">
                  singhjitech08@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1296px] flex flex-col items-start justify-start gap-[39px] max-w-full text-center text-sm text-darkgray mq825:gap-[19px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-600" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[361.6px] relative leading-[17px] flex items-center justify-center shrink-0 max-w-full">
            Copyright 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DivfooterFooterAreaMeKSN;
