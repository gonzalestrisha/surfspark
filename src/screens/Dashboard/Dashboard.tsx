import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { EngagementMetricsByAnima } from "./sections/EngagementMetricsByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima/GroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima/OverlapWrapperByAnima";

export const Dashboard = (): JSX.Element => {
  // Data for the platform performance chart
  const platformPerformance = [
    { name: "Facebook", value: 177, color: "#dc6124" },
    { name: "Instagram", value: 135, color: "#1ba09d" },
  ];

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] w-full max-w-[1280px] relative min-h-screen">
        {/* Sidebar */}
        <div className="fixed w-[83px] h-screen left-0 top-0 z-10">
          <GroupWrapperByAnima />
          <img
            className="absolute w-[29px] h-9 top-[235px] left-[27px]"
            alt="Timeline week"
            src="/timeline-week.png"
          />
          <img
            className="absolute w-[29px] h-[31px] top-[341px] left-[26px]"
            alt="Statistics"
            src="/statistics.png"
          />
          <img
            className="absolute w-[29px] h-[29px] top-[667px] left-[25px]"
            alt="Male user"
            src="/male-user-1.png"
          />
        </div>

        {/* Main content */}
        <div className="ml-[83px] p-8">
          {/* Header */}
          <div className="flex flex-row justify-between items-center mb-8">
            <h1 className="font-['Nunito',Helvetica] font-semibold text-black text-[41px]">
              Dashboard
            </h1>

            <div className="flex items-center gap-4">
              {/* Date selector */}
              <div className="flex items-center h-9 px-3 bg-[#ffffff66] rounded-[7px] shadow-[0px_4px_4px_#00000040]">
                <span className="font-['Nunito',Helvetica] font-bold text-[#585858] text-base">
                  May 2025
                </span>
                <img
                  className="w-[25px] h-8 ml-3"
                  alt="Calendar"
                  src="/calendar.png"
                />
              </div>

              {/* Social media selector */}
              <div className="flex items-center h-9 px-4 bg-[#ffffff66] rounded-lg shadow-[0px_4px_4px_#00000040]">
                <img
                  className="w-[22px] h-[22px] mr-1"
                  alt="Vector"
                  src="/vector-3.svg"
                />
                <img
                  className="w-[22px] h-[22px] mr-3"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="w-6 h-[17px] mr-2"
                  alt="Vector"
                  src="/vector-4.svg"
                />
                <img className="w-7 h-7 mr-2" alt="Tik tok" src="/tiktok.png" />
                <img className="w-7 h-7 mr-2" alt="X" src="/x.png" />
                <img
                  className="w-[17px] h-[11px]"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>

              {/* Download button */}
              <Button className="w-10 h-9 p-0 bg-[#1ba09d] rounded-md shadow-[0px_4px_4px_#00000040]">
                <img
                  className="w-[30px] h-[23px]"
                  alt="Download"
                  src="/download.png"
                />
              </Button>

              {/* Create Post button */}
              <Button className="h-9 px-5 bg-[#dc6124] rounded-md shadow-[0px_3px_3px_#00000033] font-['Nunito',Helvetica] font-semibold text-white text-base">
                Create Post
              </Button>
            </div>
          </div>

          {/* Main content sections */}
          <div className="flex flex-col gap-6">
            <GroupByAnima />

            <div className="flex gap-6">
              <div className="flex-1">
                <OverlapWrapperByAnima />
              </div>

              <div className="flex-1">
                <EngagementMetricsByAnima />
              </div>
            </div>

            {/* Platform Performance Chart */}
            <Card className="w-[359px] h-80 ml-auto rounded-lg shadow-[0px_4px_4px_#00000040]">
              <CardContent className="p-6">
                <div className="w-full h-full">
                  <h3 className="font-['Nunito',Helvetica] font-medium text-black text-xl mb-6">
                    Platform Performance
                  </h3>

                  <div className="relative h-[210px] ml-[53px]">
                    {/* Y-axis labels */}
                    <div className="absolute -left-[53px] h-full flex flex-col justify-between">
                      <span className="font-['Figtree',Helvetica] font-normal text-black text-[10px]">
                        50
                      </span>
                      <span className="font-['Figtree',Helvetica] font-normal text-black text-[10px]">
                        40
                      </span>
                      <span className="font-['Figtree',Helvetica] font-normal text-black text-[10px]">
                        30
                      </span>
                      <span className="font-['Figtree',Helvetica] font-normal text-black text-[10px]">
                        20
                      </span>
                      <span className="font-['Figtree',Helvetica] font-normal text-black text-[10px]">
                        10
                      </span>
                    </div>

                    {/* Y-axis line */}
                    <div className="absolute top-0 left-0 w-px h-full bg-black"></div>

                    {/* Chart bars */}
                    <div className="flex items-end h-full">
                      {platformPerformance.map((platform, index) => (
                        <div
                          key={platform.name}
                          className="flex flex-col items-center mx-8"
                        >
                          <div
                            className="w-[39px] rounded-[5px_5px_0px_0px]"
                            style={{
                              height: `${platform.value}px`,
                              backgroundColor: platform.color,
                            }}
                          />
                          <span className="mt-4 font-['Figtree',Helvetica] font-normal text-[#191919] text-[10px] text-center">
                            {platform.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* X-axis line */}
                    <div className="absolute bottom-0 left-0 w-[242px] h-px bg-black"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
