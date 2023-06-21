import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
export default function Work() {
  let [projects,setProjects] = useState([]);
  useEffect(()=>{
      getdata()
  },[])
  let getdata = async()=>{
    let res = await axios.get('https://portfolioapi-9riq.onrender.com/api/findproject')
    console.log(res.data);
    setProjects(res.data);
  }
  return (
    <div className='work' style={{minHeight: "88vh"}}>
     
     <h1>projects</h1>
     
    <div className="container">
      <div className="row">
      {
      projects.map((project)=>{
         return(
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
                    onClick={()=>{window.open(project.url)}}>
                      visit site
                    </button>
                  </div>
                 </div>
              </div>
          </div>
         )
      })
     }
      </div>
    </div>
    
    </div>
  )
}


