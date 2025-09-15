<<<<<<< HEAD
import React  from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


 const Navbar = () =>{
    const navigate = useNavigate()
    return(
    <div className='color'>
        <div className='navbar'>
          
            <div className='navbarflex'>
            <img onClick={() => { alert("Back clicked"); navigate('/'); }} style={{   }} className='imgnav' src={assets.arrow_left} alt=''/>
            <img onClick={() => { console.log("Forward clicked"); navigate(1); }} className='imgnav' src={assets.arrow_right} alt=''/>
            </div>
<div className='explore'>
    <p className='pexplore'>Explore Premium</p>  
     <p className='install'>Install App</p>
      <p className='download'>A</p>
</div>

        </div>
        <div className='textblack'>
            <p className='ptextblack'>All</p>
        <p className='mtextblack'>Music</p>
        <p className='mtextblack'>Podcasts</p>
        </div>
        </div>
    )
}


=======
import React  from 'react'
import { assets } from '../assets/assets'


 const Navbar = () =>{
//     const [showNavbar,setShowNavbar] = useState(true);
//     const[lastScrollY, setLastScrollY] = useState(0);
// showNavbar;
//     useEffect(() =>{
//         const handleScroll = () =>{
//             const currentY = window.scrollY;
//             setShowNavbar(currentY < lastScrollY || currentY <= 0);
//             setLastScrollY(currentY);
//         };

//         window.addEventListener('scroll',handleScroll);
//         return () => window.removeEventListener('scroll',handleScroll);
    
//     },[lastScrollY]);
    return(<>
        <div className='navbar'>
          
            <div className='navbarflex'>
            <img className='imgnav' src={assets.arrow_left} alt=''/>
            <img className='imgnav' src={assets.arrow_right} alt=''/>
            </div>
<div className='explore'>
    <p className='pexplore'>Explore Premium</p>
     <p className='install'>Install App</p>
      <p className='download'>A</p>
</div>

        </div>
        <div className='textblack'>
            <p className='ptextblack'>All</p>
        <p className='mtextblack'>Music</p>
        <p className='mtextblack'>Podcasts</p>
        </div>
        </>
    )
}


>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default Navbar 