import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import BubbleEffect from './Bubble'
export default function Work() {
  let [projects, setProjects] = useState([]);
  useEffect(() => {
    getdata()
  }, [])
  let getdata = async () => {
    let res = await axios.get('https://portfolioapi-9riq.onrender.com/api/findproject')
    console.log(res.data);
    setProjects(res.data);
  }
  return (
    <div className='work' style={{ minHeight: "88vh" }}>
      <BubbleEffect></BubbleEffect>
      <h1>projects</h1>
      <div className="container">
        <div className="row">
          {
            projects.length
              ?
              projects.map((project) => {
                return (
                  <div className='col-sm-3'>
                    <div className="card">
                      <div className="card-header">{project.name}</div>
                      <img src={project.image} alt="" className=" cardimage card-img-top p-2" />
                      <div className="card-body">
                        <i>{project.desc}</i> <br />
                      </div>
                      <div className="card-footer">
                        <div className="d-grid">
                          <button className="btn btn-primary"
                            onClick={() => { window.open(project.url) }}>
                            visit site
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <div className='d-flex justify-content-center mt-5'>
                <div class="spinner-border text-center " style={{width:'3rem',height:"3rem"}} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
          }
        </div>
      </div>

    </div>
  )
}


