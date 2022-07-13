import React from "react";
import styles from './styles.module.scss'
import Cart from '../Cart'
import Products from '../Products'
import Header from "../Header";
import { useState } from "react";
import { Breadcrumb } from "../Breadcrumbs";


const Home = () => {

    const [crumbs,setCrumbs] =useState(['Home','Info'])
    const selected = crumb =>{
        console.log(crumb);
    }
    return (
        <div className={styles.home}>
            <Header/>
            
            <Cart />
            <Products />
        </div>
    )
}

export default Home