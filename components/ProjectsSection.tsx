import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "HealthCareHospital",
    description:
      "HealthCareHospital is a web application that enables patients to easily schedule medical appointments with doctors.",
    image: "/Project1.png",
    github: "https://github.com/TranHuyHoang2001/FE_HealthCareHospital",
    link: "https://healthcarehospital.onrender.com",
  },
  {
    name: "VietNamNews",
    description:
      "VietNamNews is a web application that provides news on various fields and topics in Vietnam.",
    image: "/Project2.png",
    github: "https://github.com/TranHuyHoang2001/VietNamNews",
    link: "https://vietnamnewsbyphp.000webhostapp.com/",
  },
  {
    name: "Classify types of flowers",
    description:
      "The AI model is built using the CNN architecture to classify 5 types of flowers: rose, tulip, white daisy, lotus, and sunflower.",
    image: "/Project3.png",
    github:
      "https://gist.github.com/TranHuyHoang2001/accee86bf53ae0acfa134ce682f1ed74",
    link: "https://tranhuyhoang2001.github.io/PhanLoaiAnhHoa/",
  },
  {
    name: "Manage items",
    description:
      "Use java swing to build app manage items about electronic CRUD, search items and print, export bill.",
    image: "/Project4.png",
    github: "https://github.com/TranHuyHoang2001/Pet_Project_Shop_Electronic",
    link: "https://github.com/TranHuyHoang2001/Pet_Project_Shop_Electronic",
  },
  {
    name: "Terris Game",
    description: "Use WPF C# to build app game terris.",
    image: "/Project5.png",
    github: "https://github.com/TranHuyHoang2001/GameXepHinh",
    link: "https://github.com/TranHuyHoang2001/GameXepHinh",
  },
  {
    name: "Build CI/CD Pipeline",
    description:
      "Created CI/CD Pipeline using Jenkins and GitOps (ArgoCD) to dockerize code, and deploy the container into a Kubernetes cluster.",
    image: "/Project6.png",
    github: "https://github.com/TranHuyHoang2001/kubernetescode",
    link: "https://github.com/TranHuyHoang2001/kubernetescode",
  },
  {
    name: "Convert Video To MP3",
    description:
      "System Design: Hands on approach to learning about microservice architectures/distributed systems.",
    image: "/Project7.png",
    github: "https://github.com/TranHuyHoang2001/video2Mp3",
    link: "https://github.com/TranHuyHoang2001/video2Mp3",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
