import { GoMarkGithub } from "react-icons/go";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function CardPage() {
  return (  

    <div className="box-border items-center flex flex-col h-80 justify-evenly bg-[#746b6133] rounded-2xl place-self-center max-[425px]:w-[90vw] w-[500px]">

            <h1 className="text-white font-semibold text-5xl text-center max-[320px]:text-2xl max-[425px]:text-3xl">Caio Roberto Hach</h1>
            <h1 className="text-white font-semibold text-2xl text-center my-3 max-[320px]:text-xl max-[425px]:text-2xl">Junior Fullstack Developer</h1>
            <div className="h-[1px] bg-white w-full" />
            <div className=" gap-3 flex justify-evenly w-full max-[425px]:mt-8">
              <GoMarkGithub className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12"/>
              <AiOutlineLinkedin className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12" />
              <BsTelegram className="h-16 w-16 fill-white max-[425px]:h-12 max-[425px]:w-12" />
            </div>

    </div>

  )
}

