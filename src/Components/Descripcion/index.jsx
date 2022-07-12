import React from "react";
import { ProductsData } from "../../Data/productsData";
import styles from './styles.module.scss'


const Descripcion = ({props}) => {
    const itemId=props.itemId
    let element = ProductsData[itemId-1]; 
    console.log(element)
    return (
        <>
         {
         <div className={styles.descripcion}   key={1}>
             
            <p>
                
                Marca: {element.marca}
                <br/> 
                Modelo: {element.modelo}
                <br/> 
                CPU: {element.CPU}
                <br/> 
                RAM: {element.RAM}
                <br/>
                Sistema operativo: {element.sistemaOperativo}
                <br/>
                Resolución de pantalla: {element.resolucionDePantalla}
                <br/>
                Bateria: {element.bateria}
                <br/>
                Camaras: {element.camaras}
                <br/>
                Dimensiones: {element.dimensiones}
                <br/>
                Peso: {element.peso}
                <br/>
                
                         
            </p>
         </div>
        }
       
       
    </>
    )
}

export default Descripcion