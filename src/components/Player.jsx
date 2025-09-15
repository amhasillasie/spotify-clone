<<<<<<< HEAD
import React, { useContext } from 'react'
import {assets } from '../assets/assets'
import { PlayerContext } from '../context/playerContext'

const Player = () =>{

const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);
    
    
     return(
        <div className='player'>
         <div className='playero'>
            <img className='pimg' src={track.image} alt="" />
            <div><p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
         </div>
         </div>    
         <div className='fplayer'>                                                                                                                                                                                        
            <div className='gapplayer'>
              <img className='imageplayer' src={assets.shuffle_icon} alt='' />
              <img onClick={previous} className='imageplayer' src={assets.prev_icon} alt='' />
              {playStatus
               ?<img onClick={pause} className='imageplayer' src={assets.pause_icon} alt='' />
              :<img onClick={play} className='imageplayer' src={assets.play_icon} alt='' />
              }
             
              <img onClick={next} className='imageplayer' src={assets.next_icon} alt='' />
              <img className='imageplayer' src={assets.loop_icon} alt='' />
            </div>
            <div className='time'>
              <p>{time.currentTime.minute}:{time.currentTime.second}</p>
              <div ref={seekBg} onClick={seekSong} className='timef'>
                  <hr ref={seekBar} className='hr'/>
              </div>
              <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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


=======
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


>>>>>>> ae60466884b57c1e4b1c7151759f1a21df253993
export default Player