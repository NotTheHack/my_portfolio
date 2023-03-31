import Image from 'next/image'
import mealMatchImg from '../../public/Meal Match.png'
import noteAppImg from '../../public/Noteapp.png'
import { GoMarkGithub } from "react-icons/go";

const ProjectsAndCurriculumComponent = () => {
  return(
    <div className='fixed bottom-0 flex flex-col max-[820px]:h-[60vh] gap-8 h-80'>
      <div className="max-[425px]:mx-auto h-[10%] ml-5">
        <h1 className="text-5xl text-white font-bold">Projetos</h1>
      </div>

      <div className='flex flex-col min-[1000px]:flex-row h-[90%] w-screen'>

        <div className="bg-green-300 flex max-[820px]:h-[50%] min-[1000px]:pl-4 min-[1000px]:w-[50vw]">
              <div className='relative max-[820px]:hidden w-60 min-[769px]:w-56'>
                <Image  src={mealMatchImg} alt="mealmatch" fill className='inline-block object-contain' />
              </div>
              
              <div className='flex flex-col w-full items-center justify-evenly'>
                  <h1 className="text-xl font-semibold text-black text-center">Meal Match</h1>
                  <p className='text-black text-justify text-sm max-w-[90%] max-[375px]:hidden'>O Meal Match usa a API da Spoonacular para  buscar por receitas baseado nos
                                              ingredientes que você listar. <br/>
                                              Encontre receitas com os ingredientes que você já tem em casa com Meal Match!
                                              </p>
                  <div className='flex w-[250px] justify-between items-center max-[375px]:w-[250px]'>
                    <GoMarkGithub className="h-12 w-12 fill-black cursor-pointer"/>
                    <button className='p-2 w-32 h-[52px] border border-black rounded-lg hover:bg-black hover:text-white active:bg-transparent active:text-black transition-all'>Ir para app</button>
                  </div>
              </div>
        </div>

          <div className='flex bg-purple-300 max-[820px]:h-[50%] min-[1000px]:pl-4 min-[1000px]:w-[50vw]'>
            <div className='relative w-60 max-[820px]:hidden min-[769px]:w-56'>
              <Image  src={noteAppImg} alt="noteapp" fill className='inline-block object-contain' />
            </div>
            <div className='flex flex-col w-full items-center justify-evenly'>
              <h1 className="text-xl font-semibold text-black text-center">Note App</h1>
              <p className='text-black text-justify text-sm max-w-[90%] max-[375px]:hidden'>Aplicativo de Notas desenvolvido em Next.js usando a T3 Stack.<br/>
                                          Você consegue criar e modificar notas e salvá-las na nuvem!
                                          </p>
              <div className='flex w-[250px] justify-between items-center max-[375px]:w-[250px]'>
                <GoMarkGithub className="h-12 w-12  fill-black cursor-pointer"/>
                <button className='p-2 w-32 h-[52px] border border-black rounded-lg hover:bg-black hover:text-white active:bg-transparent active:text-black transition-all'>Ir para app</button>
              </div>
            </div>
          </div>
          
      </div>

        
    </div>
  )
}

export default ProjectsAndCurriculumComponent;