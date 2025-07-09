import React from 'react'
import { useNavigate } from 'react-router-dom';



const AlbumItem = ({ image,name,desc,id }) =>{
    const navigate = useNavigate();
    return(
         

          <div onClick={()=>navigate(`/album/${id}`)} className='album'>
             <img className='imagealbum' src={image}/>
             <p className='palbum'>{name}</p>
             <p className='pdesc'>{desc}</p>
          </div>
        
    )
}
              
                         
export default AlbumItem