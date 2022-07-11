import React from "react";
import { ProductsData } from "../../Data/productsData";
import styles from './styles.module.scss'


const Descripcion = () => {
    let prueba = ProductsData[0]; 
    return (
        <>
         {
         <div className={styles.descripcion}   key={1}>
             
            <p>
                Marca: {ProductsData[1].marca}
                <br/> 
                Modelo: {ProductsData[1].modelo}
                <br/> 
                CPU: {ProductsData[1].CPU}
                <br/> 
                RAM: {ProductsData[1].RAM}
                <br/>
                Sistema operativo: {ProductsData[1].sistemaOperativo}
                <br/>
                Resolución de pantalla: {ProductsData[1].resolucionDePantalla}
                <br/>
                Bateria: {ProductsData[1].bateria}
                <br/>
                Camaras: {ProductsData[1].camaras}
                <br/>
                Dimensiones: {ProductsData[1].dimensiones}
                <br/>
                Peso: {ProductsData[1].peso}
                <br/>
                
                         
            </p>
         </div>
        }
       
       
    </>
    )
}

export default Descripcion