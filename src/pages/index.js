import Head from 'next/head'
import { Inter } from 'next/font/google'
import Project from '@/components/Project'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignasius Ferry Priguna</title>
        <meta name="description" content="Generated by create next app" />
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
                <p className="max-w-md text-2xl mt-8 text-center sm:text-left text-slate-700 dark:text-slate-400 typewriter-text">
                  Aspiring Software Developer
                </p>
              </article>
              <img src="/hero.png"></img>
            </div>

            <a href="#education" className="text-5xl text-center w-fit mx-auto hover:font-bold hover:scale-150">&#8964;</a>
            <br />
          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2 mt-10"></hr>

          <section id="education" className="p-6 my-12">
            <h1 className="text-4xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white">
              Education
            </h1>

            <article className="flex flex-col dark:bg-gray-800 mt-4 p-4 sm:w-3/4 m-auto">
              <div className="flex items-center mb-4 justify-start">
                <img src="/logo_itb.png" className="h-24 mr-4"></img>
                <div className="h-fit">
                  <h2 className="text-xl font-bold">Institut Teknologi Bandung</h2>
                  <p className="text-slate-300">Bachelors Degree - Informatics Engineering</p>
                  <p className="text-slate-300">2020 - 2024 (Expected)</p>
                </div>
              </div>
              <div className="flex items-stretch">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">Relevant Courses:</h3>
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
                  <p className="text-xl text-center">(As of 6<sup>th</sup> Semester)</p>
                </div>
              </div>
            </article>

          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>

          <section id="project-and-skills" className="p-6 my-12">
            <h1 className="text-4xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white">
              Projects and Skills
            </h1>

            <div className="mt-4">
              <Project 
                title="Bluesound" 
                techs={["Java", "Javascript", "MySQL", "ExpressJS", "React", "Docker"]} 
                desc="A web based music player which consists of four major components: normal user client (Plain PHP), 
                premium user client (Reach), REST API (Plain PHP and ExpressJS), and SOAP API (Java)." 
                imgsrc="/logo_iit.png" 
                github="https://github.com/ignferry/Note-Taking-App-PHP"/>

              <Project 
                title="Note Taking App" 
                techs={["PHP", "MySQL", "Docker"]} 
                desc="A note taking app" 
                imgsrc="/logo_iit.png" 
                github="https://github.com/ignferry/Note-Taking-App-PHP"/>
            </div>
          </section>

          <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>

          <section id="org-exp" className="p-6 my-12">
            <h1 className="text-4xl font-bold text-center sm:text-5xl text-slate-900 dark:text-white">
              Organizational and Volunteering Experience
            </h1>

            <div>
              <Experience 
                position="Staff of Finance"
                organization="Inkubator IT HMIF ITB"
                time="Jan 2022 - Present"
                imgsrc="/logo_iit.png"
                points={[
                  "Audit",
                  "Accounting"
                  ]}/>

              <Experience 
                position="Public Relations Staff"
                organization="INFEST 2021"
                time="May 2021 - Nov 2021"
                imgsrc="/logo_infest.png"
                points={[
                  "Audit",
                  "Accounting"
                  ]}/>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}