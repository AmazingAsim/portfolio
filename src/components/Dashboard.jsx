import React from 'react'
import { useNavigate } from 'react-router-dom'
import BubbleEffect from './Bubble'
export default function Dashboard() {
  let navigate = useNavigate()
  return (
    <div>
      <BubbleEffect></BubbleEffect>
      <div className="d-flex justify-content-evenly flex-wrap" style={{padding:'200px'}}>
          <button className="homebutton1 hovereffect my-3" onClick={()=>{navigate('work')}} >Projects</button>
          <button className="homebutton2 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#resume" >resume</button>
          <button className="homebutton3 hovereffect my-3" onClick={()=>{navigate('certificate')}} >Certificates</button>
      </div>


      <div class="modal fade" id="resume" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <iframe src="resume.pdf" className='resume' frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
