import React, { useRef, useEffect, } from "react";
import { assets } from "../assets/assets";

function Navbar() {
  const [showmobilemenu, setshowmobilemenu] = React.useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showmobilemenu]);

  const outerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!outerRef.current.contains(e.target)) {
        setshowmobilemenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className=" absolute top-0 left-0 w-full z-10 bg-slate-950">
      <div
        className="container mx-auto flex justify-between items-center
        py-4 px-6 md:px-20 lg:px-32  max-w-screen-2xl"
      >
        <img src={assets.iste} alt="" className="w-28 " />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="/Land" className="cursor-pointer hover:text-gray-400">
            Hakkında
          </a>
          <a href="/People" className="cursor-pointer hover:text-gray-400">
            Kişiler
          </a>
          <a href="/Places" className="cursor-pointer hover:text-gray-400">
            Yerler
          </a>
          <a href="/Transport" className="cursor-pointer hover:text-gray-400">
            Ulaşım
          </a>
          <a href="/Sorular" className="cursor-pointer hover:text-gray-400">
            Sorular
          </a>
        </ul>
        <img
          onClick={() =>
            !showmobilemenu ? setshowmobilemenu(true) : setshowmobilemenu(false)
          }
          ref={outerRef}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/*------------------- mobile menu -------------------*/}
      {
        <div
          className={`${
            showmobilemenu ? `w-full` : `hidden`
          } overflow-hidden flex flex-col DropDownMenu mt-2`} 
        >
          <ul className="flex flex-col gap-4">
            <a
              onClick={() => setshowmobilemenu(false)}
              href="/Land"
              className="px-2 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800"
            >
              Hakkında
            </a>
            <a
              onClick={() => setshowmobilemenu(false)}
              href="/People"
              className="px-5 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800"
            >
              Kişiler
            </a>
            <a
              onClick={() => setshowmobilemenu(false)}
              href="/Places"
              className="px-5 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800"
            >
              Yerler
            </a>
            <a
              onClick={() => setshowmobilemenu(false)}
              href="/Transport"
              className="px-4 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800"
            >
              Ulaşım
            </a>
            <a
              onClick={() => setshowmobilemenu(false)}
              href="/Sorular"
              className="px-4 py-2 rounded-lg inline-block hover:text-white hover:bg-slate-800"
            >
              Sorular
            </a>
          </ul>
        </div>
      }
    </div>
  );
}

export default Navbar;
