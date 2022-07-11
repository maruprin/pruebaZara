import React from "react";
import styles from './styles.module.scss'
import { ProductsData } from "../../Data/productsData";

const Imagen = ({props}) => {
    const itemId=props.itemId
    let element = ProductsData[itemId-1]; 
   console.log(itemId)
   return(
        <div className={styles.containerImagen}>
           
        {
         <div className={styles.imagen}   key={1}>
             <img src={element.img} alt={element.name} />
         </div>
        }
       
     </div>
     
   
    )
}

export default Imagen
