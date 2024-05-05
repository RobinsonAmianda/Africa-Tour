import { FaEnvelope } from 'react-icons/fa';


function Header() {
  return (
    <>
       <header>
        <nav>
            <div className='section-wrapper'>
                <div className="left">
                    <div className='logo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7QKDCDjS1mhc9Lx-gTCHVUR-0N2H30BV-M0chqMGxQ&s" alt="logo" width="40" height="30" /></div>
                    <span className='span1'>Africa</span>
                    <span className='span2'>Adventures</span>
                </div>
                <div className="mid">
                    <ul className='list'>
                       <a href=""> <li>Home</li></a>
                       <a href=""> <li>About</li></a>
                        <a href=""><li>Services</li></a>
                        <a href=""><li>Blog</li></a>
                    </ul>
                </div>
                <div className="right">
                    <FaEnvelope style={{ color: 'purple' }}/>
                    <button id = "btn">CONTACT US</button>
                </div>
            </div>
        </nav>
       </header>
    </>
  )
}

export default Header