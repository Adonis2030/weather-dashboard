import React from "react";
import LoadingImg from "../assets/loading.gif";

const Loading = () => (
  <>
    <div className="fixed top-0 left-0 w-full h-full bg-black-semi-transparent flex items-center justify-center">
      <img src={LoadingImg} width={100} height={100} alt="loading gif" />
    </div>
  </>
);

export default Loading;
