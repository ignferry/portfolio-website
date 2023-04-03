import Head from 'next/head'
import { Inter } from 'next/font/google'
import Project from '@/components/Project'
import Experience from '@/components/Experience'
import ProjectFilterBtn from '@/components/ProjectFilterBtn'
import { useState } from 'react'
import HeroImage from '@/components/HeroImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function onFilterButtonClick(keyword) {
    if (keyword == filterKeyword) setFilterKeyword("");
    else setFilterKeyword(keyword);
  }

  let [filterKeyword, setFilterKeyword] = useState("");

  let filterKeywords = ["HTML", "CSS", "Javascript", "Typescript", "PHP", "Java", "Kotlin", "MySQL", "NodeJS", "React", "Docker"]

  let projects = [
    {
      title: "Bluesound",
      techs: ["HTML", "CSS", "Java", "PHP", "Javascript", "MySQL", "NodeJS", "React", "Docker"],
      desc: "A web based music player and subscription management which consists of four major components: normal user client and API (PHP), premium user client (React), REST API (NodeJS), and SOAP API (Java). This is a Web Based Development coursework project done by 3 people in which I am mainly in charge of the frontend and backend in PHP and SOAP API in Java.",
      imgsrc: "/project-img/bluesound.png",
      codeurl: "https://gitlab.informatika.org/if3110-2022-k02-01-30",
      main: true
    },
    {
      title: "Aether Wars",
      techs: ["Java", "JavaFX"],
      desc: "A Minecraft themed turn based card game like Yu-Gi-Oh!. This is a Object Oriented Programming coursework project done by 5 people in which I am in charge of creating the GUI with JavaFX and implementing the Publisher-Subscriber design pattern for the game.",
      imgsrc: "/project-img/aetherwars.png",
      codeurl: "https://github.com/ignferry/AetherWars",
      main: true
    },
    {
      title: "Note Taking Website",
      techs: ["HTML", "CSS", "PHP", "MySQL", "Docker"],
      desc: "A note taking website with authentication and CRUD operations for notes. In this project, I designed and created my own routing system and ORM in plain PHP.",
      imgsrc: "/project-img/notetakingapp.png",
      codeurl: "https://github.com/ignferry/Note-Taking-App-PHP",
      main: true
    },
    {
      title: "Portfolio Website",
      techs: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS"],
      desc: "A website created to present my profile and projects, also to present my frontend development skills. From this project, I've learned to create responsive web pages and adjustment of appearence based on user light and dark mode preference.",
      imgsrc: "/project-img/portfolio-web.png",
      codeurl: "https://github.com/ignferry/portfolio-website",
      main: true
    },
    {
      title: "Android Food App",
      techs: ["Kotlin"],
      desc: "A food themed android application with features such as menu, cart, payment, location list, and twibbon. This is a Platform Based Development project done by 3 people in which I am in charge of the payment and location list page.",
      codeurl: "https://gitlab.informatika.org/ignferry/if3210-2023-android-ogt",
      imgsrc: "/project-img/android.png",
      main: true
    },
    {
      title: "BNMO Backend",
      techs: ["Typescript", "NodeJS", "MySQL", "Docker"],
      desc: "A REST API that handles authentication and user financial transactions (requests and transfers). This is one of my first web development project from which I've learned to create REST APIs and use Sequelize ORM",
      codeurl: "https://github.com/ignferry/AetherWars",
      main: true
    },
  ];

  return (
    <>
      <Head>
        <title>Ignasius Ferry Priguna</title>
        <meta name="description" content="Portfolio Website by Ignasius Ferry Priguna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen h-full">
        <div className="max-w-6xl mx-auto">

          <section id="hero" className="h-screen flex flex-col">
            <div className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-8 flex-grow">
              <article className="sm:w-1/2">
                <h1 className="max-w-md text-5xl font-bold text-center sm:text-8xl md:text-9xl sm:text-left text-slate-900 dark:text-white">
                  Hi! I'm Ferry
                </h1>

                <a href="" target="_blank"className="mt-10 font-semibold py-2 pr-4 rounded inline-flex items-center w-full sm:w-auto justify-center hover:scale-110 transition ease-in-out">
                  <img src="download-icon.svg" className="h-6 mr-2 dark:invert"></img>
                  <span className="text-lg underline">Download Resume</span>
                </a>

                <div className="relative max-w-md text-2xl mt-8 mx-auto sm:mx-0 text-slate-700 dark:text-slate-400">
                  <p className="absolute w-full text-center sm:text-left hero-sub-text">
                    Aspiring Software Developer
                  </p>
                  <p className="absolute w-full text-center sm:text-left hero-sub-text">
                    Informatics Engineering Student
                  </p>
                  <p className="absolute w-full text-center sm:text-left hero-sub-text">
                    Technology Enthusiast
                  </p>
                </div>
              </article>

              <HeroImage />
            </div>

            <a href="#education" className="text-5xl text-center w-fit mx-auto hover:font-bold hover:scale-150 animate-bounce">&#8964;</a>
            <br />
          </section>

          <hr className="mx-auto bg-black dark:bg-white border-0 w-1/2 mt-10 h-px"></hr>

          <section id="education" className="p-6 my-12">
            <h1 className="text-3xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white mb-10">
              Education
            </h1>

            <article className="flex flex-col bg-gray-200 dark:bg-gray-800 mt-4 p-4 sm:w-3/4 m-auto rounded-xl">
              <div className="flex items-center mb-4 justify-start">
                <img src="/logo_itb.png" className="h-24 mr-4"></img>
                <div className="h-fit">
                  <h2 className="text-xl font-bold">Institut Teknologi Bandung</h2>
                  <p className="text-slate-600 dark:text-slate-300">Bachelors Degree - Informatics Engineering</p>
                  <p className="text-slate-600 dark:text-slate-300">2020 - 2024 (Expected)</p>
                </div>
              </div>
              <div className="flex items-stretch">
                <div className="flex-grow mr-2">
                  <h3 className="text-xl font-semibold">Relevant Coursework</h3>
                  <ul className="list-disc ml-5">
                    <li>Algorithms and Data Structures</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database</li>
                    <li>Web Based Development</li>
                    <li>Platform Based Development</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
                <div className="w-0.5 bg-gray-500 mr-2"></div>
                <div className="flex flex-col justify-center flex-grow">
                  <h2 className="text-xl text-center font-semibold">Current GPA</h2>
                  <p className="text-xl text-center">3.76 / 4.0</p>
                  <br></br>
                  <p className="text-xl text-center font-semibold">6<sup>th</sup> Semester</p>
                </div>
              </div>
            </article>

          </section>

          <hr className="mx-auto bg-black dark:bg-white border-0 w-1/2 mt-10 h-px"></hr>

          <section id="project-and-skills" className="p-6 my-12">
            <h1 className="text-3xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white mb-10">
              Projects and Skills
            </h1>

            <div className="mt-4 flex flex-row flex-wrap gap-2 justify-center">
              {
                filterKeywords.map((keyword) => {
                  return <ProjectFilterBtn 
                    key={keyword} 
                    text={keyword} 
                    selected={keyword == filterKeyword} 
                    clickHandler={() => onFilterButtonClick(keyword)}/>
                })
              }
              
            </div>

            <div className="mt-4">
              {
                  projects.filter((project) => {
                    if (filterKeyword == "") {
                      return project.main;
                    }
                    else {
                      return project.techs.includes(filterKeyword);
                    }
                  }).map((project) => {
                    return <Project 
                      key={project.title}
                      title={project.title} 
                      techs={project.techs} 
                      desc={project.desc}
                      imgsrc={project.imgsrc}
                      codeurl={project.codeurl}/>
                  })
              }
            </div>
          </section>

          <hr className="mx-auto bg-black dark:bg-white border-0 w-1/2 mt-10 h-px"></hr>

          <section id="org-exp" className="p-6 my-12">
            <h1 className="text-3xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white mb-10">
              Organizational and Volunteering Experience
            </h1>

            <div>
              <Experience 
                position="Staff of Finance"
                organization="Inkubator IT HMIF ITB"
                time="Jan 2022 - Present"
                imgsrc="/logo_iit.png"
                points={[
                  "Assisted 6 project managers in creating project financial documents",
                  "Performed monthly financial audits"
                  ]}/>

              <Experience 
                position="Public Relations Staff"
                organization="INFEST 2021"
                time="May 2021 - Nov 2021"
                imgsrc="/logo_infest.png"
                points={[
                  "Collaborated with a team of 9 people to conduct market research on financial workshops and seminars.",
                  "Contacted several renowned individuals in the financial industry and successfully got one of them to be a speaker in the seminar."
                  ]}/>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-cyan-700 p-5 h-fit">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-white">
          <div>
            <p className="font-semibold text-xl">Ignasius Ferry Priguna</p>
            <p>ignasius.ferry01@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ignasius-ferry-priguna/" className="w-14 h-14 bg-white rounded-full flex hover:bg-gray-300" target="_blank">
              <img src="/linkedin-logo.svg" className="w-14 h-14 m-auto object-cover"></img>
            </a>
            <a href="https://github.com/ignferry" className="w-14 h-14 bg-white rounded-full flex hover:bg-gray-300" target="_blank">
              <img src="/github-logo.svg" className="w-12 h-12 m-auto object-cover"></img>
            </a>
            <a href="https://gitlab.informatika.org/ignferry" className="w-14 h-14 bg-white rounded-full flex hover:bg-gray-300" target="_blank">
              <img src="/gitlab-logo-600.svg" className="w-16 h-16 m-auto object-cover"></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
