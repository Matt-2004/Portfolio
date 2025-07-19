import Image from "next/image";
import { About } from "./Hero";
import { useState } from "react";
import emailjs from "emailjs-com";

const Projects = () => {
  const ProjectsInfo = {
    MASMAX: {
      image: "/Screenshot 2024-07-31 100757.png",
      url: "https://masmax.vercel.app/",
      overview:
        "MASMAX aims to provide a reliable and user-friendly experience for moviegoers, combining the convenience of online ticket purchasing with the assurance of top-tier security measures.",
      techStack: [
        "React",
        "Vite",
        "Tailwind_CSS",
        "Typescript",
        "Golang",
        "MongoDB",
      ],
    },
    PORTFOLIO: {},
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:mt-4 flex flex-col gap-4">
        <About />
        <Skills />

        <PJCards
          image={ProjectsInfo.MASMAX.image}
          title="MASMAX"
          width={500}
          height={400}
          url={ProjectsInfo.MASMAX.url}
          techStack={ProjectsInfo.MASMAX.techStack}
          overview={ProjectsInfo.MASMAX.overview}
        />
        <Contact />
      </div>
    </div>
  );
};

interface IPJCards {
  image: any;
  title: string;
  overview?: string;
  techStack: string[];
  url: string;
  width: number;
  height: number;
}
export const Title = ({ text }: { text: string }) => {
  return (
    <section className="flex items-center">
      <span className="text-xl font-bold text-white">{text}</span>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-full flex justify-center text-white">
      <div className="md:w-[80%] w-[98%] sm:w-[90%] md:px-10 md:py-10 py-4 px-5  bg-gradient-to-r rounded-xl from-[#f12711] to-[#f5af19]">
        <div className="  relative flex flex-col items-center justify-center">
          <Title text="SKILLS" />
          <div className="w-full flex justify-center flex-col items-center mt-4">
            <div className="h-2 w-2 rounded-full bg-white " />
            <div className="w-[3px] h-10 bg-white" />
            <div className="w-64 h-[3px]  bg-white" />
            <div className="w-64 flex justify-between">
              <div className="w-[3px] h-32 relative bg-teal-500 z-10">
                <h3 className=" font-semibold text-white absolute -left-10 top-10 z-20 bg-teal-500 px-1">
                  Frontend
                </h3>
              </div>
              <div className="w-[3px] h-32 relative bg-blue-500 z-10">
                <h3 className="  text-white font-semibold  absolute -left-9 z-20 px-1 bg-blue-500 top-10">
                  Backend
                </h3>
              </div>
              <div className="w-[3px] h-32 relative bg-green-500 z-10">
                <h3 className=" font-semibold text-white absolute bg-green-500 px-1 top-10 z-20 -left-10">
                  Database
                </h3>
              </div>
            </div>
            <div className="w-[16.52rem] flex justify-between">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="w-full pl-4 flex justify-center ml-2">
            <div className="w-[21rem] flex justify-between">
              <div className="pr-3 flex font-semibold flex-col gap-1 pt-2">
                <div>React</div>
                <div>NextJS</div>
                <div>Typescript</div>
              </div>
              <div className="pr-3 flex font-semibold  flex-col gap-1 pt-2">
                <div>NodeJS</div>
                <div>ExpressJS</div>
                <div>Golang</div>
                <div>Firebase</div>
              </div>
              <div className="flex font-semibold  flex-col gap-1 pt-2">
                <div>MongoDB</div>
                <div>PostgreSQl</div>
                <div>MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PJCards = ({
  image,
  title,
  overview,
  techStack,
  url,
  width,
  height,
}: IPJCards) => {
  return (
    <section id="projects" className="w-full flex justify-center">
      <div className="space-y-4 flex flex-col justify-center items-center md:w-[80%] w-[98%] sm:w-[90%] md:px-10 md:py-10 py-4 px-5  z-30 relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2C5364] via-[#203A43] to-[#0F2027] shadow-md">
        <Title text="PROJECTS" />
        <div className="w-[90%] sm:w-[60%] space-y-3 flex flex-col justify-center items-center">
          <Image
            width={width}
            height={height}
            src={image}
            alt="masmax"
            className="w-[100%] p-1 border shadow-lg z-10  rounded-md"
          />
          <span className="flex items-center mt-3">
            <a href={url} className="text-xl underline text-white  font-medium">
              {title}
            </a>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#0070f0"
              className="inline-block h-6 w-6 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <div className=" text-gray-300 text-sm leading-normal">
            {overview}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {techStack?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="py-1 px-2 text-xs font-medium text-teal-300 rounded-full bg-teal-400/10 "
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8coqbfg", // Service ID from EmailJS
        "template_k8jgxkn", // Template ID from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "45MYtPsZGabJ8_aSl" // User ID from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          // Reset form fields after successful submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="w-full flex justify-center">
      <div className="space-y-4 flex flex-col justify-center items-center md:w-[80%] w-[98%] sm:w-[90%] md:px-10 md:py-10 py-4 px-5  z-30 relative overflow-hidden rounded-xl bg-gradient-to-r from-[#7F00FF]  to-[#E100FF] shadow-md">
        <Title text="CONTACT" />
        <div className="w-[90%] sm:w-[65%] space-y-3 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="font-medium w-full space-y-4 text-white"
          >
            <div className="flex justify-between">
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-[80%]  text-black font-normal font-sans outline-none h-8 pl-2"
              />
            </div>
            <div className="flex justify-between backdrop:">
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[80%] outline-none font-normal font-sans  text-black h-8 pl-2"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="message">Message: </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-[80%] outline-none font-normal font-sans text-black h-20 pl-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 rounded-full mt-2 py-2 bg-purple-900 text-purple-200"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Projects;
