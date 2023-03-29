import { type NextPage } from "next";
import Head from "next/head";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import ProjectsAndCurriculumComponent from "../components/pnp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caio Roberto Hach</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-[#252525] min-h-screen ">

        <div className="flex flex-col inset-x-0 top-0 z-50 m-auto">

          <div className="box-border max-h-fit p-14 bg-[#746b6133] mx-10 my-28 rounded-2xl place-self-center">
            <h1 className="text-white font-semibold text-5xl text-center">Caio Roberto Hach</h1>
            <h1 className="text-white font-semibold text-2xl text-center my-3">Junior Fullstack Developer</h1>
            <hr/>
            <div className="mx-12 my-5 flex justify-between">
              <GoMarkGithub className="h-16 w-16 fill-white"/>
              <AiOutlineLinkedin className="h-16 w-16 fill-white" />
              <BsTelegram className="h-16 w-16 fill-white" />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-5xl text-white font-bold">Projetos</p>
          </div>
          
          <ProjectsAndCurriculumComponent />
          
        </div>

      </main>
    </>
  );
};

export default Home;
