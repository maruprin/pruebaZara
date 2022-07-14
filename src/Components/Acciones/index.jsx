import React from "react";
import styles from './styles.module.scss'
import {FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";



const Acciones = (props) => {

    const {colors, internalMemory} = props.colorCapacity;

    const[framework, setFramework] = useState(2);

    const cambioRadioFramework = e =>{
        setFramework(e.target.value);
    }

    const[framework2, setFramework2] = useState(2);

    const cambioRadioFramework2 = e =>{
        setFramework2(e.target.value);
    }
    return (
        
        <div className={styles.accion}>
          <FormGroup>
            Elige la capacidad que deseas
            <br/><br/>
            <FormGroup className={styles.item}>
           <FormGroup >
            <Input
            id="radio1"
            type="radio"
            value="1"
            checked={framework === 1? true:false}
            onChange={cambioRadioFramework}
            />
            <Label for="radio1">
                128gb
            </Label>
           </FormGroup>

for(i=0;i<colors.length-1;i++){

           <FormGroup >
            <Input
            id="'radio'+i"
            type="radio"
            value="i"
            checked={framework === i? true:false}
            onChange={cambioRadioFramework}
            />
            <Label for="'radio'+i">
                colors[i]
            </Label>
           </FormGroup>
}

           <FormGroup>
            <Input
            id="radio2"
            type="radio"
            value="2"
            checked={framework === 2? true:false}
            onChange={cambioRadioFramework}
            />
            <Label for="radio2">
                256gb
            </Label>
           </FormGroup>

           <FormGroup>
            <Input
            id="radio3"
            type="radio"
            value="3"
            checked={framework === 3? true:false}
            onChange={cambioRadioFramework}
            />
            <Label for="radio3">
                512gb
            </Label>
           </FormGroup>
           </FormGroup>
           </FormGroup>



           <FormGroup>
            Elige la capacidad que deseas
            <br/><br/>
            <FormGroup className={styles.item}>
           <FormGroup >
            <Input
            id="radio1"
            type="radio"
            value="1"
            checked={framework2 === 1? true:false}
            onChange={cambioRadioFramework2}
            />
            <Label for="radio1">
                Blue
            </Label>
           </FormGroup>

           <FormGroup>
            <Input
            id="radio2"
            type="radio"
            value="2"
            checked={framework2 === 2? true:false}
            onChange={cambioRadioFramework2}
            />
            <Label for="radio2">
                Grey
            </Label>
           </FormGroup>

           <FormGroup>
            <Input
            id="radio3"
            type="radio"
            value="3"
            checked={framework2 === 3? true:false}
            onChange={cambioRadioFramework2}
            />
            <Label for="radio3">
                Pink gold
            </Label>
           </FormGroup>
           <FormGroup>
            <Input
            id="radio4"
            type="radio"
            value="4"
            checked={framework2 === 4? true:false}
            onChange={cambioRadioFramework2}
            />
            <Label for="radio4">
                Gold
            </Label>
           </FormGroup>
           </FormGroup>
           </FormGroup>

           <button>Añadir al carrito</button>
        </div>
       
    
    )
}

export default Acciones