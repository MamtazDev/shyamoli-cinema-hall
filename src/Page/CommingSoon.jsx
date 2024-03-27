import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-[#0C1B04] h-screen">
        <div className="container mx-auto ">
          <div className="text-white text-5xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Comming Soon.....
            <Link
              className="block text-base uppercase border border-gray-500 py-4 mt-5"
              to={"/"}>
              Go Home
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CommingSoon;
