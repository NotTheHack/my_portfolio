import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

export default function CardPage() {
  return (  

    <div className="box-border items-center flex flex-col h-80 max-[425px]:h-64 max-[375px]:h-56 justify-evenly bg-[#746b6133] rounded-2xl place-self-center max-[425px]:w-[90vw] w-[500px]">

            <h1 className="text-white font-semibold text-5xl text-center max-[320px]:text-2xl max-[425px]:text-3xl">Caio Roberto Hach</h1>
            <h1 className="text-white font-semibold text-2xl text-center my-3 max-[320px]:text-xl max-[425px]:text-2xl">Junior Fullstack Developer</h1>
            <div className="h-[1px] bg-white w-full" />
            <div className=" gap-3 flex justify-evenly w-full items-center">
              <Link href={"https://github.com/NotTheHack"}><GoMarkGithub className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12"/></Link>
              <Link href={"https://www.linkedin.com/in/caio-roberto-hach-0a0594260/"}><AiOutlineLinkedin className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12" /></Link>
              <Link href={"https://wa.me/5548996680635?text=hello,%20i%27ve%20came%20from%20your%20portfolio%20site%20to%20this%20link."}><BsTelegram className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12" /></Link>
            </div>

    </div>

  )
}

