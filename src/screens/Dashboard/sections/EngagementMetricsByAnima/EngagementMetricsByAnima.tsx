import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define metric data for easier mapping
const metrics = [
  {
    name: "Views",
    value: "11.4K",
    change: "6.2%",
    isPositive: true,
    chartImage: "/linegroup0-4.png",
    position: "top-[50px] left-[31px]",
  },
  {
    name: "Reactions",
    value: "9.7K",
    change: "2.5%",
    isPositive: true,
    chartImage: "/linegroup0-1.png",
    position: "top-[50px] left-[249px]",
  },
  {
    name: "Followers",
    value: "5.5K",
    change: "3.4%",
    isPositive: true,
    chartImage: "/linegroup0-3.png",
    position: "top-[50px] left-[467px]",
  },
  {
    name: "Comments",
    value: "3.1K",
    change: "12.2%",
    isPositive: false,
    chartImage: "/linegroup0.png",
    position: "top-[141px] left-[30px]",
  },
  {
    name: "Shares",
    value: "2.3K",
    change: "1.6%",
    isPositive: true,
    chartImage: "/linegroup0-2.png",
    position: "top-[142px] left-[249px]",
  },
];

export const EngagementMetricsByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-[701px] h-[233px] bg-[#ffffff99] rounded-lg overflow-hidden shadow-[0px_3px_3px_#00000033]">
      <h2 className="absolute top-[13px] left-[25px] font-['Nunito',Helvetica] font-semibold text-black text-[19.3px]">
        Engagement Metrics
      </h2>

      {metrics.map((metric, index) => (
        <Card
          key={index}
          className={`absolute w-[204px] bg-white rounded-[2.11px] shadow-[0px_2px_2px_#00000026] ${metric.position}`}
        >
          <CardContent className="p-[5.28px]">
            <div className="relative w-auto h-[16.91px] mt-[-1.06px] font-['Figtree',Helvetica] font-normal text-black text-[10.6px]">
              {metric.name}
            </div>

            <div className="flex w-full items-start pl-[5.28px] pr-[10.57px] pt-[6.34px] pb-[10.57px] bg-white">
              <div className="flex w-[119.41px] h-[34.87px] items-center pl-[3.17px] pr-0 pt-0 pb-[5.28px]">
                <div className="relative w-auto h-[31.19px] mt-[-1.86px] font-['Figtree',Helvetica] font-semibold text-black text-[34.8px] text-center leading-[41.2px] whitespace-nowrap">
                  {metric.value}
                </div>

                <div className="w-[33.81px] h-[36.98px] mt-[-3.70px] mb-[-3.70px] flex items-center">
                  {metric.isPositive ? (
                    <ArrowUpIcon className="w-[8.59px] h-[14.72px] text-[#1ba064]" />
                  ) : (
                    <ArrowDownIcon className="w-[8.59px] h-[14.72px] text-[#e63e3e]" />
                  )}

                  <div
                    className={`relative w-auto h-[37.39px] mt-[-1.27px] font-['Figtree',Helvetica] font-normal text-${metric.isPositive ? "[#1ba064]" : "[#e63e3e]"} text-[10.9px] text-center leading-[13.0px]`}
                  >
                    {metric.change}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[62.34px] items-start relative self-stretch">
                <div className="flex items-center relative flex-1 self-stretch w-full grow">
                  <div className="relative w-[66.57px] h-[45.44px] mt-[-5.28px] mb-[-5.28px]">
                    <div className="relative w-[67px] h-[31px] top-[7px]">
                      <img
                        className="absolute w-[57px] h-[30px] top-px left-[5px]"
                        alt={`${metric.name} trend line`}
                        src={metric.chartImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
