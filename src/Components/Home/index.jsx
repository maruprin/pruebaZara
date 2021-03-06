import React from "react";
import styles from './styles.module.scss'
import Cart from '../Cart'
import Products from '../Products'
import Header from "../Header";
import { Breadcrumb } from "reactstrap";



const Home = () => {


    return (
        <div className={styles.home}>
            <Header/>
            <Cart />
            <Products />
        </div>
    )
}

export default Home