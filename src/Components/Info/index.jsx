import React, { useEffect, useState } from "react";
import Acciones from "../Acciones";
import Cart from "../Cart";
import Descripcion from "../Descripcion";
import Header from "../Header";
import Imagen from "../Imagen";
import styles from './styles.module.scss'
import { useLocation } from "react-router-dom";
import axios from 'axios';

const urlProducts = 'https://front-test-api.herokuapp.com/api/product/';

const Info = () => {

   const location= useLocation();
   const itemId = location.state.from;
   const urlProductsId = urlProducts + itemId;
   //console.log(urlProductsId)
   const [imgPath, setImgPath] = useState("")//(ProductsData)
   const [altPath, setAltPath] = useState("")
   const [caracteristicas, setCaracteristicas] = useState({})
    const [colorCapacity, setColorCapacity] = useState({})


     const fetchData = async (url) => {
       await axios.get(url).then(response=>{
            //console.log(response);
           setImgPath(response.data.imgUrl);
           setAltPath(response.data.brand+" - "+response.data.model);

           const {brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight} = response.data;
           const objCaract = {brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight}
          
           setCaracteristicas(objCaract);
            
           const {colors, internalMemory} = response.data;
           const colorsAndCapacity = {colors, internalMemory};
           setColorCapacity(colorsAndCapacity);
           //console.log(colors)
           


           //console.log(response.data.brand+" - "+response.data.model)
       }).catch(error=>{console.log(error)})

       }

   useEffect(()=>{fetchData(urlProductsId)},[])

    return (
        <>
        <div className={styles.containerInfo}>
            <Header/>
            <Cart/>
            <p className={styles.titulo}>Ficha técnica</p> 
            <Imagen imgPath={imgPath} alt={altPath} />
            <Descripcion caracteristicas={caracteristicas} />
            <Acciones colorCapacity={colorCapacity} />

            
           
      
     
     </div>
    </>
    )
}

export default Info
