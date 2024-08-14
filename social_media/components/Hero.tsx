"use client";
import { useProjectRefContext } from "@/lib/dryAvoider";

const Hero = () => {
  const projectRef = useProjectRefContext();
  const text =
    "I build exceptional and accessible digital experiences for the web.";
  const name = "Wai Yan Aung";
  return (
    <section className='w-full h-full '>
      <div className=' grid grid-rows-2  '>
        <VideoComponent />
        <div className='pl-12'>
          <div className='font-roboto-mono'>Hi,my name is</div>
          <div className='text-5xl font-bold font-sans mb-4'>{name}.</div>
          <div className='font-roboto-mono font-medium text-lg'>{text}</div>
        </div>
      </div>
    </section>
  );
};

export const VideoComponent = () => {
  return (
    <div className='w-full pl-12 overflow-hidden'>
      <video
        width={320}
        height={240}
        preload='none'
        src='/video/Computer.mp4'
        typeof='video/mp4'
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
