import Image from 'next/image'
import mealMatchImg from '../../public/Meal Match.png'
import noteAppImg from '../../public/Noteapp.png'
import { GoMarkGithub } from "react-icons/go";

const ProjectsAndCurriculumComponent = () => {
  return(
    <div className='fixed bottom-0 flex flex-col max-[768px]:h-[50vh] gap-7'>
          <div className="max-[425px]:mx-auto h-[10%] ml-5">
            <h1 className="text-5xl text-white font-bold">Projetos</h1>
          </div>
      <div className='h-[90%] w-screen'>
        <div className="bg-green-300 flex h-[50%] ">
            <div className="min-[769px]:clip-path-polygon-[0_0,_100%_0,_95%_100%,_0_100%]">
              <div className='relative max-[768px]:hidden w-60 min-[769px]:w-56'>
                <Image  src={mealMatchImg} alt="mealmatch" fill className='inline-block object-contain' />
              </div>
              
              <div className=''>
                  <h1 className="text-2xl font-semibold text-black text-center">Meal Match</h1>
                  <p className='text-black'>O Meal Match usa a API da Spoonacular para  buscar por receitas baseado nos
                                              ingredientes que você listar. <br/>
                                              Encontre receitas com os ingredientes que você já tem em casa com Meal Match!
                                              </p>
                  <div className='flex'>
                    <GoMarkGithub className="h-10 w-10 fill-black"/>
                    <button className='p-2 border border-black rounded-lg'>Ir para app</button>
                  </div>
              </div>
            </div>
        </div>

          <div className='flex bg-purple-300 h-[50%]'>

            <div className='relative w-60 max-[768px]:hidden min-[769px]:w-56'>
              <Image  src={noteAppImg} alt="noteapp" fill className='inline-block object-contain' />
            </div>
            <div className=' flex flex-col'>
                  <h1 className="text-2xl font-semibold text-black text-center">Note App</h1>
                  <p className='text-black'>Aplicativo de Notas desenvolvido em Next.js usando a T3 Stack.<br/>
                                              Você consegue criar e modificar notas e salvá-las na nuvem!
                                              </p>
                  <div className='flex'>
                    <GoMarkGithub className="h-10 w-10  fill-black"/>
                    <button className='p-2 border border-black rounded-lg'>Ir para app</button>
                  </div>
              </div>
            
            </div>
          </div>

        
    </div>
  )
}

export default ProjectsAndCurriculumComponent;