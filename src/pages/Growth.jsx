import React from 'react'
import '../style/Hover.css';

const Growth = () => {
  return (
    <div style={{minHeight: '50vh'}}>
        <div style={{textAlign: 'center'}}>
            <h3 style={{color: 'rgb(244, 76, 104)'}}>EXPERTS GROWTS</h3>
            <h1>OUR COMPANY GROWTH</h1>
        </div>
        <div className='Growth' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem'}}>
            <div style={{width: '10rem', backgroundColor:'rgb(244, 237, 237)', padding: '2rem', textAlign: 'center'}}>
                <i class="fa-solid fa-heart fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <h1>199+</h1>
                <p>Staticified Customers</p>
            </div>
            <div style={{width: '10rem', backgroundColor:'rgb(244, 237, 237)', padding: '2rem', textAlign: 'center'}}>
            <i class="fa-solid fa-clock fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <h1>1591+</h1>
                <p>Days of Operation</p>
            </div>
            <div style={{width: '10rem', backgroundColor:'rgb(244, 237, 237)', padding: '2rem', textAlign: 'center'}}>
            <i class="fa-solid fa-circle-check fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <h1>283+</h1>
                <p>Complete Project</p>
            </div>
            <div style={{width: '10rem', backgroundColor:'rgb(244, 237, 237)', padding: '2rem', textAlign: 'center'}}>
            <i class="fa-solid fa-trophy fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <h1>75+</h1>
                <p>Win Awards</p>
            </div>
        </div>
    </div>
  )
}

export default Growth