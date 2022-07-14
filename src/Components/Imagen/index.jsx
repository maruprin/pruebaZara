import React from "react";
import styles from './styles.module.scss'


const Imagen = (props) => {
    
  
   return(
     <div className={styles.containerImagen}>
     
        <div className={styles.imagen}>
            <img src={props.imgPath} alt={props.alt} /> 
        </div>
     </div>

    )
}

export default Imagen
