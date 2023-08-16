import React from 'react'
import axios from 'axios';
export default function Certificate() {
  return (
    <div>
      <h1>Certificates</h1>
      <div className="d-flex justify-content-evenly flex-wrap" style={{ padding: '200px' }}>
        <button className="homebutton1 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#degree">Meanstack degree</button>
        <button className="homebutton2 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#phase1">Agile, Git, and JavaScript</button>
        <button className="homebutton3 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#phase2">Angular</button>
        <button className="homebutton3 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#phase3">Node and mongodb</button>
        <button className="homebutton3 hovereffect my-3" data-bs-toggle="modal" data-bs-target="#phase4">Docker and Aws</button>
      </div>
   
      {/* degree 1 */}

      <div class="modal fade" id="degree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img className='img-fluid' src={`https://portfolioapi-9riq.onrender.com/api/getdegree`} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* phase 1 */}

      <div class="modal fade" id="phase1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img className='img-fluid' src={`https://portfolioapi-9riq.onrender.com/api/getphase1`} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* phase 2 */}

      <div class="modal fade" id="phase2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img className='img-fluid' src={`https://portfolioapi-9riq.onrender.com/api/getphase2`} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* phase 3 */}

      <div class="modal fade" id="phase3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img className='img-fluid' src={`https://portfolioapi-9riq.onrender.com/api/getphase3`} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* phase 3 */}

      <div class="modal fade" id="phase4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img className='img-fluid' src={`https://portfolioapi-9riq.onrender.com/api/getphase4`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
