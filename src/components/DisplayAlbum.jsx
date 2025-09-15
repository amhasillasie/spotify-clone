<<<<<<< HEAD
import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/playerContext';

const DisplayAlbum = () =>{

      const {id} = useParams();
      const albumData = albumsData[id];
    const {playWidthId} = useContext(PlayerContext)

    return(
      
        <>
      <Navbar />
      <div>
        <div className='displayalbum'>
          <img className='displayimage' src={albumData.image} alt=''/>
          <div className='flexcolumn'>
            <p>Playlist</p>
            <h2 className='flexh'>{albumData.name}</h2>
              <h4>{albumData.desc}</h4>
              <p className='flexp'>
              <img className='iniline' src={assets.spotify_logo}/>
              <b>spotify</b>
             . 1,324,569 likes
              <b>50 songs</b> 
             . about 2 hr 30 min 
              </p>
          </div>
        </div>
        <div className='grid'>
      <p><b className='mrfour'>#</b>Title</p>
      <p>Album</p>
      <p className='hidden'>Data Added</p>
      <img className='hiddenimg' src={assets.clock_icon}/>
        </div>
<hr />     <div>
             {
              songsData.map((item,index)=>(
                <div onClick={()=>playWidthId(item.id)} key={index} className='itemidex'>
                     <p className='textwhite'>
                      <b className='btextwhite'>{index+1}</b>
                      <img className='itextwhite' src={item.image} alt=''/>
                      {item.name}
                     </p>
                     <p className='classname'>{albumData.name}</p>
                     <p className='pclassname'>5 days ago</p>
                     <p className='ppclassname'>{item.duration}</p>
                </div>
              ))
             }
           </div>
           </div>
        </>
    )
}


=======
import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';

const DisplayAlbum = () =>{

      const {id} = useParams();
      const albumData = albumsData[id];
     console.log(albumData);

    return(
      
        <>
      <Navbar />

          
           
        </>
    )
}


>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default DisplayAlbum