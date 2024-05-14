import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <div className='flex justify-center items-center  p-5 bg-gray2-cards'>
        <img className='w-10 h-10' src={ logo } alt="logo" />
        <span className='ml-4 font-bold text-2xl'>Dev Network</span>
    </div>
  )
}
