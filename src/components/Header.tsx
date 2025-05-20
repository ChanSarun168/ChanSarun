import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <nav className="w-screen h-20 max-h-20 flex justify-center fixed z-index">
        <div className="w-[85%] max-w-[90%] h-full flex justify-between items-center">
          <div>
            <Image
              src={"/CHAN-SARUN.png"}
              alt="logo"
              width={200}
              height={100}
            ></Image>
          </div>
          <div>
            <nav className="flex space-x-8 text-white font-semibold text-[16px]">
              {["Home", "About", "Resume", "Service" ,"Contact"].map((item) => (
                <div key={item} className="group relative">
                  <a
                    href="#"
                    className="text-white group-hover:text-[#00FF5E]"
                  >
                    {item}
                  </a>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF5E] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
