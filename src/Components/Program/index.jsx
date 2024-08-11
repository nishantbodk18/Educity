import React from 'react'
import "./style.css"
import Program_1 from "../../assets/program-1.png"
import Program_2 from "../../assets/program-2.png"
import Program_3 from "../../assets/program-3.png"
import Program_Icon_1 from "../../assets/program-icon-1.png";
import Program_Icon_2 from "../../assets/program-icon-2.png";
import Program_Icon_3 from "../../assets/Program-icon-3.png";
const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
           <img src={Program_1} alt='Program'></img>
           <div className="caption">
            <img src={Program_Icon_1}></img>
            <p>Graduation degree</p>
           </div>
        </div>
        <div className='program'>
            <img src={Program_2} alt='Program'></img>
            <div className="caption">
            <img src={Program_Icon_2}></img>
            <p>Graduation degree</p>
           </div>
        </div>
        <div className='program'>
            <img src={Program_3} alt='Program'></img>
            <div className="caption">
            <img src={Program_Icon_3}></img>
            <p>Graduation degree</p>
           </div>
        </div>
    </div>
  )
}

export default Program
