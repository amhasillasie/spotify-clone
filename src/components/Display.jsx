<<<<<<< HEAD
import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () =>{

    const displayRef =useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
         const bgColor = albumsData[Number(albumId)].bgColor ;
         
         
         useEffect(()=>{
            if (isAlbum){
              displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
            }
            else{
                displayRef.current.style.background = `#121212`
            }
         })      
    return(
        <div ref={displayRef} className='display'>
                       
            <Routes>
                <Route path='/' element={<DisplayHome/>}/>
                <Route path='/album/:id' element={<DisplayAlbum/>}/>
            </Routes>
              
        </div>
    )
}


=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () =>{
    return(
        <div className='display'>
          
            <Routes>
                <Route path='/' element={<DisplayHome/>}/>
                <Route path='/album/:id' element={<DisplayAlbum/>}/>
            </Routes>
              
        </div>
    )
}


>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default Display