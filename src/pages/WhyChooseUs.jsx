import React from 'react'
import '../style/Hover.css'

const WhyChooseUs = () => {
  return (
    <div style={{minHeight: '50vh'}}>
        <div style={{textAlign: 'center'}}>
            <h4 style={{color: 'rgb(244, 76, 104)'}}>WHY CHOOSE US</h4>
            <h1>WHY WE ARE BEST</h1>
        </div>
        <div className='chooseus' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem'}}>
            <div className='chooseus' style={{width: '20rem', backgroundColor:'rgb(244, 237, 237)', padding: '2rem'}}>
                <i className="fa-solid fa-location-crosshairs fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <p> <b>Clarified Vision & Target</b> </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat, maxime sapiente dolorum aspernatur ut.</p>
            </div>
            <div className='chooseus' style={{ width: '20rem' , backgroundColor:'rgb(244, 237, 237)', padding: '2rem'}}>
                <i className="fa-solid fa-chart-line fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <p> <b>High Performance</b> </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat, maxime sapiente dolorum aspernatur ut.</p>
            </div>
            <div className='chooseus' style={{ width: '20rem' ,  backgroundColor:'rgb(244, 237, 237)', padding: '2rem'}}>
                <i className="fa-solid fa-lock fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <p> <b>Maintain Secirity</b> </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat, maxime sapiente dolorum aspernatur ut.</p>
            </div>
            <div className='chooseus' style={{ width: '20rem' ,  backgroundColor:'rgb(244, 237, 237)', padding: '2rem'}}>
            <i className="fa-solid fa-star fa-2x" style={{color: 'rgb(244, 76, 104'}}></i>
                <p> <b>Better Strategy & Quality</b> </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugiat, maxime sapiente dolorum aspernatur ut.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs