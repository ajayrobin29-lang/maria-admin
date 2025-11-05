"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero({title}) {
  const images = [
    // "/kitchen-16_9.jpg",
    "/livingroom-tv-16_9.png",
    // "/wallpanel-16_9.png",
  ];

  const [isMobile, setIsMobile] = useState(true);
  // Auto-slide every 5 seconds
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 600px)").matches)
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Carousel container */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Images */}
        {/* {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          > */}
            <img
              // src={src}
              src={`https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761220154/hero_gqdsnr.avif`}
              alt={`Slide ${ 1}`}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
          {/* </div> */}
        {/* ))} */}

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            
          {title?
          <>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          </>:
          <>

          <h1 className="text-4xl text-white font-extrabold sm:text-5xl lg:text-6xl"> Best in Interior <br /> <span className="text-white"> Designs.</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Design That Speaks Beautifully.
          </p>

                    <div className="mt-8 flex flex-col items-center gap-4 justify-center md:space-x-4 md:flex-row">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-500 text-neutral-900 uppercase font-medium rounded hover:bg-primary-400 transition"
              >
              Enquire Now
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-white text-white uppercase font-medium rounded hover:bg-white hover:text-secondary-600 transition"
              >
              Learn More
            </Link>
          </div>
          
          </>}


        </div>

        {/* Carousel dots */}
        {/* <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded ${
                current === index ? "bg-white" : "bg-neutral-400"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
