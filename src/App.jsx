<<<<<<< HEAD
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
=======
import React from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Navbar from './components/Navbar'
const App = () =>{
  return (
    <div className='All'>
      {/* <Navbar /> */}
      <div className='second'>
         <Sidebar /> 
         <Display /> 
        
                
        </div>
        <Player />
>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
    </div>


)}

  

export default App  


