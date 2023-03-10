import React from 'react'
import './banner.css'
import Type from 'react-typical'
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"

function banner() {
  return (
    <div id='banner'>
      
      <div className="col-1">
        <div className="col-1-data">
          <div className="left">
              <a href="https://github.com/FuhadSanin"><FaGithub className='icons github'/></a>
              <a href="https://www.linkedin.com/in/fuhad-sanin-b469a3217"><FaLinkedin className='icons linkedin'/></a>
              <a href=""><FaTwitter className='icons twitter'/></a>
          </div>
          <div className="right">
              <h5>Hi there</h5>
              <h1>I'm <span className='text-primary'>Fuhad Sanin</span></h1>
              <h3><span className='auto-type'><Type steps={[' React Developer',3000,'Web Designer',1000,'Videographer',1000]} loop={Infinity}/> </span></h3>
              <button className='button'>Resume</button>
          </div>
        </div>
      </div>
    
        <div className="col-2">
            <div className="img">
              
            </div>
        </div>
    </div>

  )
}

export default banner