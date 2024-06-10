"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "AIPodcaster",
    desc: "Developed AIPodcaster, an AI SaaS platform for creating, discovering, and enjoying podcasts with advanced features like AI-generated text-to-audio conversion with Multi-voice functionality and AI-generated thumbnails.",

    img: "/AI-podcast.jpg",
    link: "https://ai-podcaster-a4z9oiieb-aks-projects-e280839c.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "SocialMedia App",
    desc: "Architected and implemented a full-stack social media application with secure user authentication, profile management, follower interactions, and CRUD operations on posts.Integrated real-time chat using socket.io on the React.js client side.",
    img: "/socialapp.jpg",
    link: "https://github.com/Akmeena4u/FullStack-SocialMediaApp",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React Admin Dashboard",
    desc: "Desingned a beautiful and interactive admin dashboard using React and CSS. The dashboard will include several components such as reusable boxes containing different charts, a list page with a sortable and searchable table, pagination, and a modal for adding new items",
    img: "/reactadmindashboard.jpg",
    link: "https://main--admindashboardfor4u.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Online Learning Database",
    desc: "Developed an Online Learning Database to efficiently manage course content, student enrollments, and progress tracking. Implemented robust querying capabilities to enhance data retrieval and reporting.",
    img: "/OnlineLearningPlatformER.webp",
    link: "https://drive.google.com/file/d/1oRs_EAr0NcnnsXpHvtJo_jjCG-UNaTe8/view",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Music-Academy",
    desc: "Developed a music learning website using Next.js, a full-stack framework for frontend and backend. Utilized the Aceternity UI library for enhanced UI features, demonstrating adaptability and problem-solving skills with open-source projects.",
    img: "/musicapp1.avif",
    link: "https://main--musickaschool.netlify.app/",

  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Movie App",
    desc: "Developed a responsive movie app using HTML, CSS, and JavaScript, featuring dynamic content sliders, interactive menus, and a dark mode toggle for enhanced user experience and functionality.",
    img: "/movieapp.png",
    link: "https://akmeena4u.github.io/BasicMovieApp/",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Random Password Genrator",
    desc: "Build a password generator web app with HTML, CSS, and JavaScript, allowing users to control password length, enhance strength, and easily copy generated passwords for immediate use.",
    img: "/rpassword.jpg",
    link: "https://akmeena4u.github.io/Random-PasswordGenrator/",
  },
 
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill  />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-white-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-25 items-center justify-center text-center">
        <h1 className="text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              Full-Stack Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
