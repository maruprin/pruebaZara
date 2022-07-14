import React from "react";
import styles from './styles.module.scss'


const Descripcion = (props) => {
    const {brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight} = props.caracteristicas;
    //console.log(props)
    return (
        <>
         {
         <div className={styles.descripcion}   key={1}>
             
            <p className={styles.itemsDescripcion}>
                
                Marca: <span className={styles.textLight}>{brand}</span>
                <br/> 
                Modelo: <span className={styles.textLight}>{model}</span>
                <br/> 
                CPU: <span className={styles.textLight}>{cpu}</span> 
                <br/> 
                RAM: <span className={styles.textLight}>{ram}</span>
                <br/>
                Sistema operativo: <span className={styles.textLight}>{os}</span>
                <br/>
                Resolución de pantalla: <span className={styles.textLight}>{displayResolution}</span> 
                <br/>
                Bateria: <span className={styles.textLight}>{battery}</span>
                <br/>
                Camara frontal: <span className={styles.textLight}>{secondaryCmera}</span>
                <br/>
                Camara trasera: <span className={styles.textLight}>{primaryCamera}</span>
                <br/>
                Dimensiones: <span className={styles.textLight}> {dimentions}</span>
                <br/>
                Peso: <span className={styles.textLight}>{weight}</span> 
                <br/>
                
                         
            </p>
         </div>
        }
       
       
    </>
    )
}

export default Descripcion