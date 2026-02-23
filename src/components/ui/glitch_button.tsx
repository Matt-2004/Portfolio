"use client";

interface IButton {
  text: string;
  icon?: any;
}

const Glitch_button = ({ text, icon }: IButton) => {
  return (
    <div className='relative z-0 '>
      <button className=' text-black shadow-md items-center flex font-roboto-mono text-lg px-4 py-2  border-none  border  inset-0 relative z-10 transition-all duration-100 ease-in bg-[#FC6736]  hover:bg-[#FFF851]'>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Glitch_button;
