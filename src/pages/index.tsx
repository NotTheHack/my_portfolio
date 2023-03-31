import { type NextPage } from "next";
import Head from "next/head";
import ProjectsAndCurriculumComponent from "../components/pnp";
import CardPage from "../components/card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caio Roberto Hach</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen ">

        <div className="flex flex-col inset-x-0 top-0 z-50 m-auto pt-10">

        <CardPage/>         
        <ProjectsAndCurriculumComponent />
          
        </div>

      </main>
    </>
  );
};

export default Home;
