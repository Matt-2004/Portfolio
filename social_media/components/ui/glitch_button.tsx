"use client";

interface IButton {
  text: string;
  icon?: any;
}

const Glitch_button = ({ text, icon }: IButton) => {
  const glitch_style = `py-[1.4rem] px-[6rem] absolute top-2 opacity-90 right-[-6px] z-0  bg-black`;
  return (
    <div className='relative  z-0 shadow-md'>
      <button className='text-lg text-black font-roboto-mono font-semibold border-none  border py-2 px-4 inset-0 relative z-10 transition-all duration-100 ease-in bg-[#FC6736]  hover:bg-[#FFF851]'>
        {text}
        <span className='pl-2'>{icon}</span>
      </button>
      <div className={glitch_style} />
    </div>
  );
};

export default Glitch_button;
