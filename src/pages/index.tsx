import { type NextPage } from "next";
import Head from "next/head";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caio Roberto Hach</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#252525] min-h-screen flex-col relative">

        <div className="absolute inset-x-0 top-0 h-4/6">
          <div className="relative box-border w-[600px] h-[350px] p-14 bg-[rgba(116,107,97,0.2)] mx-auto my-24 rounded-2xl">
            <h1 className="text-white font-semibold text-5xl text-center">Caio Roberto Hach</h1>
            <h1 className="text-white font-semibold text-2xl text-center my-3">Junior Fullstack Developer</h1>
            <hr/>
            <div className="mx-12 my-5 flex justify-between">
              <GoMarkGithub className="h-16 w-16 fill-white"/>
              <AiOutlineLinkedin className="h-16 w-16 fill-white" />
              <BsTelegram className="h-16 w-16 fill-white" />
            </div>
          </div>
        </div>


      <div className="flex absolute inset-x-0 bottom-0 h-2/6 ">
          <div className="basis-1/2 border skew-y-12 -rotate-12 bg-slate-100"></div>
          <div className="box-border bg-black"></div>
      </div>

      </main>
    </>
  );
};

export default Home;
