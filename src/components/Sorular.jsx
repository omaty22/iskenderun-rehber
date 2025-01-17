import React from 'react'
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import TelLocation from "../assets/quesiton.json";
import Lottie from "react-lottie";

function Sorular() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full bg-cover bg-center"
        id="Sorular"
      >
        <Navbar />
        <div
          className="min-h-screen bg-cover bg-center flex items-center
    w-full overflow-hidden mb-10 bg-slate-900"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container text-center mx-auto mb-4 px-6  text-white"
          >
            <div className="lg:w-1/3 lg:mx-auto">
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
        max-w-3xl font-semibold"
            >
                Sıkça Sorulan Sorular
            </h2>
          </motion.div>
        </div>
        <Accordion title='İME Programı nedir ?' answer='İşletmede Mesleki Eğtim(İME)'/>
        <Accordion title='İME Programın Şartları Nelerdir  ?' answer='Alttan ders bulunmaması(bitirme projesi ve staj hariç)/not ortalamasının 2.75 ve üzeri olması'/>
        <Accordion title='İME Programına nasıl başvurulur ?' answer='Şartlaı taşıyan öğrenciler kendisi İME yapmak istedikleri yeri bulmasından sonra üniversitemizin yayınladığı staj formunu doldurup yapacakları yerin ıslak imzası bulunacak şekilde İME Bölüm Sorumlusuna vermeleri gerek,üniverssitemiz yeri değerlendikten sonra onayda bulunursa öğrencinin son sınıf ikinci dönemi bulduğu yerde çalışarak gerçekleştirir,Ancak derslerinden sadece bitirme projesini almak zorunda '/>
        <Accordion title='İME Aldım Dönem Ortalamam Nasıl Hesaplanır ?' answer="Dönem bitmesinden önce öğrenci görüşmeye girer görüşme değerlenmesinden sonra dönem ortalamasının %50'i görüşmeye göre,diğer %50'i ise İME yapmış olduğu yerin değerlendirmesine göre alınır"/>
        <Accordion title='Erasmus Programı nedir ?' answer='İşletmede Mesleki Eğtim(İME)'/>
        <Accordion title='Erasmus Programın Şartları Nelerdir ?' answer='Dil yeterlilik sınavında 60 ve üzeri puan alınması / 1.akademeler için ortalaması en az 2.5 ancak 2. ve 3. akademeler için en az 3.00 olması / alttan ders bulunması sıkıntı yaratmaz' />
        <Accordion title="Erasmus'a Başvuru Nasıl Yapılır ?" answer='Dil yeterlilik sınavından geçtikten sonra üniversitenin yayınladığı bir tarihte başvurular açılır,E-Devlette form doldurarak en fazla iki yabancı üniversiteye başvurulabilir,başvurusu kabullenlen öğrenciler kabul görmüş olduğu üniversitenin şartlarına göre gitmek isteyip istemediğini seçer' />
        <Accordion title='Dil Yeterlilik Sınavına Başvuru Nasıl Yapılır ?' answer='a' />
        <Accordion title='' answer='a' />
    </motion.div> 
    </>
  )
}

export default Sorular
