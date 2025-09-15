<<<<<<< HEAD
import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './Albumitem'
import { songsData } from '../assets/assets'
import SongItem from './songItem'
const DisplayHome = () =>{
    return(
        <>
         <Navbar />
          <div className='fixed'>
          <div className='ffontbold'>
            <h1 className='hfontbold'>Featured Charts</h1>
            <div className='flexfontbold'>
      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
          </div>
          </div>
          
         
           <div className='fontbold'>
            <h1 className='htoday'>Today's biggest hits</h1>
            <div className='flexfontbold'>
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
          </div>
          </div></div>
        </>
    )
}
                  

=======
import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './Albumitem'
import { songsData } from '../assets/assets'
import SongItem from './songItem'
const DisplayHome = () =>{
    return(
        <>
         <Navbar />
          <div>
          <div className='ffontbold'>
            <h1 className='hfontbold'>Featured Charts</h1>
            <div className='flexfontbold'>
      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
          </div>
          </div>
          
         
           <div className='fontbold'>
            <h1 className='htoday'>Today's biggest hits</h1>
            <div className='flexfontbold'>
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
          </div>
          </div></div>
        </>
    )
}
                  

>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default DisplayHome