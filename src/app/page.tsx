import React from "react";
import Header from "@/app/Components/Header";
import Image from "next/image";

 function Home() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-4">
        <h1 className="text-[45px] font-bold text-start text-black ml-6">IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <br />
        <p className="text-[20px] w-[571px] text flex mr-3 text-[#A29875;] ml-6">An example of intricate workmanship and detail, elegant necklaces 
          and long and short chains form a part of our desirable collection.
        </p>
        <br />
        <button className="text-white bg-[#A29875;]">Explore Now</button>

        </div> 
        <div className="w-1/4 flex justify-right item-center ml-2 mt-6"> 
        <Image 
        src={"/image/image-2.jpg"}
        alt="hero image"
        width={502}
        height={465}
        
        />
        
        
        </div>

      </div>

    </div>
    
  );
}

export default Home
