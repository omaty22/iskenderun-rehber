import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/404.json";

function ErrorPage() {
  return (
    <div className="bg-slate-700 min-h-screen text-white flex flex-col items-center justify-center trnsition ease-in-out duration-700 gap-20">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={window.innerHeight - 200}
        width={window.innerWidth - 100}
      />
      <a
        className="hover:text-slate-50 hover:bg-black text-3xl px-4 py-4 rounded-2xl"
        href="/Land"
      >
        Go back
      </a>
    </div>
  );
}

export default ErrorPage;
