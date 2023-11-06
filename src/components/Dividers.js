import React from "react";

const Divider = ({ h7, h, w, h7tbl, dividerW, dividerH, dividerSection }) => {
  const DividerClass = `
  ${h7 && `h-[700px] hidden mytablet:flex w-12 flex-row `} 
  ${h7tbl && `h-[700px] hidden mysm:flex w-12 flex-row `}
  ${dividerW && `flex w-full h-12 flex-col `}
  ${dividerH && `flex w-12 flex-row `}
  ${dividerSection && `flex w-full h-12 flex-row`}
  `;

  const dividerInside = `${h ? `h-full` : ""} ${w ? `w-full` : ""}`;

  return (
    <div className={`${DividerClass} justify-center items-center `}>
      <div className={`border-2 ${dividerInside}`} />
    </div>
  );
};

export default Divider;
