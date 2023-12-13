import React from 'react'
import axios from 'axios';
import BubbleEffect from './Bubble'
export default function Certificate() {
  let root = `https://certificates.amazingasim.repl.co`
  return (
    <div>
       <BubbleEffect></BubbleEffect>
      <h1>Certificates</h1>
      <div className="d-flex justify-content-evenly flex-wrap w-100">
        <button className="homebutton1 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#degree">Meanstack degree</button>
        <button className="homebutton2 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#phase1">Agile, Git, and JavaScript</button>
        <button className="homebutton3 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#phase2">Angular</button>
        <button className="homebutton1 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#phase3">Node and mongodb</button>
        <button className="homebutton2 hovereffect my-3 commonbtn" data-bs-toggle="modal" data-bs-target="#phase4">Docker and Aws</button>
      </div>
   
      {/* degree 1 */}

      <div className="modal fade" id="degree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='img-fluid' src={`${root}/api/getdegree`} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* phase 1 */}

      <div className="modal fade" id="phase1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='img-fluid' src={`${root}/api/p1`} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* phase 2 */}

      <div className="modal fade" id="phase2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='img-fluid' src={`${root}/api/p2`} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* phase 3 */}

      <div className="modal fade" id="phase3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='img-fluid' src={`${root}/api/p3`} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* phase 3 */}

      <div className="modal fade" id="phase4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className='img-fluid' src={`${root}/api/p4`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
