import { FunctionComponent } from "react";
import DivhomeTeamSingleTeamTYuss from "./DivhomeTeamSingleTeamTYuss";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[122px] box-border max-w-full shrink-0 text-center text-base text-darkgray font-inter lg:pb-[79px] lg:box-border mq825:pb-[51px] mq825:box-border ${className}`}
    >
      <div className="w-[1320px] flex flex-col items-end justify-start gap-[47px] max-w-full shrink-0 mq825:gap-[23px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <div className="flex flex-col items-end justify-start gap-[1px]">
            <div className="flex flex-row items-start justify-end py-0 pr-[43px] pl-11">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="w-[50px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <div className="self-stretch h-0.5 relative bg-deeppink shrink-0 [debug_commit:bf4bc93] z-[1]" />
                </div>
                <div className="relative leading-[24px] capitalize inline-block min-w-[74px] shrink-0 [debug_commit:bf4bc93]">
                  Our Team
                </div>
              </div>
            </div>
            <h1 className="m-0 relative text-29xl leading-[65px] font-bold font-inherit text-gray-300 mq450:text-10xl mq450:leading-[39px] mq825:text-19xl mq825:leading-[52px]">
              Our Team
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-3 pb-4 box-border gap-[16px_22.7px] min-h-[762px] text-left text-lg text-gray-300">
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0@2x.png"
            mahbuburRahman="mahbubur rahman"
            frontEndDeveloper="Front End Developer"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-1@2x.png"
            mahbuburRahman="Tanvir Ahmed"
            frontEndDeveloper="Product Designer"
            propDisplay="inline-block"
            propMinWidth="119px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-2@2x.png"
            mahbuburRahman="Sakib Sharier"
            frontEndDeveloper="Webflow Developer"
            propDisplay="inline-block"
            propMinWidth="114.1px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-3@2x.png"
            mahbuburRahman="Rifat Shikder"
            frontEndDeveloper="WP developer"
            propDisplay="inline-block"
            propMinWidth="110px"
            propDisplay1="inline-block"
            propMinWidth1="108.2px"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0@2x.png"
            mahbuburRahman="mahbubur rahman"
            frontEndDeveloper="Front End Developer"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-1@2x.png"
            mahbuburRahman="Tanvir Ahmed"
            frontEndDeveloper="Product Designer"
            propDisplay="inline-block"
            propMinWidth="119px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-2@2x.png"
            mahbuburRahman="Sakib Sharier"
            frontEndDeveloper="Webflow Developer"
            propDisplay="inline-block"
            propMinWidth="114.1px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DivhomeTeamSingleTeamTYuss
            divhomeTeamSingleTeamImgR="/divhometeam-singleteamimg--rtfo0-3@2x.png"
            mahbuburRahman="Rifat Shikder"
            frontEndDeveloper="WP developer"
            propDisplay="inline-block"
            propMinWidth="110px"
            propDisplay1="inline-block"
            propMinWidth1="108.2px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
