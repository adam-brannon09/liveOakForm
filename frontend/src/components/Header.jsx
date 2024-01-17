import Logo from '../assets/images/liveOakLogo.png'
function Header() {
    return (
        <nav className='flex mt-4 ml-3 justify-around bg-base-100'>
            <img src={Logo} alt="" />
            <h1 className='text-2xl'>Contact Request Form</h1>
        </nav>
    )
}
export default Header