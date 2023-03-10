import React ,{useEffect}from 'react'
import './skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import img0 from '../../image/Skills/c.png'
import img1 from '../../image/Skills/react.png'
import img2 from '../../image/Skills/java.png'
import img3 from '../../image/Skills/github.png'
import img4 from '../../image/Skills/c++.png'
import img5 from '../../image/Skills/html.png'
import img6 from '../../image/Skills/firebase.png'


export default function Skills() {
 useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div id='skills'>
        <h1 >Skills( )</h1>
        <div className="underline"  data-aos="fade-right"></div>
        <div className="content-row" >
            <div className='content-data'><img src={img0} alt="" /></div>
            <div className='content-data'><img src={img2} alt="" /></div>
            <div className='content-data'><img src={img4} alt="" /></div>
            <div className='content-data'><img src={img5} alt="" /></div>
            <div className='content-data'><img src={img1} alt="" /></div>
            <div className='content-data'><img src={img3} alt="" /></div>
            <div className='content-data'><img src={img6} alt="" /></div>

        </div>

    </div>
  )
}
