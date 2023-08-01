import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "Reactjs" },
  { skill: "Nodejs (Express.js)" },
  { skill: "C#" },
  { skill: "PHP" },
  { skill: "MySQL" },
  { skill: "SQL Server" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Docker" },
  { skill: "AWS" },
  { skill: "Azure" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web developer 
              based in Hanoi, VietNam.
              Possessing <span className="font-bold">{"discipline"}</span> and <span className="font-bold">{"patience"}</span>, I am driven to excel in my field.
            </p>
            <br />
            <p>
              I graduated from University of Economics and Industries, VietNam in 2023
              with degree of engineer in Information Technology.
            </p>
            <br />
            <p>
              I constantly strive to improve and enhance my skills on the path to becoming a full-stack developer. 💻
            </p>
            <br />
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              Contact with me 🙂
            </h2>
            <p>
              <span className="font-bold text-teal-500">Email:</span>{"  "}
              <a href="mailto:your.email@example.com">tranhoang280301@gmail.com</a>
            </p>
            <br />
            <div className="flex flex-row align-bottom space-x-4">
              <Link href={"https://github.com/TranHuyHoang2001"} target="_blank">
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/tran-hoang-a77763279/"} target="_blank">
                <BsLinkedin
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
