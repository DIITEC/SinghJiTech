import { FunctionComponent } from "react";

export type DivtestimonialSingleTestimonType = {
  className?: string;
  divtestimonialWriterImgGO?: string;
};

const DivtestimonialSingleTestimon: FunctionComponent<
  DivtestimonialSingleTestimonType
> = ({ className = "", divtestimonialWriterImgGO }) => {
  return (
    <div
      className={`w-[412px] shadow-[0px_12px_24px_rgba(80,_80,_80,_0.04)] rounded-3xs bg-white shrink-0 flex flex-col items-start justify-start pt-[34px] pb-[30.4px] pr-5 pl-[30px] box-border gap-[44.2px] max-w-full text-left text-base text-dimgray font-inter mq450:gap-[22px] ${className}`}
    >
      <div className="h-[161.6px] relative leading-[28.32px] flex items-center shrink-0 max-w-full">
        <span>
          <p className="m-0">Let our experts prepare a free home analysis</p>
          <p className="m-0">
            for you! Just fill out our Surround yourself with
          </p>
          <p className="m-0">the quality of one of Saska toon’s premier</p>
          <p className="m-0">home builder. Just fill out our form. Surround</p>
          <p className="m-0">yourself with quality of one of Saskatoon’s</p>
          <p className="m-0">premier home builder.</p>
        </span>
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px] text-lg text-gray-200 mq450:flex-wrap">
        <img
          className="h-14 w-14 relative rounded-9xl overflow-hidden shrink-0 object-contain min-h-[56px]"
          loading="lazy"
          alt=""
          src={divtestimonialWriterImgGO}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="h-[30.9px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="mb-[-1.1000000000003638px] relative leading-[32px] font-semibold shrink-0 [debug_commit:bf4bc93]">
              Mahbubur Rahman
            </div>
          </div>
          <div className="relative text-sm leading-[25px] text-darkgray inline-block min-w-[125px] shrink-0 [debug_commit:bf4bc93]">
            Owener, Softia, UK
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivtestimonialSingleTestimon;
