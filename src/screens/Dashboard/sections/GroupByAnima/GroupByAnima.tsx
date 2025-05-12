import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {
  // Data for the x-axis dates
  const dates = [
    "May 01",
    "May 06",
    "May 11",
    "May 16",
    "May 21",
    "May 26",
    "May 31",
  ];

  // Data for the y-axis values
  const values = [10, 20, 30, 40, 50];

  return (
    <div className="w-full max-w-[717px]">
      <Card className="relative w-full rounded-lg shadow-[0px_3px_3px_#00000033]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium text-xl font-['Nunito',Helvetica]">
              Performance Overview
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#1ba09d] rounded-lg" />
                <span className="font-['Figtree',Helvetica] font-normal text-black text-[9px]">
                  Followers
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#dc6124] rounded-lg" />
                <span className="font-['Figtree',Helvetica] font-normal text-black text-[9px]">
                  Engagement
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[195px] ml-[64px]">
            {/* Y-axis labels */}
            <div className="absolute left-[-64px] h-full flex flex-col justify-between">
              {values
                .slice()
                .reverse()
                .map((value, index) => (
                  <div
                    key={index}
                    className="font-['Figtree',Helvetica] font-normal text-black text-[10px]"
                  >
                    {value}
                  </div>
                ))}
            </div>

            {/* Chart grid and lines */}
            <div className="relative h-full w-full">
              {/* Vertical axis line */}
              <img
                className="absolute w-[3px] h-[194px] top-0 left-0 object-cover"
                alt="Line"
                src="/line-22.svg"
              />

              {/* Horizontal axis line */}
              <img
                className="absolute w-[580px] h-0.5 top-[193px] left-0 object-cover"
                alt="Line"
                src="/line-23.svg"
              />

              {/* Grid lines */}
              {[167, 130, 95, 58, 23].map((top, index) => (
                <img
                  key={index}
                  className="absolute w-[580px] h-0.5 top-[${top}px] left-0.5 object-cover"
                  alt="Line"
                  src="/line-29.svg"
                  style={{ top: `${top}px` }}
                />
              ))}

              {/* Chart lines */}
              <img
                className="absolute w-[68px] h-[27px] top-[115px] left-[22px]"
                alt="Line"
                src="/line-24.svg"
              />
              <img
                className="absolute w-[453px] h-[74px] top-[53px] left-[89px]"
                alt="Vector"
                src="/vector-1-1.svg"
              />
              <img
                className="absolute w-[525px] h-[77px] top-[54px] left-[23px]"
                alt="Vector"
                src="/vector-2.svg"
              />

              {/* Data points */}
              <div className="absolute w-[7px] h-[7px] top-[138px] left-5 rounded-[3.5px] bg-[#1ba09d]" />
              <div className="absolute w-[7px] h-[7px] top-[126px] left-5 rounded-[3.5px] bg-[#dc6124]" />
              <div className="absolute w-[7px] h-[7px] top-[72px] left-[539px] rounded-[3.5px] bg-[#1ba09d]" />
              <div className="absolute w-[7px] h-[7px] top-[51px] left-[545px] rounded-[3.5px] bg-[#dc6124]" />
            </div>
          </div>

          {/* X-axis dates */}
          <div className="flex justify-between mt-3 ml-[23px] mr-[23px]">
            {dates.map((date, index) => (
              <div
                key={index}
                className="font-['Figtree',Helvetica] font-normal text-black text-[10px]"
              >
                {date}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
