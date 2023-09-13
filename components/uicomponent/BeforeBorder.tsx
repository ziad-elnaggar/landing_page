import React from "react";

const BeforeBorder = ({className} : {className? : string}) => {
  return (
  
      <div className={`h-[0.625em] w-[6.25em] bg-blue-500 ${className}`}></div>
  );
};

export default BeforeBorder;
