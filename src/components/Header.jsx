import Logo from '../assets/images/liveOakLogo.png'

function Header() {
    return (
        <nav className='flex flex-wrap mt-5 ml-3 justify-around bg-base-100'>
           <a href='https://liveoakfiber.com/'> <img src={Logo} alt="Live Oak Fiber" /></a>
            <h1 className='text-3xl lof-blue-text max-[500px]:mt-4'>Contact Request Form</h1>
        </nav>
    )
}
export default Header