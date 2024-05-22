import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivHomeBlogSingleBlogKSDtType = {
  className?: string;
  lbp2c4c1b89044bdf6e826aaj?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
};

const DivHomeBlogSingleBlogKSDt: FunctionComponent<
  DivHomeBlogSingleBlogKSDtType
> = ({
  className = "",
  lbp2c4c1b89044bdf6e826aaj,
  propBackgroundImage,
  propAlignSelf,
  propDisplay,
}) => {
  const divHomeBlogSingleBlogKSDtStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundImage, propAlignSelf]);

  const makeTheWorldStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-end pt-[206.1px] pb-[49px] pr-5 pl-[21px] box-border bg-[url('/public/lbp2c4c1b89044bdf6e826aajpg@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-base text-white font-inter ${className}`}
      style={divHomeBlogSingleBlogKSDtStyle}
    >
      <img
        className="w-[416px] h-[298.1px] relative object-cover hidden max-w-full z-[1]"
        alt=""
        src={lbp2c4c1b89044bdf6e826aaj}
      />
      <b className="relative leading-[30px] z-[1]" style={makeTheWorldStyle}>
        Make The World A Better Place
      </b>
      <div className="flex flex-row items-start justify-start py-0 pr-16 pl-[62px] mt-[-6px]">
        <b className="relative [text-decoration:underline] leading-[19px] inline-block min-w-[117px] z-[1]">
          UX Case Study
        </b>
      </div>
    </div>
  );
};

export default DivHomeBlogSingleBlogKSDt;
