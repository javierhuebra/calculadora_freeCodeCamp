import React from 'react';
import '../stylesheets/ImagenFreeCode.css';

function ImagenFreeCode (props){
  return(
    <div className='freecodecamp-logo-contenedor'>
        <img src={props.imagenLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'/>
           
       
    </div> 
  );
    
  };

export default ImagenFreeCode;