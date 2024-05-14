import '../index.css'
import { PiPencilLineLight } from "react-icons/pi";
import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className="bg-gray2-cards rounded-lg overflow-hidden">
      <img className="object-cover h-16 w-full" src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="flex flex-col items-center -mt-6">
        <Avatar hasBorder src="https://avatars.githubusercontent.com/u/54600376?v=4" alt="" />
        <strong className='text-gray7-text-tilte mt-4'>Bruna Borges</strong>
        <span className='text-gray5-apoio text-sm'>Dev Front-end</span>
      </div>

      <footer className="border-t border-gray3-divider mt-6 pt-6 pb-8 px-8">
        <a className="text-orange bg-transparent border border-orange rounded-lg py-0 font-bold px-6 h-[50px] flex items-center justify-center hover:bg-light-orange hover:text-white transition duration-700" href="#"><PiPencilLineLight className='mr-2'/>Editar seu perfil</a>
      </footer>
    </aside>
  )
}
