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
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-bold text-blue-800">
          İskenderun
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center">
        İskenderun is a city on the Hatay reigon of turkey known for its
        spectacular seaside view and warm hearted locals
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.city}
          className="min-w-96 min-h-72 mt-8 w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
                Hatay'ın
              </p>
              <p>nüfüs bakımından 2. ilçesi</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
                Türkiye'nin
              </p>
              <p>en büyük limanlarından birine sahip</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
                Yüzölçümü
              </p>
              <p>247 km²</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mb-2">
                Alan kodu
              </p>
              <p>326[5]</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            İskenderun (Yunanca: Αλεξανδρέττα, Aleksandretta, Türkçe karşılığı
            "Küçük İskenderiye"; Arapça: لواء اسكندرون, Lue İskenderun, anlamı
            "İskenderun Tugayı"[2]), Hatay'ın nüfus bakımından 2. büyük
            ilçesidir.[9] Nüfusu 248.335 kişidir.[10] İlçe Türkiye'nin en büyük
            limanlarından birine sahip olup bu bakımdan deniz ticaretinde önemli
            bir konumdadır.
          </p>
          <button
            onClick={() =>
              newTab("https://tr.wikipedia.org/wiki/%C4%B0skenderun")
            }
            className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
