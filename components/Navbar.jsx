import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-[20px] px-[30px]">
      <div>
        <Image
          src="/jeet-sarthi-logo-web.svg"
          width={100}
          height={80}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-end text-[14px] ">Powered By</div>
        <div>
          
          <Image src="/5-1024x303.png" alt="" width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
