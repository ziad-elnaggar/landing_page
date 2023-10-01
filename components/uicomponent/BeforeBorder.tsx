import React from "react";

const BeforeBorder = ({ className }: { className?: string }) => {
  return (
    <div className={`h-[0.625rem] w-[6.25rem] mb-6 bg-blue-500 ${className}`}></div>
  );
};

export default BeforeBorder;
