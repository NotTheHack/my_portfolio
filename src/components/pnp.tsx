import Image from 'next/image'
import mealMatchImg from '../../public/Meal Match.png'
import noteAppImg from '../../public/Noteapp.png'
import { GoMarkGithub } from "react-icons/go";

const ProjectsAndCurriculumComponent = () => {
  return(
    <>
      <div className="absolute bottom-0 h-2/6 bg-purple-300 min-w-full clip-path-polygon-[0_0,_100%_0,_100%_100%,_0%_100%] grid grid-cols-2 divide-x">

        <div className="relative bg-green-300 border-r border-black skew-x-6 -left-5 z-30 flex flex-row">
          <div className='relative -left-4 -top-12 -skew-x-6 overflow-hidden '>
            <Image  src={mealMatchImg} alt="mealmatch" width={320} height={320} className='inline-block' />
          </div> 
          <div className='flex flex-col -skew-x-6 gap-2 w-2/3 m-5 ml-0'>
              <p className="text-2xl font-semibold text-black">Meal Match</p>
              <p className='text-black'>O Meal Match usa a API da Spoonacular para  buscar por receitas baseado nos
                                          ingredientes que você listar. <br/>
                                          Encontre receitas com os ingredientes que você já tem em casa com Meal Match!
                                          </p>
              <div className='flex flex-row mt-5'>
                <GoMarkGithub className="h-10 w-10 m-5 fill-black"/>
                <button className='p-2 border border-black rounded-lg'>Ir para app</button>
              </div>
          </div>
        </div>

        <div className='flex flex-row border border-purple-300'>

        <div className='relative -left-20 -top-12 overflow-hidden'>
        <Image  src={noteAppImg} alt="noteapp" width={300} height={300} className='inline-block'></Image>
        </div>
        <div className='relative right-16 flex flex-col gap-2 w-2/3 m-5 ml-0'>
              <p className="text-2xl font-semibold text-black">Note App</p>
              <p className='text-black'>Aplicativo de Notas desenvolvido em Next.js usando a T3 Stack.<br/>
                                          Você consegue criar e modificar notas e salvá-las na nuvem!
                                          </p>
              <div className='flex flex-row mt-10'>
                <GoMarkGithub className="h-10 w-10 m-5 fill-black"/>
                <button className='p-2 border border-black rounded-lg'>Ir para app</button>
              </div>
          </div>
        
        </div>

      </div>
    </>
  )
}

export default ProjectsAndCurriculumComponent;