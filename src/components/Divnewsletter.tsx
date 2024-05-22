import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";

export type DivnewsletterType = {
  className?: string;
};

const Divnewsletter: FunctionComponent<DivnewsletterType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-deeppink flex flex-col items-center justify-start py-[60px] px-5 box-border gap-[33.4px] max-w-full shrink-0 text-center text-base text-gray-100 font-inter mq825:gap-[17px] ${className}`}
    >
      <div className="flex flex-row items-start justify-end py-0 pr-12 pl-[49px] box-border max-w-full text-17xl mq825:pl-6 mq825:pr-6 mq825:box-border">
        <h1 className="m-0 relative text-inherit tracking-[0.72px] leading-[45px] font-bold font-inherit mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
          Subscribe To The Newsletter.
        </h1>
      </div>
      <div className="w-[636px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-whitesmoke-100">
        <div className="h-[46.7px] relative leading-[26.72px] flex items-center">
          <span>
            <p className="m-0">
              Subscribe is an option offered by product vendors or service
            </p>
            <p className="m-0">providers that allows customers.</p>
          </span>
        </div>
      </div>
      <div className="w-[636px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-between py-0.5 pr-1.5 pl-[18px] gap-[20px] max-w-full text-left text-slategray border-[1px] border-solid border-lightgray-100 mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
          <div className="relative whitespace-nowrap">Example@gmail.com</div>
        </div>
        <Button className="z-[1]" type="default" />
      </div>
    </section>
  );
};

export default Divnewsletter;
