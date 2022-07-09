import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    const {id} = item;
    return <div>
        <img src={item.img} alt={item.name}/>
        <div>
            <div>
                <p> {item.name} </p>
                <div>
                    <button onClick={()=> addItemToCart(item)}>Agregar</button>
                    <button onClick={()=> deleteItemToCart(item)}>Quitar</button>
                </div>
            </div>
            <div>
                <div>
                    {item.amount}
                    <p>Total: {item.amount*item.price}€</p>
                </div>
            </div>
        </div>
    </div>;
    };

export default ItemCart