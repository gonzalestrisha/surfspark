import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";

export const GroupWrapperByAnima = (): JSX.Element => {
  const navItems = [
    {
      id: 1,
      icon: "/home.png",
      alt: "Home",
      active: true,
      className: "w-[35px] h-7",
    },
    {
      id: 2,
      icon: "/create.png",
      alt: "Create",
      active: false,
      className: "w-8 h-8",
    },
    {
      id: 3,
      icon: "/user-groups.png",
      alt: "User groups",
      active: false,
      className: "w-9 h-[29px]",
    },
  ];

  return (
    <Card className="h-[720px] w-[83px] shadow-[4px_4px_4px_#00000040] flex flex-col items-center">
      {/* Logo */}
      <div className="relative w-[33px] h-[62px] mt-[17px]">
        <div className="absolute top-0 left-0 [-webkit-text-stroke:1px_#ffffff] [font-family:'Kite_One',Helvetica] font-normal text-white text-[36.3px] tracking-[0] leading-[normal]">
          S
        </div>
        <div className="absolute top-2.5 left-[11px] [-webkit-text-stroke:1px_#dc6124] [font-family:'Kite_One',Helvetica] font-normal text-[#dc6124] text-[36.3px] tracking-[0] leading-[normal]">
          S
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center gap-5 mt-12">
        {/* Home Icon with Background */}
        <div className="w-[39px] h-[39px] bg-[#137471] rounded-[13px] shadow-[inset_0px_4px_4px_#00000040] flex items-center justify-center">
          <img className="w-[35px] h-7" alt="Home" src="/home.png" />
        </div>

        {/* Create Icon */}
        <img className="w-8 h-8" alt="Create" src="/create.png" />

        {/* User Groups Icon */}
        <img
          className="w-9 h-[29px] mt-9"
          alt="User groups"
          src="/user-groups.png"
        />

        {/* Message Icon with Notification */}
        <div className="relative w-7 h-7 mt-16 bg-[url(/speech-bubble.png)] bg-[100%_100%]">
          <Badge className="absolute w-1.5 h-1.5 top-[19px] left-[19px] p-0 bg-[#e71b1b] rounded-[3px]" />
        </div>
      </div>
    </Card>
  );
};
