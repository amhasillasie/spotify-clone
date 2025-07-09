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
    </div>


)}

  

export default App  


