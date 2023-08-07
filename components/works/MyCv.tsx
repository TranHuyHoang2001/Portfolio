import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../public/avatarcv.jpg";
// import background from "../../assets/image/background.png";
import ListCVBar from "./ListCVBar";
import ListCVMain from "./ListCVMain";

export interface IMyCvProps {}

const MyCv = (props: IMyCvProps) => {
  return (
    <Box component="section" pt={{ xs: 0, md: 6 }} pb={{ xs: 4, md: 4 }}>
      <Container
        sx={{
          width: "100%",
          minHeight: "100vh",
          borderRadius: "30px",
          padding: "50px 30px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  width: {
                    xs: "60%",
                    md: "90%",
                  },
                  height: {
                    xs: "60%",
                    md: "90%",
                  },
                  overflow: "hidden",
                  borderWidth: "6px",
                  borderStyle: "solid",
                  borderColor: "primary.main",
                  alignSelf: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <Image
                    src={avatar}
                    alt="avatar"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Box>
              <Box
                pt={{ xs: 4, md: 6 }}
                display={{ xs: "block", md: "none" }}
                sx={{ width: "100%" }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                  textAlign="center"
                >
                  Tran Huy Hoang
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    opacity: 0.8,
                  }}
                  textAlign="center"
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <Box pl={{ xs: 0, md: 4 }}>
                <ListCVBar listCV={listBar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Box pt={{ xs: 0, md: 6 }} display={{ xs: "none", md: "block" }}>
                <Typography
                  variant="h1"
                  component="h1"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  Tran Huy Hoang
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    opacity: 0.8,
                  }}
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <Box
                pt={4}
                style={{
                  wordWrap: "break-word",
                }}
              >
                <ListCVMain listCV={listSkill} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MyCv;

const listBar = [
  {
    header: "About me",
    contents: [
      `I'm a passionate developer currently on the journey to become a full stack developer. My focus lies in software and web app development.`,
    ],
  },
  {
    header: "Skills & Qualities",
    contents: [
      {
        title: "Java",
        skills: [
          "Java core: Java Core and Object- Oriented Programming (OOP), Exception Handling, JDBC",
          "Java Swing",
        ],
      },
      {
        title: "Python",
        skills: ["Web: Streamlit, Flask", "Tool: Selenium"],
      },
      {
        title: "C#",
        skills: [
          "C# Console application",
          "Windows Presentation Foundation",
          "WinForms",
        ],
      },
      {
        title: "Front-end",
        skills: [
          "Basic: HTML5, CSS3, JavaScript, Bootstrap, Sass",
          "Library: Reactjs",
          "Build tool: npm, yarn",
        ],
      },
      {
        title: "Back-end",
        skills: ["Nodejs, PHP", "Framework: Expressjs", "ORM: Sequelize"],
      },
      {
        title: "Database",
        skills: ["SQL: SQL Server, MySQL"],
      },
      {
        title: "Server",
        skills: ["Heroku, Render"],
      },
      {
        title: "VCS",
        skills: ["Git, GitHub"],
      },
      {
        title: "Tools",
        skills: [
          "Dev tools: Visual Studio Code, Visual Studio, NetBeans, Eclipse, Pycharm",
          "Postman, DBeaver, GoogleColab, Jupyter Notebook",
        ],
      },
      {
        title: "OS",
        skills: ["Linux (Ubuntu)"],
      },
      {
        title: "Experience",
        skills: ["Message Queue: RabbitMQ"],
      },
      {
        skills: ["CI/CD: Docker, Jenkins, ArgoCD"],
      },
      {
        skills: ["Kubernetes: Minikube"],
      },
      {
        skills: ["Cloud: AWS, Azure, GCP"],
      },
      {
        skills: ["Bash, Powershell"],
      },
    ],
  },
  {
    header: "Reach me at",
    contents: [
      {
        header: "Phone number:",
        content: `0384 822 495`,
      },
      {
        header: "Email:",
        content: `tranhoang280301@gmail.com`,
      },
      {
        header: "Github:",
        content: `https://github.com/TranHuyHoang2001`,
      },
      {
        header: "Linkedin:",
        content: `https://www.linkedin.com/in/tran-hoang-a77763279`,
      },
      {
        header: "Website:",
        content: `https://tranhuyhoang.vercel.app`,
      },
    ],
  },
  {
    header: "Language",
    contents: [`English`, `Vietnamese`],
  },
];

const listSkill = [
  {
    header: "OBJECTIVE",
    contents: [
      {
        content: {
          description: `Seeking a role as a Software Developer/Web Developer to utilize my skills in coding, troubleshooting complex problems, and developing scalable web applications. Able to quickly learn new technologies and frameworks. Looking to join a fast-paced team to build innovative solutions that improve user experience and engagement.`,
        },
      },
    ],
  },
  {
    header: "Education",
    contents: [
      {
        header: "University of Economics - Technology for Industries",
        time: "(09/2019 - 07/2023)",
        content: {
          list: ["Major: Information Technology", "GPA: 3.47/4.0"],
        },
      },
      {
        header: "Self taught: ",
        time: "",
        content: {
          list: ["Coursera, Udemy, YouTube"],
        },
      },
    ],
  },
  {
    header: "Persional Projects",
    contents: [
      {
        header: "Convert Video To MP3",
        time: "08/2023 - Present",
        content: {
          description:
            "System Design: Hands on approach to learning about microservice architectures/distributed systems.",
          list: [
            "Tech stack: Python, Kubernetes, RabbitMQ, MongoDB, MySQL.",
            "Source code: https://github.com/TranHuyHoang2001/video2Mp3",
          ],
        },
      },
      {
        header: "Build CI/CD Pipline",
        time: "08/2023 - Present",
        content: {
          description:
            "Created CI/CD Pipeline using Jenkins and GitOps (ArgoCD) to dockerize code, and deploy the container into a Kubernetes cluster. I set up a Jenkins server on GCP (Google Cloud Platform) VM instances.",
          list: [
            "Tech stack: Python (Flask), Github, Jenkins, Docker, ArgoCD, Kubernetes (Minikube)",
            "Source code: https://github.com/TranHuyHoang2001/kubernetescode",
          ],
        },
      },
      {
        header: "HealthCareHospital",
        time: "02/2023 - 07/2023",
        content: {
          description:
            "HealthCareHospital is project about hospital. it show about specialties, clinics, doctors, handbooks and help patient can book appoinment.",
          list: [
            "Built the client interface, called various APIs to display data related to medical specialties, healthcare facilities, doctors, and medical articles.",
            "Implemented the ability to switch between English and Vietnamese languages.",
            "Designed the appointment booking feature based on available medical examination time slots and confirm the appointments through email.",
            "Implemented CRUD operations for doctors, create medical examination schedules, and manage patients with booked appointments.",
            "Tech stack: Reactjs, Redux, Sass, React-Bootstrap, Axios",
            "Host: Render (static website)",
            "Demo: https://healthcarehospital.onrender.com",
            "Source code: https://github.com/TranHuyHoang2001/FE_HealthCareHospital",
          ],
        },
      },
      {
        header: "HealthCareHospital Server",
        time: "02/2023 - 07/2023",
        content: {
          description: "",
          list: [
            "Built a server following the MVC architecture.",
            "Created API to allow the client to make requests and retrieve data from the MySQL database.",
            "Used the ORM Sequelize to facilitate database access.",
            "Tech stack: Nodejs (Express.js), Sequelize, MySQL",
            "Host: Render (server-web service), AWS RDS (database)",
            "Source code: https://github.com/TranHuyHoang2001/BE_HealthCareHospital",
          ],
        },
      },
      {
        header: "HealthCareHospital ChatBot",
        time: "02/2023 - 07/2023",
        content: {
          description: "",
          list: [
            "Developed a Messenger chatbot to assist clients with additional information about hospitals.",
            "The chatbot should be capable of retrieving customer information and filling it into a spreadsheet when customers make appointments through the chatbot.",
            "Tech stack: Nodejs (Express.js), Google-speadsheet, Facebook web hook",
            "Host: Render (server-web service)",
            "Source code: https://github.com/TranHuyHoang2001/ChatBot_Nodejs",
          ],
        },
      },
      {
        header: "Classify types of flowers",
        time: "04/2023 – 06/2023",
        content: {
          description:
            "I worked on a final project about an AI model based on Convolutional Neural Network (CNN) architecture.",
          list: [
            "Researching artificial neural network models.",
            "Studying supervised machine learning, CNN architecture, computer vision, and various image processing methods.",
            "Collecting the dataset required for the image classification task.",
            "Building an image classification model using CNN architecture on the Google Colab and Jupyter Notebook platforms.",
            "Integrating the Streamlit library to build a web interface for the input and output of the CNN model.",
            "Converting saved models to model.json format with Tensorflow.js and deploy it on a web page.",
            "Tech stack: Python, Numpy, Pandas, Matplotlib, Seaborn, scikitlearn, keras, tensorflow.",
            "Demo: https://tranhuyhoang2001.github.io/PhanLoaiAnhHoa",
            "Source code: https://gist.github.com/TranHuyHoang2001/accee86bf53ae0acfa134ce682f1ed74",
          ],
        },
      },
      {
        header: "VietNamNews",
        time: "04/2023 – 05/2023",
        content: {
          description: "",
          list: [
            "Implemented fetching of article data from the database to display on the homepage, articles categorized by topics, and detailed article pages.",
            "Developed the feature to search for articles based on their titles and the feature to comment on articles.",
            "Implemented CRUD operations for articles and article topics, edit the content of articles, attach files, approve and delete comments associated with articles.",
            "Integrated Google OAuth for user login.",
            "Tech stack: HTML, CSS, Javascript, PHP, MySQL",
            "Host: 000webhost",
            "Demo: https://vietnamnewsbyphp.000webhostapp.com",
            "Source code: https://github.com/TranHuyHoang2001/VietNamNews",
          ],
        },
      },
      {
        header: "Terris Game clone",
        time: "09/2022 – 11/2022",
        content: {
          description:
            "I worked a term-end project in the subject of C# using WPF to build a game app.",
          list: [
            "Designed the system architecture for the game.",
            "Built the characteristics rotate of seven different types of blocks use two-dimensional array.",
            "Source code: https://github.com/TranHuyHoang2001/GameXepHinh",
          ],
        },
      },
      {
        header: "Shop app",
        time: "07/2022 – 09/2022",
        content: {
          description:
            "I worked a term-end project in the subject of Java to build a shopp app.",
          list: [
            "Designed interface with Java Swing.",
            "MySQL to storage database.",
            "Manage CRUD and search items.",
            "Calculate the total order amount.",
            "Print the bill.",
            "Source code: https://github.com/TranHuyHoang2001/Pet_Project_Shop_Electronic",
          ],
        },
      },
    ],
  },
  {
    header: "CERTIFICATIONS",
    contents: [
      {
        content: {
          description: "",
          list: [
            {
              title: "Microsoft Certified: Azure AI Fundamentals",
              link: "https://www.credly.com/badges/a874b596-6ba3-42c2-b52a-4dd88e88fe4f/linked_in_profile",
            },
            {
              title: "Microsoft Certified: Azure Fundamentals",
              link: "https://www.credly.com/badges/8b9a6910-5124-498f-aa9d-c1f83928a643/public_url",
            },
            {
              title: "Microsoft Certified: Azure Data Fundamentals",
              link: "https://www.credly.com/badges/8bb35a94-ea9c-47c4-a03d-2b3a56f4338e/public_url",
            },
            {
              title:
                "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
              link: "https://www.credly.com/badges/79e2bc47-5315-4baa-bd95-1f1290957c13/public_url",
            },
            {
              title: "Google IT Automation Certificate",
              link: "https://www.credly.com/badges/de2c9b9a-807e-4eb9-95db-ab450d4bb05f/linked_in_profile",
            },
            {
              title: "Problem Solving (Basic)",
              link: "https://www.hackerrank.com/certificates/b6cada7a9503",
            },
          ],
        },
      },
    ],
  },
  // {
  //   header: "HONORS & AWARDS",
  //   contents: [
  //     {
  //       content: {
  //         list: [
  //           "",
  //           "",
  //           "",
  //           "",
  //           "",
  //           "",
  //         ],
  //       },
  //     },
  //   ],
  // },
  {
    header: "ACTIVITIES",
    contents: [
      {
        header:
          "The team leader of a group of volunteer students at UNETI University in Vietnam",
        time: "Role:  Leader  (09/2019 - 10/2021)",
        content: {
          description:
            "Engaging in volunteer activities, contributing to the community alongside many other young students, thereby enhancing teamwork, communication, and presentation skills.",
        },
      },
    ],
  },
];
