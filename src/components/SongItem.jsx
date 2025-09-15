<<<<<<< HEAD
import React, { useContext } from 'react'
import { PlayerContext } from '../context/playerContext'


const songItem = ({name,image,desc,id}) => {
    const {playWidthId} = useContext(PlayerContext)
    return (  
        <div onClick={()=>playWidthId(id)} className='album'>
            <img className='imagealbum' src={image} alt=''/>
            <p className='palbum'>{name}</p>
            <p className='pdesc'>{desc}</p>
        </div>
    )
}

    

=======
import React from 'react'


const songItem = ({name,image,desc}) => {
    return (
        <div className='album'>
            <img className='imagealbum' src={image} alt=''/>
            <p className='palbum'>{name}</p>
            <p className='pdesc'>{desc}</p>
        </div>
    )
}



>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default songItem