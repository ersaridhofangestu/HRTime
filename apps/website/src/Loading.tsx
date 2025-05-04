import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="scale-[200%] md:scale-[500%]">
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
