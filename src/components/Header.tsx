import Logo from '../assets/logo.svg'

export const Header = () => {
    return(
        <header className='flex justify-center w-full bg-gray-800 py-5 px-6'>
            <img src={Logo} alt="" />  
        </header>
    )
}