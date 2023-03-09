import React from 'react';
import './box.css';

// Box styling container for wrapping around other components
const Box = ({title,  children }) => (
  <div className='box-container'>
    <div style={{ textAlign: 'center', fontSize: '20px'}}>{title}</div>
    {children}
  </div>
)

export default Box;
