import React from 'react'
import { useNavigate } from 'react-router-dom'
import BubbleEffect from './Bubble'
export default function Dashboard() {
  let navigate = useNavigate()
  return (
    <div>
      <BubbleEffect></BubbleEffect>
      <div className="d-flex justify-content-evenly flex-wrap">
          <button className="homebutton1 hovereffect my-3 commonbtn" onClick={()=>{navigate('work')}} >Projects</button>
          <button className="homebutton2 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#resume" >resume</button>
          <button className="homebutton3 hovereffect my-3 commonbtn" onClick={()=>{navigate('certificate')}} >Certificates</button>
      </div>


      <div className="modal fade" id="resume" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <iframe src="resume.pdf" className='resume' frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
