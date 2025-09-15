import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/playerContext'

const App = () =>{

   const {audioRef,track} = useContext(PlayerContext);


  return (
    <div className='All'>
    
      <div className='second'>
         <Sidebar />    
         <Display />                 
        
                
                
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>


)}

  

export default App  


