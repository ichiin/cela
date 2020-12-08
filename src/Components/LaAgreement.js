import React from 'react'
import './LaAgreement.css'

function LaAgreement() {
    
    return (
        <div style={{ height:'100vh',alignItems:'center', textAlign:'center'}}>
            <div className = 'Content' style={{ height:'80%'}}>
                <h1>LA AGREEMENT</h1>
                <img src='https://upload.wikimedia.org/wikipedia/hr/thumb/6/65/NKdinamozagreb.svg/1200px-NKdinamozagreb.svg.png' style={{width:'70%', height:'70%'}} />
            </div>
            <button id="no-print" onClick={()=> window.print()} className='no-print' style={{alignItems:'center',alignContent:'center'}} >generate PDF</button>
            
        </div>
    )
}

export default LaAgreement
