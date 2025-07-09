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



export default songItem