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


export default Navbar 