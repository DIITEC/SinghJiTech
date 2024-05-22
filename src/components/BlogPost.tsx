import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import DivHomeBlogSingleBlogKSDt from "./DivHomeBlogSingleBlogKSDt";

export type BlogPostType = {
  className?: string;
};

const BlogPost: FunctionComponent<BlogPostType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[60px] box-border max-w-full shrink-0 text-center text-base text-white font-inter lg:pb-[39px] lg:box-border mq825:pb-[25px] mq825:box-border ${className}`}
    >
      <div className="w-[1320px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full lg:flex-wrap">
            <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-end py-12 px-5 box-border bg-[url('/public/lbp15ca1a3ecbcc2f372b323jpg@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[556px] min-h-[621px] max-w-full mq825:min-w-full">
              <img
                className="w-[856px] h-[620.9px] relative object-cover hidden max-w-full z-[1]"
                alt=""
                src="/lbp15ca1a3ecbcc2f372b323jpg@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-0 pr-[18px] pl-[21px]">
                <b className="relative leading-[30px] z-[1]">
                  Make The World A Better Place
                </b>
              </div>
              <div className="w-[280px] flex flex-row items-start justify-start gap-[7.8px] mt-[-6px]">
                <b className="flex-1 relative leading-[20px] z-[1]">
                  February 27, 2022
                </b>
                <b className="w-[6.2px] relative leading-[20px] flex items-center justify-center shrink-0 min-w-[6.2px] z-[1]">
                  |
                </b>
                <b className="relative [text-decoration:underline] leading-[19px] inline-block min-w-[117px] z-[1]">
                  UX Case Study
                </b>
              </div>
            </div>
            <div className="w-[416px] flex flex-col items-start justify-start gap-[24px] min-w-[416px] max-w-full lg:flex-1 mq825:min-w-full">
              <DivHomeBlogSingleBlogKSDt lbp2c4c1b89044bdf6e826aaj="/lbp2c4c1b89044bdf6e826aajpg@2x.png" />
              <Input.TextArea
                className="self-stretch font-inter font-bold text-base text-white max-w-full"
                bordered={false}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start pt-0 px-3 pb-6 box-border gap-[24px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] shrink-0 lg:justify-center lg:grid-cols-[repeat(2,_minmax(312px,_541px))] mq825:grid-cols-[minmax(312px,_1fr)]">
          <Input.TextArea
            className="font-inter font-bold text-base text-white max-w-full"
            bordered={false}
          />
          <DivHomeBlogSingleBlogKSDt
            lbp2c4c1b89044bdf6e826aaj="/lbp5105ed08bf50911d819dcjpg@2x.png"
            propBackgroundImage="url('/lbp5105ed08bf50911d819dcjpg@2x.png')"
            propAlignSelf="unset"
            propDisplay="inline-block"
          />
          <DivHomeBlogSingleBlogKSDt
            lbp2c4c1b89044bdf6e826aaj="/lbp6bb2c5e8040891a292172jpg@2x.png"
            propBackgroundImage="url('/lbp6bb2c5e8040891a292172jpg@2x.png')"
            propAlignSelf="unset"
            propDisplay="inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
