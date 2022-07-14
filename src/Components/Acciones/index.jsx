import React, { useEffect } from "react";
import styles from './styles.module.scss'
import {FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";



const Acciones = (props) => {

    let {colors, internalMemory} = props.colorCapacity;
    if(!internalMemory){internalMemory=[]}
    if(!colors){colors=[]}
            
    //console.log(colors)

    const[RBindexCapacidad, setRBindexCapacidad] = useState(0);
    //console.log(internalMemory)

    const[RBindexColores, setRBindexColores] = useState(0);



    //console.log(RBindexCapacidad === 0? true:false)
    const cambioRadioCapacidad = e =>{
        setRBindexCapacidad(e.target.value);
    }


    const cambioRadioColores = e =>{
       setRBindexColores(e.target.value);
       //console.log("Me cambio")
    }
    return (
            <div className={styles.accion}>
          <FormGroup>
            Elige la capacidad que deseas
            <br/><br/>
           

        {internalMemory.map((cap,i) => (
            <FormGroup className={styles.item}  key={i}>
                 <FormGroup >
                    <Input
            id={"radio" + i}
            type="radio"
            value={i}
            checked={RBindexCapacidad == i? true:false}
            onChange={cambioRadioCapacidad}
            />
            <Label for={"radio"+i}>
                {cap}
            </Label>
           </FormGroup>
           </FormGroup>
             )) }
            
             <FormGroup>
            Elige tu color favorito
            <br/><br/>
           
        {colors.map((col,i) => (
            
            <FormGroup className={styles.item}  key={i}>
                 <FormGroup >
                    <Input
            id={"radio" + i}
            type="radio"
            value={i}
            checked={RBindexColores == i? true:false}
            onChange={cambioRadioColores}
            />
            <Label for={"radio"+i}>
                {col}
            </Label>
           </FormGroup>
           </FormGroup>
             )) }
        
       
       
         
            </FormGroup>

           </FormGroup>

           <button>Añadir al carrito</button>
        </div>
       
    
    )
}

export default Acciones