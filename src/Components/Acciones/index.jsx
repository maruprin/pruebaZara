import React, { useContext, useEffect } from "react";
import styles from './styles.module.scss'
import {FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import axios from 'axios';
import { CartContext } from "../../Context/cartContext";

const urlCart = 'https://front-test-api.herokuapp.com/api/cart';

const Acciones = (props) => {
    const {addItemToCart} = useContext(CartContext)
    //console.log(props.colorCapacity)
    let {colors, storages} = props.colorCapacity;
    if(!storages){storages=[]}
    if(!colors){colors=[]}
    
    //console.log(colors)

    const[RBindexCapacidad, setRBindexCapacidad] = useState(0);
    //console.log(props)

    const[RBindexColores, setRBindexColores] = useState(0);

    const postData = async (url,article) => {
        await axios.post(url,article).then(response=>{  
           //alert("Tu producto ha sido añadido correctamente");
        }).catch(error=>{console.log(error)})
        }



   const postToCart = () => {
         const id = props.itemId;
         const brand=props.brand
         const model=props.model
         const price=props.price
         const imgUrl=props.imgUrl
         const colorCode = colors[RBindexColores].code;
         const storageCode = storages[RBindexCapacidad].code;
         const article = {id, colorCode, storageCode}
         const articleCart ={id,brand,model,price,imgUrl}
         console.log(props)
        postData(urlCart,article);
        addItemToCart(articleCart)
    }



    //console.log(RBindexCapacidad === 0? true:false)
    const cambioRadioCapacidad = e =>{
        setRBindexCapacidad(e.target.value);
    }


    const cambioRadioColores = e =>{
       setRBindexColores(e.target.value);
       //console.log("Me cambio")
    }
    return (
            <div className={styles.accionContainer}>
          
            <p className={styles.tit}>Elige la capacidad que deseas</p> 
            
           

        {storages.map((cap,i) => (
            <div className={styles.itemAcc}  key={i}>
             <Input
                id={"radio" + i}
                type="radio"
                value={i}
                checked={RBindexCapacidad == i? true:false}
                onChange={cambioRadioCapacidad}
            />
            <label for={"radio"+i}>
                {cap.name}
            </label>
           </div>
             )) }
            
             
             <p className={styles.tit}>Elige tu color favorito</p>
            
           
        {colors.map((col,i) => (
            
            <div className={styles.itemAcc}  key={i}>
            <Input
                id={"radio" + i}
                type="radio"
                value={i}
                checked={RBindexColores == i? true:false}
                onChange={cambioRadioColores}
            />
            <label for={"radio"+i}>
                {col.name}
            </label>
           
           </div>
             )) }
    
           <button className={styles.btnAcciones} onClick={postToCart} >Añadir al carrito</button>
        </div>
       
    
    )
}

export default Acciones