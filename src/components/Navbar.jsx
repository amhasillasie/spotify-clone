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


export default Navbar 