import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import React from "react"
import styles from './styles.module.scss'

export const  MyBreadCrumb = () => {
return (

    <div>
      <Breadcrumb breadcrumbDelimiter="›" className={styles.breadContainer} tag="nav">
        <BreadcrumbItem className={styles.bread} active tag="a" href="/">Home </BreadcrumbItem>
        <BreadcrumbItem className={styles.breadActive}  tag="a">/ Info</BreadcrumbItem>
      </Breadcrumb>
    </div>
)
}

export default MyBreadCrumb
