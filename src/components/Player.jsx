import React from 'react'
import {assets, songsData} from '../assets/assets'

const Player = () =>{
     return(
        <div className='player'>
         <div className='playero'>
            <img className='pimg' src={songsData[0].image} alt="" />
            <div><p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
         </div>
         </div>
         <div className='fplayer'>
            <div className='gapplayer'>
              <img className='imageplayer' src={assets.shuffle_icon} alt='' />
              <img className='imageplayer' src={assets.prev_icon} alt='' />
              <img className='imageplayer' src={assets.play_icon} alt='' />
              <img className='imageplayer' src={assets.next_icon} alt='' />
              <img className='imageplayer' src={assets.loop_icon} alt='' />
            </div>
            <div className='time'>
              <p>1:06</p>
              <div className='timef'>
                  <hr className='hr'/>
              </div>
              <p>3:06</p>
            </div>
         </div>
         <div className='aftertime'> 
<img className='w4' src={assets.plays_icon} alt=''/>
      <img className='w4' src={assets.mic_icon} alt=''/>
      <img className='w4' src={assets.queue_icon} alt=''/>
      <img className='w4' src={assets.speaker_icon} alt=''/>
      <img className='w4' src={assets.volume_icon} alt=''/>
      <div className='w20'>

      </div>
      <img className='w4' src={assets.mini_player_icon} alt=''/>
      <img className='w4' src={assets.zoom_icon} alt=''/>         
         </div>
        </div>
     )
}


export default Player