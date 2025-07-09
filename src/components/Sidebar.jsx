import React from 'react'
 import  {assets} from'../assets/assets'

const Sidebar = () =>{
    return(   
      
 <div className='side'>
              
<div className='flex'>
<div className='display'>
 
        <img className='img' src={assets.home_icon} alt=""/>
          <p className='p'>Home</p>
       </div>
       <div className='display'>
 
        <img className='img' src={assets.search_icon} alt=""/>
          <p className='p'>Search</p>
       </div>
    </div>
    <div className='middle'>
        <div className='secondm'>
           
           <div className='finalm'>
            <img className='imgm' src={assets.stack_icon} alt=''/>
            <p className='pm'>Your Library</p>
           </div>

           <div className='next'>
            <img className='imgn' src={assets.arrow_icon} alt=""/>
            <img className='imgnn' src={assets.plus_icon} alt=""/>
           </div>

        </div>

        <div className='final'>
            <h1 className='hfinal'>Create your first playlist</h1>
            <p className='pfinal'>it's easy we will help you</p>
            <button className='bfinal'>Create playlist</button>
        </div>
        <div className='final'>
            <h1 className='hfinal'>Let's findsome podcast to follow</h1>
            <p className='pfinal'>we'll keep you update on new episodes</p>
            <button className='bfinal'>Browse podcast</button>
        </div>
    </div>
</div>
    )
}


export default Sidebar