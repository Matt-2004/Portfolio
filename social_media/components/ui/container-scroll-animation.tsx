"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className='h-[60rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20'
      ref={containerRef}
    >
      <div
        className='py-10 md:py-40 w-full relative'
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        <Navigator />
      </div>
    </div>
  );
};

const reactIcon = require("../../public/react-svgrepo-com.svg");
const tailwindIcon = require("../../public/tailwind-css.svg");
const typescriptIcon = require("../../public/typescript-icon-svgrepo-com.svg");
const golangIcon = require("../../public/go-gopher-svgrepo-com.svg");
const mongoDBIcon = require("../../public/mongodb-svgrepo-com.svg");

const iconList = [
  {
    icon: reactIcon,
  },
  {
    icon: tailwindIcon,
  },
  {
    icon: typescriptIcon,
  },
  {
    icon: mongoDBIcon,
  },
  {
    icon: golangIcon,
  },
];

export const Navigator = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full flex justify-around'>
        <div className='flex'>
          {iconList.map((icons, i) => (
            <div
              key={i}
              className='py-2 px-2 rounded-3xl border flex flex-col jsutify-center items-center '
            >
              <Image src={icons.icon} alt='icon' className='h-8 w-8 '></Image>
            </div>
          ))}
        </div>
        <Link className=' ' legacyBehavior href='https://masmax.vercel.app/'>
          <a className='text-purple-600'>
            Check live sites{" "}
            <span>{<FontAwesomeIcon icon={faArrowRight} />}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className='div max-w-5xl mx-auto text-center'
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className='max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 mb-10 bg-[#222222] rounded-[30px] shadow-2xl'
    >
      <div className=' h-full w-full  rounded-2xl  bg-zinc-800 md:rounded-2xl '>
        {children}
      </div>
    </motion.div>
  );
};
