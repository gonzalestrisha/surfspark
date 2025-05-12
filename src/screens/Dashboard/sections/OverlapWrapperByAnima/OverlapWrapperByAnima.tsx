import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Chart data for content performance
  const chartData = [
    { type: "Post", value: 57, color: "#1ba09d" },
    { type: "Short Video", value: 102, color: "#dc6124" },
    { type: "Long Video", value: 64, color: "#1ba09d" },
  ];

  // Y-axis scale values
  const yAxisValues = [10, 20, 30, 40];

  return (
    <div className="w-full max-w-[359px]">
      <Card className="w-full h-[221px] rounded-lg shadow-[0px_3px_3px_#00000033]">
        <CardContent className="p-0 h-full relative">
          <h2 className="absolute top-[17px] left-8 font-medium text-black text-xl font-['Nunito',Helvetica]">
            Content Performance
          </h2>

          <div className="absolute w-[283px] h-[126px] top-[65px] left-[55px]">
            {/* Y-axis values */}
            {yAxisValues.map((value, index) => (
              <div
                key={`y-value-${index}`}
                className="absolute w-[15px] whitespace-nowrap font-['Figtree',Helvetica] font-normal text-black text-[10px]"
                style={{
                  top: `${index === 0 ? 95 : index === 1 ? 70 : index === 2 ? 41 : 3}px`,
                  left: index === 2 ? 0 : "1px",
                }}
              >
                {value}
              </div>
            ))}

            {/* Vertical axis line */}
            <div className="absolute w-px h-[102px] top-[11px] left-[31px] bg-black" />

            {/* Horizontal axis line */}
            <div className="absolute w-[236px] h-px top-[112px] left-[30px] bg-black" />

            {/* Chart bars */}
            {chartData.map((item, index) => (
              <React.Fragment key={`bar-${index}`}>
                <div
                  className="absolute w-[39px] rounded-[5px_5px_0px_0px]"
                  style={{
                    height: `${item.value}px`,
                    top: `${115 - item.value}px`,
                    left: `${52 + index * 73}px`,
                    backgroundColor: item.color,
                  }}
                />
                <div
                  className="absolute font-['Figtree',Helvetica] font-normal text-[#191919] text-[10px] text-center whitespace-nowrap"
                  style={{
                    width: index === 0 ? "24px" : index === 1 ? "66px" : "63px",
                    top: "117px",
                    left: `${index === 0 ? 59 : index === 1 ? 114 : 188}px`,
                  }}
                >
                  {item.type}
                </div>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
