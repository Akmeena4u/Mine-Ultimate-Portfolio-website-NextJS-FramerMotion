"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from 'next/link';



const Homepage = () => {



  useEffect(() => {
    const handleDownloadResume = () => {
      window.open('/AmitKumarMeena_WebDeveloper_Resume.pdf');
    };
    // Attach the function to the global scope so it can be accessed from the button click
    window.handleDownloadResume = handleDownloadResume;
  }, []);


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/3 relative">
          <Image src="/profile-pic4.png" alt="" fill className="object-contain"  />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-2/3 lg:h-full lg:w-2/3 flex flex-col  items-center justify-center gap-2">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            {/* Crafting Digital Experiences, Designing Tomorrow. */}
            Turning Vision Into Reality With Code And Design. 
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
          {/* BUTTONS */}
 
          <div className="w-full flex gap-4">
          <button
      className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
      onClick={() => window.handleDownloadResume()}
    >
      Resume
    </button>

    <Link href="/contact" passHref>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
