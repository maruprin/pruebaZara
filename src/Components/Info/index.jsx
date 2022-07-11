import React from "react";
import Acciones from "../Acciones";
import Cart from "../Cart";
import Descripcion from "../Descripcion";
import Header from "../Header";
import Imagen from "../Imagen";
import styles from './styles.module.scss'
import { useLocation } from "react-router-dom";


const Info = () => {
   const location= useLocation();
   const itemId = location.state.from;

    return (
        <>
        <div className={styles.containerInfo}>
            <Header/>
            <Cart/>
            <p className={styles.titulo}>Ficha técnica</p> 
            <Imagen props={{itemId:itemId}} />
            <Descripcion props={{itemId:itemId}} /> 
            <Acciones props={{itemId:itemId}} />
      
     
     </div>
    </>
    )
}

export default Info
