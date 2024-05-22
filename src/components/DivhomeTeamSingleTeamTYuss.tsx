import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivhomeTeamSingleTeamTYussType = {
  className?: string;
  divhomeTeamSingleTeamImgR?: string;
  mahbuburRahman?: string;
  frontEndDeveloper?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DivhomeTeamSingleTeamTYuss: FunctionComponent<
  DivhomeTeamSingleTeamTYussType
> = ({
  className = "",
  divhomeTeamSingleTeamImgR,
  mahbuburRahman,
  frontEndDeveloper,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const mahbuburRahmanStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frontEndDeveloperStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div
      className={`h-[365px] w-[306px] shadow-[0px_12px_24px_rgba(80,_80,_80,_0.05)] rounded-3xs bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[21px] min-w-[291px] text-left text-lg text-gray-300 font-inter ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={divhomeTeamSingleTeamImgR}
      />
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div
            className="relative leading-[24px] capitalize font-medium"
            style={mahbuburRahmanStyle}
          >
            {mahbuburRahman}
          </div>
          <div
            className="relative text-base leading-[26px] capitalize font-medium text-darkslategray"
            style={frontEndDeveloperStyle}
          >
            {frontEndDeveloper}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivhomeTeamSingleTeamTYuss;
