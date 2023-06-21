import React from 'react'
import { useNavigate } from 'react-router-dom'
import BubbleEffect from './Bubble'
export default function Dashboard() {
  let navigate = useNavigate()
  return (
    <div>
      <BubbleEffect></BubbleEffect>
      <div className="d-flex justify-content-evenly" style={{padding:'200px'}}>
          <button className="homebutton1 hovereffect" onClick={()=>{navigate('work')}} >Projects</button>
          <button className="homebutton2 hovereffect" onClick={()=>{navigate('')}} >resume</button>
          <button className="homebutton3 hovereffect" onClick={()=>{navigate('certificate')}} >Certificates</button>
      </div>
    </div>
  )
}
