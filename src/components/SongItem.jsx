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

    

export default songItem