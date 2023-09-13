import React from "react";
import BeforeBorder from "../uicomponent/BeforeBorder";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = ({ latestNews }: { latestNews: Record<string, any> }) => {
  return (
    <div className="bg-black 3xl:text-[16px] 2xl:text-[14px] xl:text-[13px] flex items-center justify-center">
      <div className="w-[80%]">
        {" "}
        <div className="my-[3.4em]">
          <BeforeBorder />
          <p className="text-white text-[3.25em]">{latestNews[0]}</p>
        </div>
        {latestNews.slice(1).map((item: Record<any, string>, index: number) => (
          <div key={index}>
            <LatestNewsCard items={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
