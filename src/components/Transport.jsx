import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import TelLocation from "../assets/TelLocation.json";
import Lottie from "react-lottie";
import DivLeft from "../components/DivLeft";
import DivRight from "../components/DivRight";


function Transport() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mb-8 mt-20 md:mt-32 lg:mt-20"
      >
        <Navbar />
        {/*------------------- Header-------------------*/}
        <div
          className="min-h-screen mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container text-center mx-auto  px-6  text-white"
          >
            <div className="lg:w-1/2 lg:mx-auto">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: TelLocation,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pt-20 lg:pt-4"
            >
              المواصلات في اسكندرون
            </h2>
          </motion.div>
        </div>
        {/*------------------- iskenderun içi Ulaşım-------------------*/}
        <div className="flex flex-col gap-4">
          <DivLeft
            Hat="49 Sahil Evler"
            Mah="Barbarus mah, Süleymaniye mah, Anı Meydanı, Yeni diş hastanesi, Hilton AVM"
          />
          <DivLeft Hat="Çarşı" Mah="Çarşı, Millet Parkı, Pac, Anı Myedanı" />
          <DivLeft
            Hat="Primemall"
            Mah="Primall AVM merkezi,İSTE üniversitesi,Adliye"
          />
          <DivLeft Hat="Şekere" Mah="Primemall,Adliye,Mustafa Kemal Mah." />
          <DivLeft Hat="Modern Evler" Mah="Modern evler,Çarşı,Pac,imam hatip lieleri" />
          {/*------------------- TAXİ-------------------*/}
          <DivLeft
            Hat=""
            Mah="لرؤية موقع وأرقام محطات تكاسي إسكندرون:"
          />
        </div>
        {/*------------------- iskenderun dışı-------------------*/}
        <div className="flex flex-col gap-4 mt-4">
          <DivRight
            Hat="Antakya"
            Mah="بالنسبة لعربات الباج،تمر بفترات زمنية معينة ما يقارب كل ١٥ دقيقة 
يمكنك الاتصال برقم 0 326 225 35 38 او زيارة موقعهم الإلكتروني : "
            link="https://www.antakyaotogari.com/koy-garajlari.php?firma=hatay-antakya-pac-kooperatifi"
          />
          <DivRight
            Hat="Belen"
            Mah="ي فصل الشتاء، يغادر آخر باص من اسكندرون في الساعة١١:٣٠ . وفي الصيف يغادر اخر باص في الساعة ١٢:٠٠، للحصول على معلومات اكتر:"
            link="http://belen.gov.tr/ulasim"
          />
          <DivRight Hat="Bekbele" Mah="يستغرق الطريق ما يقارب العشرين دقيقة ،بشكل عام الباصات متاحة حتى الساعة التاسعة 
للحصول على معلومات مفصلة:" link="https://moovitapp.com/hatay-6128/poi/bekbele/%C4%B0skenderun/itinerary/tr?customerId=4908&ref=1&af_sub8=%2Findex%2Ftr%2Ftoplu_ta%25C5%259F%25C4%25B1ma-%25C4%25B0skenderun-Hatay-site_153978340-6128&af_sub9=Search%20bar%20button&poiType=site&fll=36.537621_36.147988&tll=36.590227_36.171035&metroSeoName=Hatay" />
          <DivRight
            Hat="Arsuz"
            Mah="اخر ساعات مغادرة الباص ما بين ال١٠:٥٠ لال١١:٤٠ قد تختلف الساعات من يوم لاخر رقم الاتصال :05396493063 للحصول على معلومات اكتر :"
            link="https://www.firmaulasim.com/iskenderun-arsuz-minibus-seferleri/"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Transport;
