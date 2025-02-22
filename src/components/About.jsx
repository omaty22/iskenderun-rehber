import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const newTab = (url) => {
  window.open(url, "_blank").focus();
};

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
      <span className="underline underline-offset-4 decoration-1 under font-bold text-blue-800">
          İSKENDERUN
        </span>{" "}
        عن مدينة
      </h1>
      <p className="text-gray-500 max-w-80 text-center">
      إسكندرون هي مدينة تقع في منطقة هاتاي في تركيا، تشتهر بمناظرها الساحلية الرائعة وسكانها المحليين الودودين.
      </p>
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-20">
        <img
          src={assets.city}
          className="min-w-96 min-h-72 mt-8 w-full lg:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center lg:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 lg::gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
              في هاتاي
              </p>
              <p>المنطقة الثانية من حيث عدد السكان</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
              في تركيا
              </p>
              <p>لديها واحد من أكبر الموانئ</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
              مساحة المنطقة
              </p>
              <p>247 km²</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
              كود المنطقة
              </p>
              <p>31500</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
          إسكندرونة (باليونانية: Αεξανδρέττα، ألكساندريتا، ما يعادلها بالتركية)
            "الإسكندرية الصغيرة"؛ العربية: لواء اسكندرون، لو اسكندرون، معناها
            "لواء إسكندرون"[2]) هي ثاني أكبر مدينة في هاتاي من حيث عدد السكان.
            المنطقة.[9] يبلغ عدد سكانها 248,335 نسمة.[10] المنطقة هي الأكبر في تركيا
            ويوجد بها أحد الموانئ ولذلك فهي مهمة في التجارة البحرية.
            هو في موقف.
          </p>
          <button
            onClick={() =>
              newTab("https://tr.wikipedia.org/wiki/%C4%B0skenderun")
            }
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800"
          >
            لقراءة المزيد
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
