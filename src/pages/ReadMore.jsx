import React from 'react'

const ReadMore = () => {
  const openLinkInNewTab = () => {
    const url = 'https://www.fylehq.com';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{height: '23rem', width: '18rem', backgroundColor: 'rgb(244, 76, 104)', color: 'white', textAlign: 'center'}}>
        <i className="fa-solid fa-code" style={{marginTop: '5rem'}}></i>
        <h5>WEB DEVELOPMENT</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, possimus?</p>
        <button onClick={openLinkInNewTab} style={{marginTop: '2rem', height: '2rem', width: '10rem', border: 'none', color: 'rgb(244, 76, 104'}}><b>READ MORE</b></button>
    </div>
  )
}

export default ReadMore