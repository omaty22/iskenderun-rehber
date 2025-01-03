import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import TelLocation from '../assets/TelLocation.json'
import Lottie from 'react-lottie'
import DivLeft from '../components/DivLeft'
import DivRight from '../components/DivRight'

function Transport() {
  return (
    <>
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
    <Navbar/>
    {/*------------------- Header-------------------*/}
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden bg-slate-900'>
    <motion.div 
    initial={{opacity: 0,y:100}}
    transition={{duration: 1.5}} 
    whileInView={{opacity: 1,y:0}}
    viewport={{once: true}}
     className='container text-center mx-auto  px-6  text-white'>
        <div className='lg:w-1/2 lg:mx-auto'>
        <Lottie
            options={{
            loop: true,
            autoplay: true,
            animationData: TelLocation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
            }}
        /> 
        </div>
        <h2 className='text-5xl sm:text-6xl md:text-[82] inline-block
        max-w-3xl font-semibold pt-20 lg:pt-4'>İskenderun'da Ulaşım</h2>
    </motion.div>
    </div>
    {/*------------------- iskenderun içi Ulaşım-------------------*/}
    <div className='flex flex-col gap-4'>
        <DivLeft Hat='49 Sahil Evler' Mah='Barbarus mah, Süleymaniye mah, Anı Meydanı, Yeni diş hastanesi, Hilton AVM'/>
        <DivLeft Hat='Çarşı' Mah='Çarşı, Millet Parkı, Pac, Anı Myedanı'/>
        <DivLeft Hat='Primemall' Mah='Primall AVM merkezi,İSTE üniversitesi,Adliye'/>
        <DivLeft Hat='Şekere' Mah='Primemall,Adliye,Mustafa Kemal Mah.'/>
        <DivLeft Hat='Modern Evler' Mah=''/>
        {/*------------------- TAXİ-------------------*/}
        <DivLeft Hat='' Mah='İskendrun Taksi duraklarının konum ve numaralarını görüntülemek için:'/>
    </div>
    {/*------------------- iskenderun dışı-------------------*/}
    <div className='flex flex-col gap-4 mt-4'>
        <DivRight Hat='Antakya' Mah='Pac Araçları,zaman aralıkları için 0 326 225 35 38 arayabilirsiniz yada Sitelerini ziyaret etmek için :'link='https://www.antakyaotogari.com/koy-garajlari.php?firma=hatay-antakya-pac-kooperatifi'/>
        <DivRight Hat='Belen' Mah=  "Kışın Son Minibüs İSK'dan 23:30 de hareket eder Yazın son Minibüs İSK'dan 24:00 de hareket eder,ayrıntılı bilgi için :"link='http://belen.gov.tr/ulasim'/>
        <DivRight Hat='Reyhanlı' Mah=  ",ayrıntılı bilgi için :"link=''/>
        <DivRight Hat='Kırıkhan' Mah=  ",ayrıntılı bilgi için :"link=''/>
        <DivRight Hat='Arsuz' Mah=  "Kalkış Saatleri:22.20, 22.50 ,23.40  günden güne saatlerde farklılık olabilir 0539 649 3063 aramanızı önermekteyiz. ayrıntılı bilgi için :"link='https://www.firmaulasim.com/iskenderun-arsuz-minibus-seferleri/'/>
    </div>
    </motion.div>
    </>
  )
}

export default Transport
